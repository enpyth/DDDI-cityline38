'use client'

import { Box, Container, Divider } from '@mui/material'
import FloorplanSeries2 from './FloorplanSeries2'
import SectionHeader from '@/components/utils/SectionHeader'

const FLOORPLAN_SERIES = [
  {
    title: 'Balcony Light Living Series',
    lot: '(Lot 1-7)',
    description: [
      'Modern 3-Bedroom, Three-Stories Townhomes Minutes from the City',
      'Cityline 38 delivers a contemporary collection of 3-bed, 2-bath, double-garage townhomes designed for modern living, effortless convenience and long-term value.',
      'With refined layouts spread over three levels, these homes offer the combination of double garages, spacious balconies, excellent natural light and practical room separation—a feature set seldom available at this price point so close to the CBD.'
    ],
    features: [
      '3 bedrooms + 2 bathrooms + 2 living areas',
      'Double garage',
      'Double Glazed Windows – exceptional sound insulation & year-round comfort',
      'Bright interiors with excellent cross-ventilation',
      'Large entertainer’s balcony',
      'Full bathroom on ground floor for multi-generational convenience',
      'Quality finishes and modern exterior façade',
      'Walking distance to the tram, Anzac Highway transport corridor and everyday conveniences'
    ],
    images: [
      '/imgs/01.jpg',
      '/imgs/02.jpg',
      '/imgs/03.jpg'
    ]
  },
  {
    title: 'Serene Master Living Series',
    lot: '(Lot 8-13)',
    description: [
      'Modern 4-Bedroom, Three-Storey Townhomes Designed for Family Living',
      'Cityline 38 presents another elevated collection of 4-bedroom, 3-bathroom, double-garage townhomes, thoughtfully crafted for growing families, multi-generational living and buyers seeking extra space without compromising on location or convenience.',
      'With well-planned layouts across three functional levels, these homes combine generous bedrooms, ground-floor living connected to alfresco spaces, upper-level master suites and naturally bright interiors—a opportunity for those wanting a larger home just minutes from the CBD. All residences in this series are built with full double-glazed windows, ensuring exceptional acoustic performance, energy efficiency and a peaceful living environment throughout.'
    ],
    features: [
      '4 bedrooms + 3 bathrooms + family-friendly layout',
      'Double garage',
      'Double-glazed windows – enhanced quietness & year-round comfort',
      'Ground-floor lounge flowing to private alfresco',
      'Light-filled first-floor living with generous windows',
      'Master suite with walk-in robe (WIR) + ensuite',
      'Modern kitchen with great storage and cooking visibility',
      'Walking distance to the tram, Anzac Highway transport corridor and key amenities',
    ],
    images: [
      '/imgs/01.jpg',
      '/imgs/02.jpg',
      '/imgs/03.jpg'
    ]
  }
]



export default function FloorplanList() {
  return (
    <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: 6 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: { xs: 4, md: 10 } }}>
          <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
        </Box>
        {/* Floorplan Header Description */}
        <Box textAlign={'center'} sx={{ mx: 10 }}>
          <SectionHeader title="Select a series below to explore detailed layouts, room configurations and dimensions for each home." />
        </Box>
        <Box sx={{ mb: 6 }}>
          <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
        </Box>
        {/* Floorplan Series */}
        <FloorplanSeries2 {...FLOORPLAN_SERIES[0]} />
        <Box sx={{ mb: 10 }}>
          <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
        </Box>
        <FloorplanSeries2 {...FLOORPLAN_SERIES[1]} />
      </Container>
    </Box>
  )
}
