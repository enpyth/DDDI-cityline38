import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Privacy Policy | Cityline 38 Adelaide',
    description: 'The Cityline 38 Privacy Policy is a comprehensive data protection framework for our website users, dedicated to addressing personal information security needs through transparent data collection and handling practices.',
    keywords: ['Cityline 38 Privacy Policy', 'Data Protection Real Estate', 'Privacy Terms Adelaide', 'User Data Security'],
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
                        name: 'Privacy Policy | Cityline 38 Adelaide',
                        url: 'https://www.cityline38.com.au/privacy',
                        description: 'The Cityline 38 Privacy Policy is a comprehensive data protection framework for our website users, dedicated to addressing personal information security needs through transparent data collection and handling practices.'
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
