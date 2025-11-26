import { Box, Divider } from '@mui/material'
import Hero from '@/components/Hero'
import ThoughtfullyDesigned from '@/features/home/ThoughtfullyDesigned'
import Cityline38AtAGlance from '@/features/home/Cityline38AtAGlance'
import TwoSeries from '@/features/home/TwoSeries'
import Location from '@/features/home/Location'
import ContactForm from '@/features/home/ContactForm'

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
      <Box sx={{ bgcolor: '#0B1C33' }}>
        <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
      </Box>
      <Cityline38AtAGlance />
      <Box sx={{ bgcolor: '#0B1C33' }}>
        <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
      </Box>
      <TwoSeries />
      <Box sx={{ bgcolor: '#0B1C33' }}>
        <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
      </Box>
      <Location />
      <Box sx={{ bgcolor: '#0B1C33' }}>
        <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
      </Box>
      <ContactForm
        title="Register to Receive the Latest Release Updates"
        subtitle="We will release homes in stages according to construction progress."
        subtitle2="By registering, you will be the first to receive pricing updates and lots releases."
      />
    </main>
  )
}
