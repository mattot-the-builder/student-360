import { cn } from "@/lib/utils"

export default function ResponsiveSection({
    children,
    className,
    ...props
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <section
            className={cn(
                "p-6 lg:px-20",
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}
