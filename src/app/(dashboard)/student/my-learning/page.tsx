import CustomIcon from "@/components/shared/CustomIcon";
import DashboardBlock, { DashboardBlockHeader } from "@/components/shared/DashboardBlock";
import ResponsiveSection from "@/components/shared/ResponsiveSection"
import { TypographyH2 } from "@/components/shared/Typography"
import { BigLessonCard } from "@/components/student/cards/LessonCard";
import Materials from "@/components/student/Materials";
import { Button } from "@/components/ui/button";
import { Lesson } from "@/types";

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
    },
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

export default async function MyLearning() {
    return (
        <main>
            <ResponsiveSection className="space-y-8">
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
                    <div className="grid gap-4 xl:grid-cols-2">
                        {continueLearningLessons.map((lesson, index) => (
                            <BigLessonCard
                                key={index}
                                lesson={lesson}
                                progress={80}
                                aiSuggestionText={[0, 3].includes(index) ? "Power your learning with past exam questions" : undefined}
                            />
                        ))}
                    </div>
                </DashboardBlock>
                <DashboardBlock>
                    <DashboardBlockHeader>
                        <TypographyH2>
                            All Materials
                            <CustomIcon name="fire" className="ml-4" />
                        </TypographyH2>
                    </DashboardBlockHeader>
                    <Materials />
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {/*materials.map((lesson, index) => (
                            <LessonCard
                                key={index}
                                lesson={lesson}
                            />
                        ))*/}
                    </div>
                </DashboardBlock>
            </ResponsiveSection>
        </main>
    );
}
