import CustomIcon, { iconNames } from "@/components/shared/CustomIcon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn, timeDiff } from "@/lib/utils"
import { Lesson, Range } from "@/types"
import Link from "next/link"

function LessonImage({
    src,
    materialsCount
}: {
    src: string,
    materialsCount: number
}) {
    return (
        <div className="relative">
            <div className="absolute top-2 left-2">
                <Badge className="rounded-sm w-auto h-auto px-2 py-1">
                    <p>
                        {materialsCount} Materials
                    </p>
                    <CustomIcon name="stars" className="w-4 h-4" />
                </Badge>
            </div>
            <img
                src={src}
                className="w-full h-full aspect-video object-cover rounded-lg shadow-md"
            />
        </div>
    )
}

function LessonBadge({
    children,
    icon,
    className
}: {
    children: React.ReactNode,
    icon?: iconNames,
    className?: string
}) {
    return (
        <div className={cn(
            "inline-flex gap-2 items-center text-sm",
            className
        )}>
            {icon && <CustomIcon name={icon} className="w-5 h-5" />}
            {children}
        </div>
    )
}

function LessonCardBadgeContainer({
    subject,
    chapter,
    educationLevel,
    deadline,
}: Partial<Pick<Lesson, "chapter">> &
    Pick<Lesson, "subject" | "educationLevel" | "deadline">
) {
    return (
        <div className={cn(
            "w-full flex flex-col gap-2",
            chapter ? "xl:flex-row xl:justify-between" : "flex-row justify-between"
        )}>
            <div className="flex items-center gap-2">
                <LessonBadge
                    icon="fire"
                    className={cn(
                        chapter && "border-r pr-3"
                    )}
                >
                    {subject} {educationLevel}
                </LessonBadge>
                {chapter && (
                    <LessonBadge>
                        Chapter {chapter}
                    </LessonBadge>
                )}
            </div>
            <LessonBadge
                icon="fire"
            >
                {chapter && (
                    <span>
                        Deadline:&nbsp;
                    </span>
                )}
                <p>
                    {timeDiff(deadline).value} {timeDiff(deadline).unit}
                </p>
            </LessonBadge>
        </div >
    )
}

function LessonAiSuggestion({
    children,
    url
}: {
    children: React.ReactNode,
    url: string
}) {
    return (
        <Link
            href={url}
            className="group w-full bg-indigo-50 flex gap-4 items-center p-2"
        >

            <div className="flex gap-2 items-center">
                {children}
            </div>

            <CustomIcon name="arrow-right" className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:w-4 group-hover:h-4" />
        </Link>
    )
}

export function BigLessonCard({
    lesson,
    aiSuggestionText,
    progress,
    ...props
}: {
    lesson: Lesson,
    aiSuggestionText?: string,
    progress: Range<101>,
}) {
    return (
        <Card
            className="p-0 overflow-hidden gap-0"
            {...props}
        >
            <div className="grid p-2 gap-4 sm:grid-cols-4 sm:gap-2">
                <LessonImage src={lesson.imageSrc} materialsCount={lesson.materialCount} />
                <div className="p-2 space-y-3 flex flex-col sm:col-span-3">
                    <LessonCardBadgeContainer
                        subject={lesson.subject}
                        chapter={lesson.chapter}
                        educationLevel={lesson.educationLevel}
                        deadline={lesson.deadline}
                    />
                    <div className="h-full flex flex-col justify-between gap-4">
                        <CardHeader className="p-0">
                            <CardTitle>{lesson.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="flex gap-4 items-center">
                                <div className="grow space-y-2">
                                    <p className="text-sm">
                                        Progress:&nbsp;
                                        <span className="font-bold">
                                            {progress}%
                                        </span>
                                    </p>
                                    <Progress value={progress} />
                                </div>
                                <Button>
                                    Resume Lesson
                                </Button>
                            </div>
                        </CardContent>
                    </div>
                </div>
            </div>
            {aiSuggestionText && (
                <CardFooter className="p-0">
                    <LessonAiSuggestion
                        url="/"
                    >
                        <CustomIcon name="stars" className="w-4 h-4" />
                        <p className="text-sm">{aiSuggestionText}</p>
                    </LessonAiSuggestion>
                </CardFooter>
            )}
        </Card>
    )
}

export default function LessonCard({
    lesson,
}: {
    lesson: Lesson
}) {
    return (
        <Card
            className="p-2 overflow-hidden gap-0 flex-col-reverse"
        >
            <CardHeader className="p-2 grow">
                <CardDescription>Chapter {lesson.chapter}</CardDescription>
                <CardTitle>{lesson.name}</CardTitle>
            </CardHeader>
            <CardContent className="px-2 py-1">
                <LessonImage src={lesson.imageSrc} materialsCount={lesson.materialCount} />
            </CardContent>
            <CardFooter className="p-2">
                <LessonCardBadgeContainer
                    subject={lesson.subject}
                    educationLevel={lesson.educationLevel}
                    deadline={lesson.deadline}
                />
            </CardFooter>
        </Card>
    )
}
