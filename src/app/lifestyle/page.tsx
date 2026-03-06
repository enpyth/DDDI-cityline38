import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Lifestyle | Cityline 38 Adelaide',
    description: 'The Cityline 38 lifestyle guide highlights the vibrant Everard Park community ecosystem, dedicated to addressing residents\' quality of life needs through detailed insights into local amenities, parks, and dining.',
    keywords: ['Everard Park Lifestyle', 'Cityline 38 Location', 'Amenities near Everard Park', 'Adelaide Suburb Living Guide'],
    alternates: {
        canonical: 'https://www.cityline38.com.au/lifestyle'
    }
}
import LifestyleList from '@/features/lifestyle/LifestyleList'

export default function LifestylePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Lifestyle | Cityline 38 Adelaide',
                        url: 'https://www.cityline38.com.au/lifestyle',
                        description: 'The Cityline 38 lifestyle guide highlights the vibrant Everard Park community ecosystem, dedicated to addressing residents\' quality of life needs through detailed insights into local amenities, parks, and dining.'
                    })
                }}
            />
            <main>
                <Hero
                    title="Lifestyle"
                    subtitle="Live at the centre of convenience, where everything you need is just a short walk away."
                    height="58vh"
                    bgSize="120%"
                    bgPosition="center 53%"
                />
                <LifestyleList />
            </main>
        </>
    )
}
