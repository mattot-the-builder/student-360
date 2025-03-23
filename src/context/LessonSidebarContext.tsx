"use client"

import { createContext, useContext, useState } from "react";

type LessonSidebarContextType = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

const LessonSidebarContext = createContext<LessonSidebarContextType | null>(null);

export function LessonSidebarProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen((prev) => !prev);

    return (
        <LessonSidebarContext.Provider value={{ isOpen, toggleSidebar }}>
            {children}
        </LessonSidebarContext.Provider>
    );
}

export function useLessonSidebar() {
    const context = useContext(LessonSidebarContext);
    if (!context) throw new Error("useLessonSidebar must be used within LessonSidebarProvider");
    return context;
}
