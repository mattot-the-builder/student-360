import NavigationTab, { NavigationTabItem } from "@/components/shared/NavigationTab";

const studentNavigations = [
    {
        name: "Home",
        href: "/student",
    },
    {
        name: "My Learning",
        href: "/student/my-learning",
    },
    {
        name: "Achievements",
        href: "/student/achievements",
    },
    {
        name: "Textbooks",
        href: "/student/textbooks",
    },
    {
        name: "Records",
        href: "/student/records",
    }
]

export default function StudentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavigationTab>
                {studentNavigations.map(({ name, href }, index) => (
                    <NavigationTabItem
                        key={index}
                        href={href}
                    >
                        {name}
                    </NavigationTabItem>
                ))}
            </NavigationTab>
            {children}
        </>
    )
}
