import ResponsiveSection from "@/components/shared/ResponsiveSection"

export default async function LessonPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    return (
        <main className="flex justify-center items-center">
            <ResponsiveSection>
                <article className="prose lg:prose-lg">
                    <h1>Peningkatan Tamadun India dan China</h1>
                    <img
                        src="https://placehold.co/640x360"
                        alt="Placeholder Image"
                        className="aspect-video w-full rounded-lg"
                    />
                    <p>
                        Tamadun India dan China merupakan antara tamadun terawal yang berkembang pesat dalam sejarah dunia.
                        Kedua-duanya mencapai kemajuan besar dalam politik, ekonomi, sosial, kebudayaan, dan teknologi.
                    </p>

                    <h2>Tamadun India</h2>
                    <ul>
                        <li>Berkembang pesat semasa pemerintahan <strong>Dinasti Maurya</strong> dan <strong>Dinasti Gupta.</strong></li>
                        <li><strong>Maharaja Chandragupta Maurya</strong> dan <strong>Asoka</strong> memperkenalkan sistem pemerintahan yang kuat dan toleransi agama.</li>
                        <li>Asoka menyebarkan ajaran <strong>Buddha</strong> ke serata Asia melalui misi diplomatik.</li>
                        <li><strong>Dinasti Gupta</strong> dikenali sebagai zaman kegemilangan kerana kemajuan dalam <strong>seni, sains, dan falsafah.</strong></li>
                        <li><strong>Sistem kasta</strong> menjadi tunjang sosial, mengatur peranan masyarakat mengikut kedudukan mereka.</li>
                        <li><strong>Sumbangan utama dalam matematik:</strong> Konsep sifar dan angka perpuluhan oleh Aryabhata.</li>
                        <li><strong>Seni bina agung:</strong> Candi Borobudur dan Ajanta mencerminkan keindahan seni dan kepercayaan keagamaan.</li>
                    </ul>

                    <h2>Tamadun China</h2>
                    <ul>
                        <li>Berkembang pesat semasa pemerintahan Dinasti Zhou, Qin, dan Han.</li>
                        <li><strong>Falsafah utama:</strong> Konfusianisme, Taoisme, dan Legalisme mempengaruhi kehidupan sosial dan pemerintahan.</li>
                        <li>Dinasti Qin terkenal dengan penyatuan wilayah China dan pembinaan Tembok Besar China.</li>
                        <li>Dinasti Han membawa kemajuan dalam teknologi, perdagangan, dan hubungan antarabangsa.</li>
                        <li><strong>Laluan Sutera</strong> menghubungkan China dengan dunia luar, memperkaya ekonomi dan budaya.</li>
                        <li><strong>Pencapaian teknologi:</strong> Penciptaan kertas, kompas, dan teknik pencetakan yang menyebarkan ilmu dengan lebih meluas.</li>
                        <li><strong>Seni bina:</strong> Istana dan pagoda yang melambangkan keagungan tamadun China.</li>
                    </ul>
                </article>
            </ResponsiveSection>
        </main>
    )
}
