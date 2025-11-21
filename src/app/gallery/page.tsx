import Hero from '@/components/Hero'
import GalleryGrid from '@/features/gallery/GalleryGrid'

export default function GalleryPage() {
    return (
        <main>
            <Hero
                title="Gallery"
                height="50vh"
            />
            <GalleryGrid />
        </main>
    )
}
