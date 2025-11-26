import Hero from '@/components/Hero'
import GalleryGrid from '@/features/home/GalleryGrid'

export default function GalleryPage() {
    return (
        <main>
            <Hero
                title="Gallery"
                height="58vh"
                bgSize="120%"
                bgPosition="center 53%"
            />
            <GalleryGrid />
        </main>
    )
}
