import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Privacy Policy | Cityline 38 Website',
    description: 'This privacy policy explains how personal information is collected, stored and used when users interact with the Cityline 38 website or submit enquiries regarding the townhouse development in Everard Park.',
    keywords: ['Cityline 38 privacy policy', 'real estate website privacy', 'data protection Adelaide'],
    alternates: {
        canonical: 'https://www.cityline38.com.au/privacy'
    }
}
import PrivacyContent from '@/features/privacy/PrivacyContent'

export default function PrivacyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Privacy Policy | Cityline 38 Website',
                        url: 'https://www.cityline38.com.au/privacy',
                        description: 'This privacy policy explains how personal information is collected, stored and used when users interact with the Cityline 38 website or submit enquiries regarding the townhouse development in Everard Park.'
                    })
                }}
            />
            <main>
                <Hero
                    title="Privacy Policy"
                    height="58vh"
                    bgSize="120%"
                    bgPosition="center 53%"
                />

                {/* Content Section */}
                <PrivacyContent />
            </main>
        </>
    )
}
