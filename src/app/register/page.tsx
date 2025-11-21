import Hero from '@/components/Hero'
import ContactForm from '@/features/home/ContactForm'

export default function RegisterPage() {
    return (
        <main>
            <Hero
                title="Register"
                subtitle="Register your interest for Cityline 38"
                height="50vh"
            />
            <ContactForm
                title="Complete this form"
                subtitle="and one of our team members will be in touch."
            />
        </main>
    )
}
