import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Arya Sree T G | Senior Software Engineer & Project Lead',
  description:
    'Portfolio of Java Developer & Project Lead specializing in microservices, Spring Boot, and cloud technologies. 2+ years of professional experience.',
  keywords:
    'Java, Spring Boot, Microservices, React, Next.js, TypeScript, Software Engineer, Project Lead',
  authors: [{ name: 'Arya Sree T G' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aryasree.dev',
    title: 'Arya Sree T G | Senior Software Engineer',
    description: 'Portfolio showcasing projects and expertise in modern software development',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
