export default async function LessonPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    return <h1>{slug}</h1>
}
