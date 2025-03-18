export function DashboardBlockHeader({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <div className="flex justify-between items-center">
            {children}
        </div>
    )
}

export default function DashboardBlock({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <div className="space-y-4">
            {children}
        </div>
    )
}
