"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lesson, LESSON_STATUS } from "@/types"
import { useEffect, useState } from "react"
import LessonCard from "@/components/student/cards/LessonCard"
import { kebabToTitleCase } from "@/lib/utils"

const materials: Lesson[] = [
    {
        subject: "Sejarah",
        name: "Peningkatan Tamadun India dan China",
        chapter: 5,
        educationLevel: "Form 1",
        materialCount: 12,
        deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        imageSrc: "https://placehold.co/320x180",
        status: "not-started"
    },
    {
        subject: "Science",
        name: "Heart and Life",
        chapter: 5,
        educationLevel: "Form 1",
        materialCount: 5,
        deadline: new Date(Date.now() + 1000 * 60 * 60),
        imageSrc: "https://placehold.co/320x180",
        status: "in-progress"
    },
    {
        subject: "Mathematics",
        name: "Trigonometry",
        chapter: 5,
        educationLevel: "Form 1",
        materialCount: 5,
        deadline: new Date(Date.now() + 1000 * 60 * 60 * 2),
        imageSrc: "https://placehold.co/320x180",
        status: "in-progress"
    },
    {
        subject: "Sejarah",
        name: "Peningkatan Tamadun India dan China",
        chapter: 5,
        educationLevel: "Form 1",
        materialCount: 12,
        deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        imageSrc: "https://placehold.co/320x180",
        status: "completed"
    },
]

const filters: string[] = [
    "all-status",
    "not-started",
    "in-progress",
    "completed"
]

export default function Materials() {
    const [statusFilter, setStatusFilter] = useState("all-status");

    const [filteredLessons, setFilteredLessons] = useState<Lesson[]>([]);

    useEffect(() => {
        setFilteredLessons(materials)
    }, [])

    useEffect(() => {
        if (statusFilter === "all-status") {
            setFilteredLessons(materials)
        } else {
            setFilteredLessons(materials.filter(lesson => lesson.status === statusFilter))
        }
    }, [statusFilter])

    const FilteredLessons = () => {
        return (
            <>
                {
                    filteredLessons.map((lesson, index) => (
                        <LessonCard
                            key={index}
                            lesson={lesson}
                        />
                    ))
                }
            </>
        )
    }

    return (
        <div>
            <Tabs defaultValue="all-status">
                <TabsList>
                    {filters.map((filter, index) => (
                        <TabsTrigger
                            key={index}
                            value={filter}
                            onClick={() => setStatusFilter(filter)}
                        >
                            {kebabToTitleCase(filter)}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <TabsContent value="all-status">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <FilteredLessons />
                    </div>
                </TabsContent>

                <TabsContent value="not-started">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <FilteredLessons />
                    </div>
                </TabsContent>

                <TabsContent value="in-progress">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <FilteredLessons />
                    </div>
                </TabsContent>

                <TabsContent value="completed">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <FilteredLessons />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
