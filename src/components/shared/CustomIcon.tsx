import { cn } from "@/lib/utils";

const icons = {
    search:
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
        </svg>,
    message:
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0H2ZM4 10H16V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z" />
        </svg>,
    notificationNone:
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.5C13.1 21.5 14 20.6 14 19.5H10C10 20.6 10.9 21.5 12 21.5ZM18 15.5V10.5C18 7.43 16.37 4.86 13.5 4.18V3.5C13.5 2.67 12.83 2 12 2C11.17 2 10.5 2.67 10.5 3.5V4.18C7.64 4.86 6 7.42 6 10.5V15.5L4 17.5V18.5H20V17.5L18 15.5ZM16 16.5H8V10.5C8 8.02 9.51 6 12 6C14.49 6 16 8.02 16 10.5V16.5Z" />
        </svg>,
    stars:
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.091 5.81819L14 3.81819L16 2.90909L14 2L13.091 0L12.1818 2L10.1818 2.90909L12.1818 3.81819L13.091 5.81819Z" />
            <path d="M13.091 10.1818L12.1818 12.1818L10.1818 13.091L12.1818 14L13.091 16L14 14L16 13.091L14 12.1818L13.091 10.1818Z" />
            <path d="M7.63638 6.18183L5.81819 2.18183L4 6.18183L0 8.00001L4 9.8182L5.81819 13.8182L7.63638 9.8182L11.6364 8.00001L7.63638 6.18183ZM6.5382 8.72001L5.81819 10.3054L5.09819 8.72001L3.51274 8.00001L5.09819 7.28001L5.81819 5.69456L6.5382 7.28001L8.12365 8.00001L6.5382 8.72001Z" />
        </svg>
}

export default function CustomIcon({
    name,
    className,
    ...props
}: {
    name: keyof typeof icons
    className?: string
}) {

    const IconComponent = icons[name];

    if (!IconComponent) {
        return null;
    }

    return (
        <span
            className={cn(
                "inline-flex items-center justify-center w-6 h-6 [&_svg]:w-full [&_svg]:h-full [&_svg]:fill-current",
                className
            )}
            {...props}
        >
            {IconComponent}
        </span>
    )
}
