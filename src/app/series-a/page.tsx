import Hero from '@/components/Hero'
import SeriesDetails from '@/features/home/SeriesDetails'

export default function SeriesAPage() {
    const seriesADetails = [
        {
            section: 'Section 123',
            description: 'Description 123456'
        },
        {
            section: 'Section 123',
            description: 'Description 123456'
        },
        {
            section: 'Section 123',
            description: 'Description 123456'
        },
    ]

    return (
        <main>
            <Hero
                title="Balcony Light Living Series"
                subtitle="A light three-bedroom design with generous balconies — practical, efficient and effortlessly open."
            />
            <SeriesDetails
                subtitle="A light and efficient three-bedroom layout featuring generous balconies and multi-aspect natural light — ideal for first homebuyers and investors."
                details={seriesADetails}
            />
        </main>
    )
}
