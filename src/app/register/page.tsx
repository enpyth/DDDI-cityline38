import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
    title: 'Register Interest | Cityline 38 Everard Park',
    description: 'Submit an expression of interest for the Cityline 38 townhouse development in Everard Park. Prospective buyers can request project information, pricing details and availability through the registration form.',
    keywords: ['Cityline 38 register interest', 'Everard Park townhouse enquiry', 'buy townhouse Adelaide'],
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
                        name: 'Register Interest | Cityline 38 Everard Park',
                        url: 'https://www.cityline38.com.au/register',
                        description: 'Submit an expression of interest for the Cityline 38 townhouse development in Everard Park. Prospective buyers can request project information, pricing details and availability through the registration form.'
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
