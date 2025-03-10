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
                    <div className="flex items-center gap-1.5 ml-2">
                        <Avatar className="rounded-md w-10 h-auto">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="w-10 h-10 rounded-md">CN</AvatarFallback>
                        </Avatar>
                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold">
                                Sufi Muhammad
                            </p>
                            <p className="text-sm">
                                Form 1
                            </p>
                        </div>
                    </div>
                </div>
            </ResponsiveSection>
        </nav>
    )
}
