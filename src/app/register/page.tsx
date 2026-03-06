import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Register Interest | Cityline 38 Adelaide',
    description: 'The Cityline 38 registration portal is a dedicated inquiry platform for our Everard Park development, dedicated to addressing prospective buyers\' communication needs through a streamlined expression of interest process.',
    keywords: ['Register Interest Cityline 38', 'Buy Townhouse Everard Park', 'Real Estate Inquiry Adelaide', 'Off-the-plan Registration SA'],
    alternates: {
        canonical: 'https://www.cityline38.com.au/register'
    }
}
import ContactForm from '@/features/home/ContactForm'

export default function RegisterPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ContactPage',
                        name: 'Register Interest | Cityline 38 Adelaide',
                        url: 'https://www.cityline38.com.au/register',
                        description: 'The Cityline 38 registration portal is a dedicated inquiry platform for our Everard Park development, dedicated to addressing prospective buyers\' communication needs through a streamlined expression of interest process.'
                    })
                }}
            />
            <main>
                <Hero
                    title="Register"
                    subtitle="Register your interest for Cityline 38"
                    height="58vh"
                    bgSize="120%"
                    bgPosition="center 53%"
                />
                <ContactForm
                    title="Register your interest for Cityline 38"
                    subtitle="Complete this form and one of our team members will be in touch."
                />
            </main>
        </>
    )
}
