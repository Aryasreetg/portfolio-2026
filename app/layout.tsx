import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Backdrop from '@/components/backdrop';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  title: 'Aryasree T G — Team Lead · Java & Microservices',
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
};

// Sets the theme class before first paint so there is no flash. Defaults to dark.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain">
        <Backdrop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
