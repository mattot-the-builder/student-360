import CustomIcon, { iconNames } from "@/components/shared/CustomIcon";
import PageHeader, { PageHeaderSummaryCardContainer, PageHeaderTopContainer, SummaryCard } from "@/components/shared/PageHeader"
import ResponsiveSection from "@/components/shared/ResponsiveSection"
import { TypographyH1, TypographyP } from "@/components/shared/Typography"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export default function StudentHome() {
    return (
        <main>
            <ResponsiveSection>
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
            </ResponsiveSection>
        </main>
    );
}
