import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Terms & Conditions | Cityline 38 Adelaide',
    description: 'The Cityline 38 Terms and Conditions provide the legal usage framework for our website, dedicated to addressing compliance and regulatory needs through clear guidelines on user responsibilities and project disclaimers.',
    keywords: ['Cityline 38 Terms of Use', 'Website Terms and Conditions', 'Real Estate Legal Compliance Adelaide', 'Property Disclaimer SA'],
    alternates: {
        canonical: 'https://www.cityline38.com.au/terms'
    }
}
import TermsContent from '@/features/terms/TermsContent'

export default function TermsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Terms & Conditions | Cityline 38 Adelaide',
                        url: 'https://www.cityline38.com.au/terms',
                        description: 'The Cityline 38 Terms and Conditions provide the legal usage framework for our website, dedicated to addressing compliance and regulatory needs through clear guidelines on user responsibilities and project disclaimers.'
                    })
                }}
            />
            <main>
                <Hero
                    title="Terms & Conditions"
                    height="58vh"
                    bgSize="120%"
                    bgPosition="center 53%"
                />

                <TermsContent />
            </main>
        </>
    )
}
