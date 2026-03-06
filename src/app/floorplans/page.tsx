import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Floorplans | Cityline 38 Adelaide',
    description: 'The Cityline 38 floorplans showcase premium 3-storey townhouse layouts in Everard Park, dedicated to addressing modern family living needs through intelligent spatial design and functional elegance.',
    keywords: ['Cityline 38 Floorplans', '3-Storey Townhouse Layouts', 'Everard Park Real Estate Floor Plans', 'Modern Townhome Designs Adelaide'],
    alternates: {
        canonical: 'https://www.cityline38.com.au/floorplans'
    }
}
import FloorplanList from '@/features/floorplans/FloorplanList'

export default function FloorplansPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Floorplans | Cityline 38 Adelaide',
                        url: 'https://www.cityline38.com.au/floorplans',
                        description: 'The Cityline 38 floorplans showcase premium 3-storey townhouse layouts in Everard Park, dedicated to addressing modern family living needs through intelligent spatial design and functional elegance.'
                    })
                }}
            />
            <main>
                <Hero
                    title="Floorplan Overview"
                    subtitle="Cityline 38 offers two thoughtfully designed series of floorplans, each suited to a different style of living."
                    height="58vh"
                    bgSize="120%"
                    bgPosition="center 53%"
                />
                <FloorplanList />
            </main>
        </>
    )
}
