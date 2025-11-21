import Hero from '@/components/Hero'
import ThoughtfullyDesigned from '@/features/home/ThoughtfullyDesigned'
import Cityline38AtAGlance from '@/features/home/Cityline38AtAGlance'
import Gallery from '@/features/home/Gallery'
import Location from '@/features/home/Location'
import Floorplans from '@/features/home/Floorplans'
import ContactForm from '@/features/home/ContactForm'
import SectionSeparator from '@/components/SectionSeparator'

export default function Home() {
  return (
    <main>
      <Hero
        title="Cityline 38"
        subtitle="The Line Where Life Finds Its Balance."
        subtitle2="Where urban energy meets everyday calm — perfectly in balance."
        height="80vh"
      />
      <ThoughtfullyDesigned />
      <SectionSeparator />
      <Cityline38AtAGlance />
      <SectionSeparator />
      <Gallery />
      <SectionSeparator />
      <Location />
      <SectionSeparator />
      {/* <Floorplans /> */}
      <ContactForm
        title="Register to Receive the Latest Release Updates"
        subtitle="We will release homes in stages according to construction progress. By registering, you will be the first to receive pricing updates and lots releases."
      />
    </main>
  )
}
