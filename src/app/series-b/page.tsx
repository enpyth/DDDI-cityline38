import Hero from '@/components/Hero'
import SeriesDetails from '@/features/home/SeriesDetails'

export default function SeriesBPage() {
    const seriesBDetails = [
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
                title="Serene Master Living Series"
                subtitle="A spacious four-bedroom layout with a private master suite,"
                subtitle2="designed for clarity of movement and long-term family comfort."
            />
            <SeriesDetails
                subtitle="A spacious four-bedroom layout with a private master suite and well-defined circulation, offering long-term comfort for growing families."
                details={seriesBDetails}
            />
        </main>
    )
}
