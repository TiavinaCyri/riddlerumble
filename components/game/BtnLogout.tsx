import { getLogoutUrl } from "@/services/user-action"
import { Button } from "@nextui-org/button"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

const BtnLogout = () => {
    const { isPending, data } = useQuery({
        queryKey: ["logout"],
        queryFn: async () => {
            return await getLogoutUrl()
        },
    })

    if (isPending) {
        return <div>...</div>
    }

    return (
        <Link href={data!}>
            <Button
                className="rounded-full"
                isIconOnly
                aria-label="Logout"
            >
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                </svg>
            </Button>
        </Link>
    )
}

export default BtnLogout
