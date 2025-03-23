"use client"

import { useLessonSidebar } from "@/context/LessonSidebarContext";
import { Button } from "@/components/ui/button";
import CustomIcon from "@/components/shared/CustomIcon";
import { cn } from "@/lib/utils";
import { LessonContent } from "@/types";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const lessonTabs = [
    "Content",
    "File"
]

type LessonTabKey = typeof lessonTabs[number];

export function SidebarToggleButton({
    className
}: {
    className?: string
}) {
    const { toggleSidebar } = useLessonSidebar();

    return (
        <Button
            size="lg"
            className={cn(className)}
            onClick={toggleSidebar}
        >
            <CustomIcon name="arrow-left" />
        </Button>
    )
}

export default function LessonSidebar({
    lessonContent,
    className
}: {
    lessonContent: LessonContent,
    className?: string
}) {
    const { isOpen, toggleSidebar } = useLessonSidebar();
    const [selectedTab, setSelectedTab] = useState<LessonTabKey>("Content");

    if (!isOpen) {
        return null
    }

    return (
        <nav className={cn(
            "absolute top-0 right-0 z-10 min-h-full py-2 border bg-background overflow-hidden xl:static xl:block",
            className
        )}>
            <div className="flex justify-between items-center">
                <div className="inline-flex items-center">
                    {lessonTabs.map((tab, index) => (
                        <button
                            key={index}
                            className={cn(
                                "px-3 py-2 text-muted-foreground text-nowrap border-b-[3px] border-transparent hover:border-muted-foreground/20",
                                selectedTab === tab && "border-b-[3px] border-black text-black font-semibold hover:border-foreground"
                            )}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <Button
                    variant="ghost"
                    onClick={toggleSidebar}
                >
                    <CustomIcon name="close" />
                </Button>
            </div>
            <Accordion type="multiple" className="overflow-y-auto">
                {lessonContent.map((section, index) => (
                    <AccordionItem key={index} value={section.title}>
                        <AccordionTrigger
                            className="px-4 py-3 bg-muted rounded-none font-semibold "
                        >
                            Section {index + 1}: {section.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3">
                            <ol className="flex flex-col gap-2">
                                {section.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="inline-flex gap-4"
                                    >
                                        <Checkbox
                                            checked={item.isCompleted}
                                            className="w-6 h-6"
                                        />
                                        <p>
                                            <span className="mr-2">
                                                {index + 1}.
                                            </span>
                                            {item.title}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </nav>
    )
}
