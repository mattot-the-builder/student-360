import CustomIcon, { iconNames } from "@/components/shared/CustomIcon";
import PageHeader, { PageHeaderTopContainer, PageHeaderWidgetContainer } from "@/components/shared/PageHeader"
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
                        <PageHeaderWidgetContainer>
                            test
                        </PageHeaderWidgetContainer>
                    </div>
                </PageHeader>
            </ResponsiveSection>
        </main>
    );
}
