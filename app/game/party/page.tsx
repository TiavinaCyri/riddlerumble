"use client"
import React, { useCallback, useState } from "react"
import Map, { Marker, MarkerDragEvent } from "react-map-gl"
import * as turf from '@turf/turf'
import "mapbox-gl/dist/mapbox-gl.css"
import { Button } from "@nextui-org/button"

function Party() {

    const [marker, setMarker] = useState({
        latitude: 40,
        longitude: -100,
    })
    const [distance, setDistance] = useState(0)

    const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
        setMarker({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
        })
    }, [])

    const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
        //  * marker player
        var from = turf.point([event.lngLat.lng, event.lngLat.lat]);
        // TODO marker goal (fetch from enigma API)
        var to = turf.point([-100, 40]);
        var options = { units: 'kilometers' };
        // * distance between player and goal
        var distance = turf.distance(from, to, options);
        setDistance(distance)
    }, [])

    // * scoring system
    const calculateScoreDistance = (distance: number, maxDistance: number = 10000) => {
        distance = Math.min(distance, maxDistance);
        let score = 100 - (distance / maxDistance * 100);
        score = Math.max(0, Math.min(100, score));

        return Math.round(score);
    }

    return (
        <div className="w-full h-screen py-6 relative overflow-hidden">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-2 bg-gray-600 relative">
                    <h1>Find the place</h1>
                    <div className="absolute bottom-0 w-full py-2 flex justify-center">
                        <Button className="bg-green-500 text-white font-semibold">Submit</Button>
                    </div>
                </div>
                <div className="col-span-10 rounded-2xl">
                    <Map
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        initialViewState={{
                            longitude: -122.4,
                            latitude: 37.8,
                            zoom: 4,
                        }}
                        mapboxAccessToken="pk.eyJ1IjoidGhvbnkzMiIsImEiOiJjbHc5azQ5bWQwNWhjMmtxa2Q5dTcyNWxhIn0.pXpGUWi_9wWY3zwfflmzSQ"
                        style={{ width: "100%", height: "90dvh", margin: 0, padding: 0, borderRadius: "1rem", overflow: "hidden" }}
                    >
                        <Marker
                            longitude={marker.longitude}
                            latitude={marker.latitude}
                            anchor="bottom"
                            draggable
                            onDrag={onMarkerDrag}
                            onDragEnd={onMarkerDragEnd}
                        >
                            <svg
                                className="w-10 fill-black"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path>
                            </svg>
                        </Marker>
                    </Map>
                </div>
            </div>
        </div>
    )
}

export default Party
