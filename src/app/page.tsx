import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1 className="text-3xl font-bold">Student360</h1>
            <Link href="/student">
                <Button>
                    Student
                </Button>
            </Link>
        </main>
    );
}
