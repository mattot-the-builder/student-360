import CustomIcon, { iconNames } from "@/components/shared/CustomIcon";
import DashboardBlock, { DashboardBlockHeader } from "@/components/shared/DashboardBlock";
import PageHeader, { PageHeaderSummaryCardContainer, PageHeaderTopContainer, SummaryCard } from "@/components/shared/PageHeader"
import ResponsiveSection from "@/components/shared/ResponsiveSection"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/shared/Typography"
import { BigLessonCard } from "@/components/student/cards/LessonCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lesson } from "@/types";

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
                <div className="grid gap-6 sm:grid-cols-3">
                    <div className="space-y-6 sm:col-span-2">
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
                        </DashboardBlock>
                    </div>
                    <div>
                        <div className="w-full h-96 bg-sky-200/80"></div>
                    </div>
                </div>
            </ResponsiveSection>
        </main>
    );
}
