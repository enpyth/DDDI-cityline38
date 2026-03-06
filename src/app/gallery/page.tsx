import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Gallery | Cityline 38 Townhouse Design',
    description: 'The gallery presents architectural renderings and interior visuals of the Cityline 38 development in Everard Park. Images highlight contemporary townhouse design, modern materials and the architectural character of the project.',
    keywords: ['Cityline 38 gallery', 'Everard Park townhouse images', 'Adelaide townhouse design', 'architectural renders'],
    alternates: {
        canonical: 'https://www.cityline38.com.au/gallery'
    }
}
import GalleryGrid from '@/features/home/GalleryGrid'

export default function GalleryPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ImageGallery',
                        name: 'Gallery | Cityline 38 Townhouse Design',
                        url: 'https://www.cityline38.com.au/gallery',
                        description: 'The gallery presents architectural renderings and interior visuals of the Cityline 38 development in Everard Park. Images highlight contemporary townhouse design, modern materials and the architectural character of the project.'
                    })
                }}
            />
            <main>
                <Hero
                    title="Gallery"
                    height="58vh"
                    bgSize="120%"
                    bgPosition="center 53%"
                />
                <GalleryGrid />
            </main>
        </>
    )
}
