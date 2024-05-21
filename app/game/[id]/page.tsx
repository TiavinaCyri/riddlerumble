/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Avatar, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useUser } from "@/store/useUser"
import { ReactTyped } from "react-typed"
import React, { useCallback, useState, useEffect, useRef } from "react"
import { MapMouseEvent, MapRef, Marker, MarkerDragEvent } from "react-map-gl"
import Countdown, { CountdownRendererFn } from "react-countdown"
import Link from "next/link"
import dynamic from "next/dynamic"
const Map = dynamic(() => import("react-map-gl"))
const SvgDecoEnigme = dynamic(() => import("@/components/misc/SvgDecoEnigme"))
import Image from "next/image"
import getCountryCode from "@/utils/getCountryCode"
import * as turf from "@turf/turf"
import "mapbox-gl/dist/mapbox-gl.css"
import { redirect } from "next/navigation"
import { MAX_PLAYERS } from "@/utils/constants"
import useSelectedRoom from "@/store/useSelectedRoom"

const PARTY_START_TIME_KEY = "partyStartTime"

const fetchRoom = async (roomId: string) => {
    const response = await fetch("/api/getRoom", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ room_id: roomId }),
    })
    if (!response.ok) {
        throw new Error("Failed to fetch room data")
    }
    return response.json()
}

const create_temp_room = async (latitude: number, longitude: number, time: string, id_user: string, id_room: string) => {
    const response = await fetch("/api/createTempRoom", {
        body: JSON.stringify({ latitude, longitude, time, id_user, id_room }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to create temp room")
    return await response.json()
}

const create_player_stat = async (score: number, id_user: string, id_room: string) => {
    const response = await fetch("/api/createPlayerStat", {
        body: JSON.stringify({ score, id_user, id_room }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to create temp room")
    return await response.json()
}

const getTempRoom = async (id_room: string) => {
    const response = await fetch("/api/getTempRoomPerRoom", {
        body: JSON.stringify({ id_room }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to fetch temp room")
    const jsonData = await response.json()
    return jsonData
}

const disableRoom = async (id_room: string) => {
    const response = await fetch("/api/disableRoom", {
        body: JSON.stringify({ id_room }),
        method: "PUT",
        headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to create temp room")
    return await response.json()
}

const updateUserScore = async (user_id: string, player_score: number) => {
    const response = await fetch("/api/updateUserScore", {
        body: JSON.stringify({ user_id, player_score }),
        method: "PUT",
        headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to update user score")
    return await response.json()
}

function Party({ params }: { params: { id: string } }) {
    const { isPending: isRoomPending, data: roomData } = useQuery({
        queryKey: ["roomData"],
        queryFn: () => fetchRoom(params.id),
        staleTime: 1000 * 60 * 60 * 24,
    })
    const [markerAllPlayers, setMarkerAllPlayers] = useState([])
    const Completionist = () => {
        localStorage.removeItem(PARTY_START_TIME_KEY)
        const { isOpen, onOpen, onOpenChange } = useDisclosure()

        const { isPending: isTempRoomPending, data: tempRoomData } = useQuery({
            queryKey: ["tempRoomData"],
            queryFn: () => getTempRoom(params.id),
        })

        setMarkerAllPlayers(tempRoomData)

        const disableRoomFun = useMutation({
            mutationKey: ["disableRoomFun"],
            mutationFn: async () => {
                return await disableRoom(params.id)
            },
            onError: (error) => {
                console.log(error)
            },
            onSuccess: (data) => {
                console.log("Room disabled! ", data)
            },
        })

        useEffect(() => {
            setShowTarget(true)
            onOpen()
            mapRef.current?.flyTo({ center: [targetMarker.longitude, targetMarker.latitude], duration: 2000, zoom: 5 })
            disableRoomFun.mutate()
        }, [])
        return (
            <Modal className="-translate-x-[100%]" placement="bottom-center" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Result</ModalHeader>
                            <ModalBody>
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left">Pseudo</th>
                                            <th className="px-4 py-2 text-right">Time</th>
                                            <th className="px-4 py-2 text-right">Coordonates</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isTempRoomPending ? (
                                            <tr className="border-b border-current w-full">
                                                <td colSpan={1} className="py-2">
                                                    <div className="flex justify-start">
                                                        <span className="loading loading-dots loading-md"></span>
                                                    </div>
                                                </td>
                                                <td colSpan={1} className="py-2">
                                                    <div className="flex justify-end">
                                                        <span className="loading loading-dots loading-md"></span>
                                                    </div>
                                                </td>
                                                <td colSpan={1} className="py-2">
                                                    <div className="flex justify-end px-4">
                                                        <span className="loading loading-dots loading-md"></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            tempRoomData?.map((tempRoom: any, index: number) => (
                                                <tr key={index} className="border-b border-current">
                                                    <td className="px-4 py-2 flex items-center gap-2 justify-between">
                                                        <div className="flex flex-col gap-1">
                                                            <Avatar className="w-5 h-5" showFallback name={tempRoom.id_user.pseudo} src={tempRoom.id_user.avatar} alt="Avatar" />
                                                            <Image
                                                                width={64}
                                                                height={64}
                                                                src={`https://flagsapi.com/${getCountryCode(tempRoom.id_user.nationality)}/shiny/64.png`}
                                                                alt={tempRoom.id_user.pseudo}
                                                                className="w-4"
                                                            />
                                                        </div>
                                                        <span>{tempRoom.id_user.pseudo}</span>
                                                    </td>
                                                    <td className="px-4 py-2 text-right">{tempRoom.time}</td>
                                                    <td className="px-4 py-2 text-right">
                                                        Lat: {tempRoom.latitude.toFixed(2)} , Long: {tempRoom.longitude.toFixed(2)}
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </ModalBody>
                            <ModalFooter>
                                <Link href={"/game"}>
                                    <Button>Close</Button>
                                </Link>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        )
    }

    const timerRender: CountdownRendererFn = ({ minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />
        } else {
            const formattedMinutes = String(minutes).padStart(2, "0")
            const formattedSeconds = String(seconds).padStart(2, "0")

            return (
                <span className="text-3xl bg-base-200 px-2 rounded-lg">
                    {formattedMinutes}:{formattedSeconds}
                </span>
            )
        }
    }

    const mapRef = useRef<MapRef>(null!)
    const [marker, setMarker] = useState({
        latitude: 18,
        longitude: 46,
    })

    const [showTarget, setShowTarget] = useState(false)
    const [targetMarker, setTargetMarker] = useState({
        latitude: -18,
        longitude: 46,
    })
    useEffect(() => {
        if (roomData) {
            setTargetMarker({
                latitude: roomData.latitude,
                longitude: roomData.longitude,
            })
        }
    }, [roomData])

    const [startTime, setStartTime] = useState<number | null>(null)
    const [distance, setDistance] = useState(0)
    const [elapsedTime, setElapsedTime] = useState("")
    const [totalScore, setTotalScore] = useState(0)

    useEffect(() => {
        const savedStartTime = localStorage.getItem(PARTY_START_TIME_KEY)
        if (savedStartTime) {
            setStartTime(parseInt(savedStartTime, 10))
        } else {
            const newStartTime = Date.now()
            setStartTime(newStartTime)
            localStorage.setItem(PARTY_START_TIME_KEY, newStartTime.toString())
        }
    }, [])

    const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
        setMarker({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
        })
    }, [])

    const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
        var from = turf.point([event.lngLat.lng, event.lngLat.lat])
        var to = turf.point([targetMarker.longitude, targetMarker.latitude])
        var options = { units: "kilometers" }
        var distance = turf.distance(from, to, options)

        setDistance(distance)
    }, [])

    const clickPostion = (event: MapMouseEvent) => {
        if (!showTarget) {
            setMarker({
                longitude: event.lngLat.lng,
                latitude: event.lngLat.lat,
            })
            var from = turf.point([event.lngLat.lng, event.lngLat.lat])
            var to = turf.point([targetMarker.longitude, targetMarker.latitude])
            var options = { units: "kilometers" }
            var distance = turf.distance(from, to, options)

            setDistance(distance)
        }
    }

    const calculateScoreDistance = (distance: number, maxDistance: number = 1750) => {
        distance = Math.min(distance, maxDistance)
        let score = 100 - (distance / maxDistance) * 100
        score = Math.max(0, Math.min(100, score))

        return Math.round(score)
    }

    const user = useUser((state) => state.user)
    const createTempRoom = useMutation({
        mutationKey: ["createTempRoom"],
        mutationFn: async () => {
            return await create_temp_room(marker.latitude, marker.longitude, elapsedTime, user?.id, roomData && roomData.id)
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log("Temp Room created successfully! ", data)
        },
    })

    const createPlayerStat = useMutation({
        mutationKey: ["createPlayerStat"],
        mutationFn: async () => {
            return await create_player_stat(totalScore, user?.id, roomData && roomData.id)
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log("Player Stat created successfully! ", data)
        },
    })

    const updateUserScoreMutation = useMutation({
        mutationKey: ["updateUserScoreMutatiom"],
        mutationFn: async () => {
            return await updateUserScore(user?.id, totalScore)
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log("User score updated successfully! ", data)
        },
    })
    const setSelectedRoom = useSelectedRoom((state) => state.setSelectedRoom)
    const submitResult = () => {
        const elapsedTime = Date.now() - (startTime || Date.now())
        const elapsedMinutes = Math.floor(elapsedTime / 60000)
        const elapsedSeconds = Math.floor((elapsedTime % 60000) / 1000)
        const formattedElapsedTime = `${String(elapsedMinutes).padStart(2, "0")}:${String(elapsedSeconds).padStart(2, "0")}`
        setElapsedTime(formattedElapsedTime)

        const maxTime = 300000
        const timePercentage = (elapsedTime / maxTime) * 100
        const timeScore = Math.round(Math.max(0, 100 - timePercentage))

        const scoreDistance = calculateScoreDistance(distance)

        const goldenRatio = (1 + Math.sqrt(5)) / 2
        const distanceWeight = goldenRatio * 0.3
        const timeWeight = 1 / goldenRatio

        const totalScore = Math.round((scoreDistance * distanceWeight + timeScore * timeWeight) / (distanceWeight + timeWeight))
        setShowTarget(true)
        setTotalScore(roomData.level == "high-level" ? totalScore - penalityPoints : totalScore - penalityPoints + 10)
        mapRef.current?.flyTo({ center: [targetMarker.longitude, targetMarker.latitude], duration: 2000, zoom: 5 })
        createTempRoom.mutate()
        createPlayerStat.mutate()
        updateUserScoreMutation.mutate()
        localStorage.removeItem(PARTY_START_TIME_KEY)
        setSelectedRoom(null)
    }

    // NOTE: prevent dev tools and context menus
    const [penalityPoints, setPenalityPoints] = useState(0)
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault()
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "u") || e.key === "F12") {
                e.preventDefault()
            }
        }

        const handleTabNavSwitch = () => {
            if (document.hidden && !showTarget) {
                setPenalityPoints(penalityPoints + 10)
            }
        }

        document.addEventListener("contextmenu", handleContextMenu)
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("visibilitychange", handleTabNavSwitch)

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu)
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("visibilitychange", handleTabNavSwitch)
        }
    }, [])

    if (startTime === null) {
        return (
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    }

    const checkUnauthorization = () => {
        return roomData && roomData.nb_players !== MAX_PLAYERS && !roomData.user_pseudo.split(", ").includes(user?.pseudo) && process.env.NODE_ENV === "production"
    }

    if (checkUnauthorization()) {
        redirect("/game/")
    }

    return (
        <div className="w-full h-screen py-6 overflow-hidden fixed z-50 bg-base-100">
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-2 relative space-y-4">
                    <div className="translate-y-14">
                        {roomData && <h1 className={`text-center ${roomData.level == "high-level" && "text-red-500"}`}>{roomData.level == "high-level" ? "High Level (+10 pts)" : "Normal Level"}</h1>}
                        <h1 className="text-3xl text-center">Find the place</h1>
                        <SvgDecoEnigme />
                        {isRoomPending ? (
                            <div className="flex justify-center">
                                <span className="loading loading-bars loading-md"></span>
                            </div>
                        ) : (
                            <>
                                <ReactTyped startWhenVisible strings={[roomData.prompt]} typeSpeed={40} />
                            </>
                        )}
                        <SvgDecoEnigme />
                    </div>
                    <div className="absolute bottom-0 w-full py-2">
                        <div className="space-y-4">
                            {penalityPoints != 0 && (
                                <div className="text-center translate-y-2">
                                    <label className="text-red-500">Penality Points : - {penalityPoints} pts</label>
                                </div>
                            )}
                            {showTarget && (
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-2xl">Score: {totalScore}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-5">
                                            <div className="flex gap-1 items-center">
                                                <svg className="w-6 stroke-current" viewBox="0 0 64 64" strokeWidth="3" fill="none">
                                                    <path d="M17.94,54.81a.1.1,0,0,1-.14,0c-1-1.11-11.69-13.23-11.69-21.26,0-9.94,6.5-12.24,11.76-12.24,4.84,0,11.06,2.6,11.06,12.24C28.93,41.84,18.87,53.72,17.94,54.81Z" />
                                                    <circle cx="17.52" cy="31.38" r="4.75" />
                                                    <path d="M49.58,34.77a.11.11,0,0,1-.15,0c-.87-1-9.19-10.45-9.19-16.74,0-7.84,5.12-9.65,9.27-9.65,3.81,0,8.71,2,8.71,9.65C58.22,24.52,50.4,33.81,49.58,34.77Z" />
                                                    <circle cx="49.23" cy="17.32" r="3.75" />
                                                    <path d="M17.87,54.89a28.73,28.73,0,0,0,3.9.89" />
                                                    <path d="M24.68,56.07c2.79.12,5.85-.28,7.9-2.08,5.8-5.09,2.89-11.25,6.75-14.71a16.72,16.72,0,0,1,4.93-3" strokeDasharray="7.8 2.92" />
                                                    <path d="M45.63,35.8a23,23,0,0,1,3.88-.95" />
                                                </svg>
                                                <span className="text-sm">Distance:</span>
                                            </div>
                                            <p className="text-sm">{distance.toFixed(2)} km</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-1 items-center">
                                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-5 stroke-current">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                <span className="text-sm">Elapse time :</span>
                                            </div>
                                            <p className="text-sm">{elapsedTime == "" ? "Failed" : elapsedTime}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-center">
                                {!showTarget ? (
                                    <Button onClick={submitResult} className="bg-green-500 text-white font-semibold">
                                        Submit
                                    </Button>
                                ) : (
                                    <Link href={"/game"}>
                                        <Button>Close</Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 rounded-2xl relative">
                    <div className="absolute z-50 top-3 left-3">{roomData && <Countdown date={startTime + roomData.delay} renderer={timerRender} />}</div>
                    <Map
                        ref={mapRef as React.RefObject<MapRef>}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        initialViewState={{
                            longitude: 46,
                            latitude: -18,
                            zoom: 4,
                        }}
                        onClick={clickPostion}
                        mapboxAccessToken="pk.eyJ1IjoidGhvbnkzMiIsImEiOiJjbHc5azQ5bWQwNWhjMmtxa2Q5dTcyNWxhIn0.pXpGUWi_9wWY3zwfflmzSQ"
                        style={{ width: "100%", height: "85dvh", margin: 0, padding: 0, borderRadius: "1rem", overflow: "hidden" }}
                    >
                        {!showTarget && (
                            <Marker longitude={marker.longitude} latitude={marker.latitude} anchor="bottom" draggable={!showTarget ? true : false} onDrag={onMarkerDrag} onDragEnd={onMarkerDragEnd}>
                                <svg className="stroke-black w-10" viewBox="0 0 264.018 264.018">
                                    <g>
                                        <path
                                            d="M132.009,0c-42.66,0-77.366,34.706-77.366,77.366c0,11.634,2.52,22.815,7.488,33.24c0.1,0.223,0.205,0.442,0.317,0.661
		l58.454,113.179c2.146,4.154,6.431,6.764,11.106,6.764c4.676,0,8.961-2.609,11.106-6.764l58.438-113.148
		c0.101-0.195,0.195-0.392,0.285-0.591c5.001-10.455,7.536-21.67,7.536-33.341C209.375,34.706,174.669,0,132.009,0z
		 M132.009,117.861c-22.329,0-40.495-18.166-40.495-40.495c0-22.328,18.166-40.494,40.495-40.494s40.495,18.166,40.495,40.494
		C172.504,99.695,154.338,117.861,132.009,117.861z"
                                        />
                                        <path
                                            d="M161.81,249.018h-59.602c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h59.602c4.143,0,7.5-3.357,7.5-7.5
		C169.31,252.375,165.952,249.018,161.81,249.018z"
                                        />
                                    </g>
                                </svg>
                            </Marker>
                        )}
                        {/* result marker */}
                        {showTarget && (
                            <Marker longitude={targetMarker.longitude} latitude={targetMarker.latitude} anchor="bottom">
                                <svg className="stroke-black w-14 animate-bounce" viewBox="0 0 296.999 296.999">
                                    <g>
                                        <path
                                            d="M141.914,185.802c1.883,1.656,4.234,2.486,6.587,2.486c2.353,0,4.705-0.83,6.587-2.486
		c2.385-2.101,58.391-52.021,58.391-103.793c0-35.842-29.148-65.002-64.977-65.002c-35.83,0-64.979,29.16-64.979,65.002
		C83.521,133.781,139.529,183.701,141.914,185.802z M148.501,65.025c9.302,0,16.845,7.602,16.845,16.984
		c0,9.381-7.543,16.984-16.845,16.984c-9.305,0-16.847-7.604-16.847-16.984C131.654,72.627,139.196,65.025,148.501,65.025z"
                                        />
                                        <path
                                            d="M273.357,185.773l-7.527-26.377c-1.222-4.281-5.133-7.232-9.583-7.232h-53.719c-1.942,2.887-3.991,5.785-6.158,8.699
		c-15.057,20.23-30.364,33.914-32.061,35.41c-4.37,3.848-9.983,5.967-15.808,5.967c-5.821,0-11.434-2.117-15.81-5.969
		c-1.695-1.494-17.004-15.18-32.06-35.408c-2.167-2.914-4.216-5.813-6.158-8.699h-53.72c-4.45,0-8.361,2.951-9.583,7.232
		l-8.971,31.436l200.529,36.73L273.357,185.773z"
                                        />
                                        <path
                                            d="M296.617,267.291l-19.23-67.396l-95.412,80.098h105.06c3.127,0,6.072-1.467,7.955-3.963
		C296.873,273.533,297.474,270.297,296.617,267.291z"
                                        />
                                        <path
                                            d="M48.793,209.888l-30.44-5.576L0.383,267.291c-0.857,3.006-0.256,6.242,1.628,8.738c1.883,2.496,4.828,3.963,7.955,3.963
		h38.827V209.888z"
                                        />
                                        <polygon points="62.746,212.445 62.746,279.992 160.273,279.992 208.857,239.207 	" />
                                    </g>
                                </svg>
                            </Marker>
                        )}
                        {/* all players markers */}
                        {markerAllPlayers &&
                            markerAllPlayers.map((marker: any, index: number) => (
                                <Marker key={index} longitude={marker.longitude} latitude={marker.latitude} anchor="bottom">
                                    <Avatar isBordered color="primary" showFallback name="M" src={marker.id_user.avatar!} />
                                </Marker>
                            ))}
                    </Map>
                </div>
            </div>
        </div>
    )
}

export default Party
