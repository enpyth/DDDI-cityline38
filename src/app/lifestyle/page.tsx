import Hero from '@/components/Hero'
import LifestyleList from '@/features/lifestyle/LifestyleList'

export default function LifestylePage() {
    return (
        <main>
            <Hero
                title="Lifestyle"
                subtitle="Live at the centre of convenience, where everything you need is just a short walk away."
                height="58vh"
                bgSize="120%"
                bgPosition="center 53%"
            />
            <LifestyleList />
        </main>
    )
}
