import type { Metadata } from 'next';
import { MainLayout } from '@/components/layouts';
import { RecentWorksGallery } from '@/components/RecentWorksGallery';
import { projects } from '@/config';

export const metadata: Metadata = {
    title: 'Recent works',
    description: 'UI shots and explorations from recent product design work.',
};

export default function RecentWorksPage() {
    const shots = projects.filter((p) => p.category === 'Spotlight' && p.link).map((p) => p.link!);

    return (
        <MainLayout>
            <main className="mx-auto w-full max-w-6xl px-6 pt-20 sm:pt-28">
                <div className="mx-auto mb-10 max-w-[600px]">
                    <h1 className="text-[32px] font-medium tracking-[-0.03em] text-black">Recent works</h1>
                    <p className="text-[15px] text-[#7f7f7f]">
                        {shots.length} shots from recent product work and explorations. Click any to enlarge.
                    </p>
                </div>
                <RecentWorksGallery shots={shots} />
            </main>
        </MainLayout>
    );
}
