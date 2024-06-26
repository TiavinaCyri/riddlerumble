import type { Metadata } from "next"
import { NextUIProvider } from "@nextui-org/react"
import dynamic from "next/dynamic"
const Footer = dynamic(() => import("@/components/landing/Footer"))
const ThemeHandler = dynamic(() => import("@/components/misc/ThemeHandler"))
import ReactQueryProvider from "@/utils/ReactQueryProvider"
import "./globals.css"
import NoDevToolsProvider from "@/utils/NoDevToolsProvider"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
    title: "RR - The Map Quest",
    description: "Guess the place",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" data-theme="light">
            <body>
                <NextUIProvider>
                    <Toaster />
                    <main className="px-[2%] py-3">
                        <ReactQueryProvider>
                            <NoDevToolsProvider>{children}</NoDevToolsProvider>
                        </ReactQueryProvider>
                    </main>
                    <footer className="mt-20">
                        <Footer />
                    </footer>
                    {/* theme handler */}
                    <div className="fixed z-50 bottom-0 left-[50%] -translate-x-[50%] py-1 px-3">
                        <ThemeHandler />
                    </div>
                </NextUIProvider>
            </body>
        </html>
    )
}
