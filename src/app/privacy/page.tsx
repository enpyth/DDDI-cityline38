import Hero from '@/components/Hero'
import PrivacyContent from '@/features/privacy/PrivacyContent'

export default function PrivacyPage() {
    return (
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
    )
}
