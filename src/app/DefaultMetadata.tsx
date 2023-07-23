import { type Metadata } from 'next'

export const DefaultMetadata: Metadata = {
  applicationName: 'Mir4 Tools',
  referrer: 'origin-when-cross-origin',
  keywords: ['Mir4'],
  themeColor: '#473E65',
  openGraph: {
    url: 'https://www.mir4tools.com/',
    siteName: 'Mir4 Tools',
    images: [
      {
        url: '/seo/crafting-calculator.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'msapplication-TileColor': '#473E65',
    'msapplication-TileImage': '/favicon.ico',
    accessibilityFeature: [
      'largePrint/CSSEnabled',
      'highContrast/CSSEnabled',
      'resizeText/CSSEnabled',
      'displayTransformability',
      'longDescription',
      'alternativeText',
    ],
    accessibilityControl: ['fullKeyboardControl', 'fullMouseControl'],
    accessibilityHazard: ['noFlashingHazard', 'noMotionSimulationHazard'],
    accessibilityAPI: ['ARIA'],
  },
}

export const RouteMetadata = {
  CraftingCalculator: getSeo({
    title: 'Crafting Calculator',
    href: '/',
    description:
      'A crafting tool to help players calculate their craft with precision and speed that includes advanced features such as an inventory system and a large variety of customization.',
    image: '/seo/crafting-calculator.webp',
    imageAlt: 'Crafting calculator banner',
  }),
  ExperienceCalculator: getSeo({
    title: 'Experience Calculator',
    href: '/xp',
    description:
      'An experience-level calculator to help players measure and calculate their progress through the game with time and item cost predictions.',
    image: '/seo/experience-calculator.webp',
    imageAlt: 'Experience calculator banner',
  }),
  Conquests: getSeo({
    title: 'Conquests',
    href: '/conquests',
    description:
      'A tool used to show upgrade costs, time, and effects of conquest towers.',
    image: '/seo/conquests.webp',
    imageAlt: 'Conquests banner',
  }),
}

export function getSeo({
  title,
  description,
  image,
  imageAlt,
  href,
}: {
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
}): Metadata {
  return {
    title,
    description,
    ...DefaultMetadata,
    openGraph: {
      ...DefaultMetadata.openGraph,
      title,
      description,
      images: image
        ? { url: image, secureUrl: image, alt: imageAlt }
        : DefaultMetadata.openGraph?.images,
    },
    twitter: {
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    alternates: {
      canonical: '',
    },
  }
}
