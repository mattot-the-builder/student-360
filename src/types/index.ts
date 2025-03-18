export type Range<
    N extends number,
    Result extends number[] = [],
> = Result["length"] extends N
    ? Result[number]
    : Range<N, [...Result, Result["length"]]>;

export type Lesson = {
    subject: string;
    name: string;
    chapter: number;
    educationLevel: string;
    materialCount: number;
    deadline: Date;
    imageSrc: string;
};
