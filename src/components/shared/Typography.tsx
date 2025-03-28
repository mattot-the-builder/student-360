import { cn } from "@/lib/utils";

export function TypographyH1({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <h1 className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            className
        )}>
            {children}
        </h1>
    )
}

export function TypographyH2({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <h2 className={cn(
            "scroll-m-20 text-2xl font-bold tracking-tight sm:text-3xl",
            className
        )}>
            {children}
        </h2>
    )
}

export function TypographyP({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <p className={cn(
            "leading-7",
            className
        )}>
            {children}
        </p>
    )
}
