import Hero from '@/components/Hero'
import TermsContent from '@/features/terms/TermsContent'

export default function TermsPage() {
    return (
        <main>
            <Hero
                title="Terms & Conditions"
                height="58vh"
                bgSize="120%"
                bgPosition="center 53%"
            />

            <TermsContent />
        </main>
    )
}
