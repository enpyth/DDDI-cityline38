import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Gallery | Cityline 38 Adelaide',
    description: 'The Cityline 38 gallery presents a visual collection of our premium townhouses in Everard Park, dedicated to addressing buyers\' desires for visual clarity through high-quality architectural renders and interior images.',
    keywords: ['Cityline 38 Gallery', 'Townhouse Images Everard Park', 'Modern Home Renders Adelaide', 'Real Estate Photography SA'],
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
                        name: 'Gallery | Cityline 38 Adelaide',
                        url: 'https://www.cityline38.com.au/gallery',
                        description: 'The Cityline 38 gallery presents a visual collection of our premium townhouses in Everard Park, dedicated to addressing buyers\' desires for visual clarity through high-quality architectural renders and interior images.'
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
