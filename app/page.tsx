import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Education from '@/components/education';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
