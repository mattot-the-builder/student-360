import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import GoldenTrophyImage from "@/assets/images/golden-trophy.png";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";

const rankingList = [
    {
        ranking: 6,
        name: "Kamila Jasmin",
        points: 89
    },
    {
        ranking: 7,
        name: "Ameliaa",
        points: 86
    },
    {
        ranking: 8,
        name: "Sufi Muhammad",
        points: 79
    },
    {
        ranking: 9,
        name: "Amer Ahmad",
        points: 78
    },
    {
        ranking: 10,
        name: "Daniel Harith",
        points: 70
    },
]

export default function RankingCard() {
    return (
        <Card>
            <CardHeader className="grow text-center justify-center">
                <Image
                    src={GoldenTrophyImage.src}
                    width={GoldenTrophyImage.width}
                    height={GoldenTrophyImage.height}
                    alt="Golden Trophy"
                    className="m-auto"
                />
                <CardTitle className="text-2xl">
                    You moved up in your class!
                </CardTitle>
                <CardDescription className="text-base">
                    2 days
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableBody>
                        {rankingList.map((student, index) => (
                            <TableRow
                                key={index}
                                className={cn(
                                    student.name === "Sufi Muhammad" && "bg-muted",
                                )}
                            >
                                <TableCell>{student.ranking}</TableCell>
                                <TableCell className="flex gap-3 items-center">
                                    <Avatar className="w-10 h-auto">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback className="w-8 h-8">CN</AvatarFallback>
                                    </Avatar>
                                    <p className="font-semibold">
                                        {student.name}
                                    </p>
                                </TableCell>
                                <TableCell className="text-right">
                                    {student.points}pts
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
