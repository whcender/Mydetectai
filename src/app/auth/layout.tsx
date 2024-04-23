



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="bg-black">
                <main className="font-roboto 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl m-auto  max-sm:px-5 px-6 font-poppins min-h-screen flex items-center justify-center">
                    {children}
                </main>
                </div>
            </body>
        </html>
    )
}