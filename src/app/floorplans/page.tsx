import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Floorplans | Cityline 38 Townhouse Layouts',
    description: 'Explore the Cityline 38 floorplans featuring Series 1 and Series 2 three-storey townhouse layouts. Each design focuses on functional spatial planning, open living areas and efficient vertical living suitable for modern families in Adelaide.',
    keywords: ['Cityline 38 floorplans', 'townhouse layouts Adelaide', 'Everard Park floorplans', 'Series 1 Series 2 townhouse'],
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
                        name: 'Floorplans | Cityline 38 Townhouse Layouts',
                        url: 'https://www.cityline38.com.au/floorplans',
                        description: 'Explore the Cityline 38 floorplans featuring Series 1 and Series 2 three-storey townhouse layouts. Each design focuses on functional spatial planning, open living areas and efficient vertical living suitable for modern families in Adelaide.'
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
