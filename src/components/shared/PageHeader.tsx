export function PageHeaderTopContainer({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex flex-col justify-between gap-6">
            {children}
        </div>
    )
}

export function PageHeaderWidgetContainer({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex items-center gap-4 bg-sky-200 p-4 rounded-md">
            {children}
        </div>
    )
}

export default function PageHeader({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex flex-col gap-8 justify-between xl:flex-row">
            {children}
        </div>
    )
}
