"use client"

import { Button } from "@/components/ui/button"
import CustomIcon from "@/components/shared/CustomIcon"
import { useRouter } from "next/navigation"

export default function PreviousPageButton({
    children,
}: Readonly<{
    children?: React.ReactNode
}>) {
    const router = useRouter();

    const handleGoToPreviousPage = () => {
        router.back();
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer"
            onClick={handleGoToPreviousPage}
        >
            {children ?
                children :
                <CustomIcon name="chevron-left" />
            }
        </Button>
    )
}
