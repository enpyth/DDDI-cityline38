import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Inter,
  Mulish,
  Noto_Sans_Mono,
  Baskervville,
  Gotu
} from 'next/font/google';

import { cn } from '@/lib/utils';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

const fontInstrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument'
});

const fontNotoMono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-noto-mono'
});

const fontMullish = Mulish({
  subsets: ['latin'],
  variable: '--font-mullish'
});

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const fontBaskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-baskervville'
});

const fontGotu = Gotu({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-gotu'
});

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontInstrument.variable,
  fontNotoMono.variable,
  fontMullish.variable,
  fontInter.variable,
  fontBaskervville.variable,
  fontGotu.variable
);
