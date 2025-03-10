import Image from "next/image";
import CustomIcon from "@/components/shared/CustomIcon";
import { Button } from "@/components/ui/button";
import ResponsiveSection from "@/components/shared/ResponsiveSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SearchInput from "@/components/shared/SearchInput";

export default function Navbar() {
    return (
        <nav>
            <ResponsiveSection
                className="flex justify-between items-center space-x-2"
            >
                <div className="flex items-center gap-2">
                    <Image src="/dataplay.png" alt="Dataplay" width={40} height={40} />
                    <Button
                        variant="outline"
                        className="w-auto h-auto px-2"
                    >
                        <CustomIcon name="stars" />
                        <span className="hidden lg:inline">
                            Ask Amelia
                        </span>
                    </Button>
                    <SearchInput />
                </div>
                <div className="flex items-center gap-0.5">
                    <Button
                        variant="ghost"
                        size="icon"
                    >
                        <CustomIcon name="message" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                    >
                        <CustomIcon name="notificationNone" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                    >
                        <Avatar className="rounded-md">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Button>
                </div>
            </ResponsiveSection>
        </nav>
    )
}
