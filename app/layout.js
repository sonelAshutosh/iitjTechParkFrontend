import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

// Primary font for body text - clean and professional
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

// Display font for headings - modern and tech-forward
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'IIT Jodhpur Technology Park | Innovation Hub of Rajasthan',
    template: '%s | IITJ Tech Park',
  },
  description:
    'IIT Jodhpur Technology Park - Where ancient wisdom meets future technology. Premier innovation hub fostering R&D collaborations, startups, and industry-academia partnerships in the heart of Rajasthan.',
  keywords: [
    'IIT Jodhpur',
    'Technology Park',
    'Research Park',
    'Innovation Hub',
    'Startups',
    'R&D',
    'Incubation',
    'Rajasthan',
    'India',
    'Deep Tech',
    'Industry Academia',
  ],
  authors: [{ name: 'IIT Jodhpur Technology Park' }],
  creator: 'IIT Jodhpur',
  publisher: 'IIT Jodhpur Technology Park',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techpark.iitj.ac.in'),
  openGraph: {
    title: 'IIT Jodhpur Technology Park | Innovation Hub of Rajasthan',
    description:
      'Premier innovation hub fostering R&D collaborations, startups, and industry-academia partnerships. Where ancient wisdom meets future technology.',
    url: 'https://techpark.iitj.ac.in',
    siteName: 'IIT Jodhpur Technology Park',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIT Jodhpur Technology Park',
    description:
      'Premier innovation hub in Rajasthan fostering R&D, startups, and industry-academia partnerships.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1628' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
