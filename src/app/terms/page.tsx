import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Terms & Conditions | Cityline 38 Website',
    description: 'The terms and conditions outline the legal framework for using the Cityline 38 website, including user responsibilities, website usage policies and general legal information related to the project.',
    keywords: ['Cityline 38 terms conditions', 'website terms Adelaide', 'real estate website legal'],
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
                        name: 'Terms & Conditions | Cityline 38 Website',
                        url: 'https://www.cityline38.com.au/terms',
                        description: 'The terms and conditions outline the legal framework for using the Cityline 38 website, including user responsibilities, website usage policies and general legal information related to the project.'
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
