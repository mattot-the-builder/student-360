import { LessonSidebarProvider } from "@/context/LessonSidebarContext";

export default function LessonLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LessonSidebarProvider>
            {children}
        </LessonSidebarProvider>
    )
}
