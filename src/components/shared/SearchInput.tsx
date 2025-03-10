"use client"

import { Input } from "@/components/ui/input";
import CustomIcon from "@/components/shared/CustomIcon";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SearchInput() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            className={cn(
                "flex items-center gap-0 rounded-md border border-input px-2",
                isFocused && "border-ring ring-ring/50 ring-[3px]",
            )}
        >
            <Input
                placeholder="Search..."
                className="bg-transparent border-none shadow-none px-2 focus-visible:border-none focus-visible:ring-transparent"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <CustomIcon
                name="search"
            />
        </div>
    )
}
