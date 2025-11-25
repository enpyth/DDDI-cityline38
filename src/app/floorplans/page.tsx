import Hero from '@/components/Hero'
import FloorplanList from '@/features/floorplans/FloorplanList'

export default function FloorplansPage() {
    return (
        <main>
            <Hero
                title="Floorplan Overview"
                subtitle="Cityline 38 offers two thoughtfully designed series of floorplans, each suited to a different style of living."
                height="58vh"
                bgSize="120%"
                bgPosition="center 53%"
            />
            <FloorplanList />
        </main>
    )
}
