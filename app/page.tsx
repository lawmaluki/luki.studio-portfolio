import { MainLayout } from '@/components/layouts';
import { HeroSection, ProjectsSection, TestimonialsSection } from '@/components/sections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luki Studio — Design Partner for Tech Startups',
  description: 'Lawrence designs and builds digital products end-to-end from brand identity to fully shipped experiences.',
};

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      
      <TestimonialsSection />
      <ProjectsSection />
    </MainLayout>
  );
}
