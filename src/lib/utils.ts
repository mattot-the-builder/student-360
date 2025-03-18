import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function timeDiff(date: Date) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.abs(Math.floor(diffMs / (1000 * 60 * 60 * 24)));

    if (diffDays > 0) {
        return { value: diffDays, unit: diffDays === 1 ? "day" : "days" };
    }

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    return { value: diffHours, unit: diffHours === 1 ? "hour" : "hours" };
}

export function kebabToTitleCase(str: string) {
    return str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
