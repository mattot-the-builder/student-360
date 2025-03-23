"use client"

import PreviousPageButton from "@/components/shared/PreviousPageButton";
import { useLessonSidebar } from "@/context/LessonSidebarContext";
import { SidebarToggleButton } from "@/components/student/LessonSidebar";
import CustomIcon from "@/components/shared/CustomIcon"
import { Lesson } from "@/types";

export default function LessonPageHeader({
    lesson
}: {
    lesson: Lesson
}) {
    const { isOpen } = useLessonSidebar();

    return (
        <nav className="px-6 py-2 flex items-center gap-4 relative border lg:px-20">
            <PreviousPageButton />
            <div className="inline-flex items-center pr-8">
                <CustomIcon name="book" variant="square" className="p-1.5 mr-2" />
                <div className="flex flex-col gap-x-2 font-semibold text-xs sm:flex-row sm:text-sm">
                    <p>
                        {lesson.subject} {lesson.educationLevel}
                    </p>
                    <span className="hidden sm:block">
                        |
                    </span>
                    <p className="hidden sm:block">
                        Chapter {lesson.chapter}:
                    </p>
                    <p className="hidden sm:block">
                        {lesson.name}
                    </p>
                </div>
            </div>
            {!isOpen && <SidebarToggleButton className="absolute right-0 top-2 rounded-r-none" />}
        </nav>
    )
}
