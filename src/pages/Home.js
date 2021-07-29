import React from 'react';
import AboutSection from '../component/AboutSection';
import MeSection from '../component/MeSection';
import ProjectsSection from '../component/ProjectsSection';
import ServiceSection from '../component/ServiceSection';
import TestimonialsSection from '../component/TestimonialsSection';
import ContactBanner from '../component/ContactBanner';

export default function Home() {
  return (
    <div>
      <MeSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}
