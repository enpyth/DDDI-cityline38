import Hero from '@/components/Hero'
import ThoughtfullyDesigned from '@/features/home/ThoughtfullyDesigned'
import Cityline38AtAGlance from '@/features/home/Cityline38AtAGlance'
import TwoSeries from '@/features/home/TwoSeries'
import Location from '@/features/home/Location'
import ContactForm from '@/features/home/ContactForm'
import SectionSeparator from '@/components/utils/SectionSeparator'

export default function Home() {
  return (
    <main>
      <Hero
        title="Cityline 38"
        subtitle="The Line Where Life Finds Its Balance."
        subtitle2="Where urban energy meets everyday calm — perfectly in balance."
        height="70vh"
        bgSize="127%"
      />
      <ThoughtfullyDesigned />
      <SectionSeparator />
      <Cityline38AtAGlance />
      <SectionSeparator />
      <TwoSeries />
      <SectionSeparator />
      <Location />
      <SectionSeparator />
      <ContactForm
        title="Register to Receive the Latest Release Updates"
        subtitle="We will release homes in stages according to construction progress."
        subtitle2="By registering, you will be the first to receive pricing updates and lots releases."
      />
    </main>
  )
}