export type Range<
    N extends number,
    Result extends number[] = [],
> = Result["length"] extends N
    ? Result[number]
    : Range<N, [...Result, Result["length"]]>;

export enum LESSON_STATUS {
    NOT_STARTED = "not-started",
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed",
}

export type Lesson = {
    subject: string;
    name: string;
    chapter: number;
    educationLevel: string;
    materialCount: number;
    deadline?: Date;
    imageSrc: string;
    status?: "not-started" | "in-progress" | "completed";
};
