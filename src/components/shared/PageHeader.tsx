import { cn } from "@/lib/utils"

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

export function PageHeaderSummaryCardContainer({
    children,
    className,
    ...props
}: Readonly<{
    children: React.ReactNode,
    className?: string,
}>) {
    return (
        <div
            className={cn(
                "flex justify-between items-center gap-4 p-2 rounded-xl overflow-hidden sm:w-fit sm:justify-start",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export function SummaryCard({
    children,
    className,
    ...props
}: Readonly<{
    children: React.ReactNode,
    className?: string,
}>) {
    return (
        <div
            className={cn(
                "flex flex-col items-center gap-2 p-2 rounded-lg sm:px-3",
                className
            )}
            {...props}
        >
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
