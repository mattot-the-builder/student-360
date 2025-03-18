import CustomIcon, { iconNames } from "@/components/shared/CustomIcon";
import DashboardBlock, { DashboardBlockHeader } from "@/components/shared/DashboardBlock";
import PageHeader, { PageHeaderSummaryCardContainer, PageHeaderTopContainer, SummaryCard } from "@/components/shared/PageHeader"
import ResponsiveSection from "@/components/shared/ResponsiveSection"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/shared/Typography"
import LessonCard, { BigLessonCard } from "@/components/student/cards/LessonCard";
import ProgressSummaryCard from "@/components/shared/cards/ProgressSummaryCard";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Lesson } from "@/types";
import RankingCard from "@/components/student/cards/RankingCard";

const headerMenuItems: { name: string, icon: iconNames }[] = [
    {
        name: "Class",
        icon: "stars"
    },
    {
        name: "Assignments",
        icon: "stars"
    },
    {
        name: "Lesson",
        icon: "stars"
    },
    {
        name: "Quiz",
        icon: "stars"
    },
    {
        name: "Mock Exams",
        icon: "stars"
    },
]

const headerSummaryItems: { name: string, value: number, icon: iconNames, color: string }[] = [
    {
        name: "Days Streaks",
        value: 54,
        icon: "fire",
        color: "text-red-600"
    },
    {
        name: "Goals Reached",
        value: 6,
        icon: "target",
        color: "text-orange-600"
    },
    {
        name: "Points",
        value: 3400,
        icon: "awardStar",
        color: "text-purple-800"
    },
]

const continueLearningLessons: Lesson[] = [
    {
        subject: "Sejarah",
        name: "Peningkatan Tamadun India dan China",
        chapter: 5,
        educationLevel: "Form 1",
        materialCount: 12,
        deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        imageSrc: "https://placehold.co/320x180",
    },
    {
        subject: "Science",
        name: "Human Anatomy",
        chapter: 5,
        educationLevel: "Form 1",
        materialCount: 12,
        deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        imageSrc: "https://placehold.co/320x180",
    }
]

const recommendedLessons: Lesson[] = [
    {
        subject: "Sejarah",
        name: "Peningkatan Tamadun India dan China",
        chapter: 5,
        educationLevel: "Form 1",
        materialCount: 12,
        deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        imageSrc: "https://placehold.co/320x180",
    },
    {
        subject: "Science",
        name: "Heart and Life",
        chapter: 5,
        educationLevel: "Form 1",
        materialCount: 5,
        deadline: new Date(Date.now() + 1000 * 60 * 60),
        imageSrc: "https://placehold.co/320x180",
    },
    {
        subject: "Mathematics",
        name: "Trigonometry",
        chapter: 5,
        educationLevel: "Form 1",
        materialCount: 5,
        deadline: new Date(Date.now() + 1000 * 60 * 60 * 2),
        imageSrc: "https://placehold.co/320x180",
    }
]

export default function StudentHome() {
    return (
        <main>
            <ResponsiveSection className="space-y-8">
                <PageHeader>
                    <PageHeaderTopContainer>
                        <div>
                            <TypographyH1>
                                Welcome back, Sufi Muhammad
                            </TypographyH1>
                            <TypographyP>
                                Looks like you’re on the right track, congrats!
                            </TypographyP>
                        </div>
                        <div className="flex gap-3 overflow-x-auto">
                            {headerMenuItems.map((menuItem, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        index !== headerMenuItems.length - 1 && "border-r pr-3"
                                    )}
                                >
                                    <Button
                                        variant="ghost"
                                        className="p-2"
                                    >
                                        <CustomIcon
                                            name={menuItem.icon}
                                            variant="square"
                                        />
                                        {menuItem.name}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </PageHeaderTopContainer>
                    <div>
                        <PageHeaderSummaryCardContainer className="bg-sky-200/80">
                            {headerSummaryItems.map((summaryItem, index) => (
                                <SummaryCard key={index}>
                                    <div className="flex justify-center items-center gap-1">
                                        <CustomIcon
                                            name={summaryItem.icon}
                                            className={cn(
                                                "w-5 h-5",
                                                summaryItem.color
                                            )}
                                        />
                                        <span className="text font-semibold">
                                            {summaryItem.value}
                                        </span>
                                    </div>
                                    <p className="text-xs font-medium">
                                        {summaryItem.name}
                                    </p>
                                </SummaryCard>
                            ))}
                        </PageHeaderSummaryCardContainer>
                    </div>
                </PageHeader>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="space-y-6 grow">
                        <DashboardBlock>
                            <DashboardBlockHeader>
                                <TypographyH2>
                                    Continue Learning
                                </TypographyH2>
                                <Button
                                    variant="link"
                                >
                                    View All
                                </Button>
                            </DashboardBlockHeader>
                            {continueLearningLessons.map((lesson, index) => (
                                <BigLessonCard
                                    key={index}
                                    lesson={lesson}
                                    progress={80}
                                    aiSuggestionText={index === 0 ? "Power your learning with past exam questions" : undefined}
                                />
                            ))}
                        </DashboardBlock>
                        <DashboardBlock>
                            <DashboardBlockHeader>
                                <TypographyH2>
                                    Recommended Lessons
                                    <CustomIcon name="fire" className="ml-4" />
                                </TypographyH2>
                            </DashboardBlockHeader>
                            <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
                                {recommendedLessons.map((lesson, index) => (
                                    <LessonCard
                                        key={index}
                                        lesson={lesson}
                                    />
                                ))}
                            </div>
                        </DashboardBlock>
                    </div>
                    <div className="space-y-6 lg:w-1/2">
                        <DashboardBlock>
                            <ProgressSummaryCard
                                icon="target"
                            >
                                <CardHeader className="p-0 mb-2">
                                    <CardTitle className="flex items-center gap-2">
                                        Quiz Lesson 3
                                        <CustomIcon
                                            name="target"
                                            className="w-4 h-4"
                                        />
                                    </CardTitle>
                                    <CardDescription>
                                        Revisit your mistake
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-0 space-y-1">
                                    <Progress value={75} />
                                    <div className="flex justify-between text-muted-foreground">
                                        <small>18/24 Correct</small>
                                        <small>75%</small>
                                    </div>
                                </CardContent>
                            </ProgressSummaryCard>
                            <ProgressSummaryCard
                                icon="fire"
                            >
                                <CardHeader className="p-0 mb-2">
                                    <CardTitle className="flex items-center gap-2">
                                        Daily Goal
                                    </CardTitle>
                                    <CardDescription>
                                        You reached your daily 15pts!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <Progress value={100} />
                                </CardContent>
                            </ProgressSummaryCard>
                        </DashboardBlock>
                        <DashboardBlock>
                            <RankingCard />
                        </DashboardBlock>
                    </div>
                </div>
            </ResponsiveSection>
        </main>
    );
}
