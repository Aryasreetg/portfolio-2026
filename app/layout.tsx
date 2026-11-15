import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { personalInfo } from '@/data/personal';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument',
  display: 'swap',
});

// Netlify sets URL at build time; fall back to localhost for local builds.
const siteUrl = process.env.URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aryasree T G — Team Lead, Java & Microservices',
  description:
    'Portfolio of Aryasree T G, Team Lead leading 25+ engineers. Spring Boot, microservices, Kafka, and full-stack delivery since 2023.',
  keywords:
    'Aryasree, Team Lead, Java, Spring Boot, Microservices, Kafka, Angular, Next.js, Software Engineer',
  authors: [{ name: 'Aryasree T G' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aryasree T G — Team Lead',
    description: 'Leading 25+ engineers building microservice platforms with Spring Boot and Kafka.',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#171f20' },
    { media: '(prefers-color-scheme: light)', color: '#f4f1e9' },
  ],
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.fullName,
  jobTitle: personalInfo.currentRole,
  worksFor: { '@type': 'Organization', name: 'Deeshaa Limited' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Pondicherry University' },
  address: { '@type': 'PostalAddress', addressRegion: 'Kerala', addressCountry: 'IN' },
  email: `mailto:${personalInfo.contact.email}`,
  image: `${siteUrl}/portrait.jpg`,
  url: siteUrl,
  sameAs: personalInfo.contact.socialLinks.map((l) => l.url),
};

// Applies a saved dark-theme choice before first paint so there is no flash. Defaults to light.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[70] bg-btn px-4 py-2 text-sm text-btn-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
