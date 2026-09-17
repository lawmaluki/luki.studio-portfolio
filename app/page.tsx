import { MainLayout } from '@/components/layouts';
import {
  CaseStudiesSection,
  ContactSection,
  IntroSection,
  MoreProjectsSection,
  ReadingSection,
  RecentWorksSection,
} from '@/components/sections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lawmaluki Portfolio',
  description: 'Lawrence designs and builds digital products end-to-end from brand identity to fully shipped experiences.',
};

export default function Home() {
  return (
    <MainLayout>
      <main className="mx-auto flex w-full max-w-[600px] flex-col gap-16 px-6 pt-20 sm:pt-28">
        <IntroSection />
        <CaseStudiesSection />
        <MoreProjectsSection />
        <RecentWorksSection />
        <ReadingSection />
        <ContactSection />
      </main>
    </MainLayout>
  );
}
