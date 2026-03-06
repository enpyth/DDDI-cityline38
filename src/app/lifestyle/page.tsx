import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Everard Park Lifestyle | Living Near Adelaide CBD',
    description: 'Discover the lifestyle around Cityline 38 in Everard Park. The area offers convenient access to Adelaide CBD, public transport, parks, cafes and local amenities, creating a balanced urban living environment.',
    keywords: ['Everard Park lifestyle', 'living near Adelaide CBD', 'amenities Everard Park'],
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
                        name: 'Everard Park Lifestyle | Living Near Adelaide CBD',
                        url: 'https://www.cityline38.com.au/lifestyle',
                        description: 'Discover the lifestyle around Cityline 38 in Everard Park. The area offers convenient access to Adelaide CBD, public transport, parks, cafes and local amenities, creating a balanced urban living environment.'
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
