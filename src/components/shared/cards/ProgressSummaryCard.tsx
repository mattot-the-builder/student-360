import CustomIcon, { iconNames } from "@/components/shared/CustomIcon";
import { Card } from "@/components/ui/card";

export default function ProgressSummaryCard({
    children,
    icon
}: {
    children?: React.ReactNode,
    icon: iconNames
}) {
    return (
        <Card className="flex-row items-center gap-4 p-4">
            <CustomIcon
                name={icon}
                className="w-12 h-12 p-2 rounded-lg"
                variant="square"
            />
            <div className="w-full">
                {children}
            </div>
        </Card>
    )
}
