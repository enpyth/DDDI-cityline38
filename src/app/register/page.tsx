import Hero from '@/components/Hero'
import ContactForm from '@/features/home/ContactForm'

export default function RegisterPage() {
    return (
        <main>
            <Hero
                title="Register"
                subtitle="Register your interest for Cityline 38"
                height="58vh"
                bgSize="120%"
                bgPosition="center 53%"
            />
            <ContactForm
                title="Complete this form"
                title2="and one of our team members will be in touch."
            />
        </main>
    )
}
