"use client"

import ResponsiveSection from "@/components/shared/ResponsiveSection";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationTabItem({
    href,
    children
}: Readonly<{
    href: string,
    children: React.ReactNode
}>) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={cn(
                "p-2 text-muted-foreground text-nowrap hover:border-b-[3px] hover:border-muted-foreground/20",
                pathname === href && "border-b-[3px] border-black text-black font-semibold"
            )}
        >
            {children}
        </Link>
    )
}

export default function NavigationTab({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="w-full relative">
            <ResponsiveSection
                className="w-full py-0 flex gap-4 overflow-x-auto"
            >
                {children}
            </ResponsiveSection>
            <div className="absolute w-full bottom-[1px] border-b -z-10"></div>
        </div>
    )
}
