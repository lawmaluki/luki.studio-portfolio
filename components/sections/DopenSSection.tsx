import { ArrowUpRight, FolderOpen } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const DopenSSection: React.FC = () => (
    <section className="flex flex-col gap-6">
        <SectionTitle icon={FolderOpen}>DopenS: Design Open Source</SectionTitle>

        <div className="flex flex-col gap-4">
            <p className="text-[15px] leading-relaxed text-[#7f7f7f]">
                Design shouldn&apos;t live in isolation. A lot of the work we create ends up hidden in files, never really reaching the people who could learn from it, build on it, or be inspired by it.
            </p>
            <p className="text-[15px] leading-relaxed text-[#7f7f7f]">
                That&apos;s why I publish some of my past projects on the Figma Community — not just as finished pieces, but as open resources others can duplicate, remix, and learn from.
            </p>
            <p className="text-[15px] leading-relaxed text-[#7f7f7f]">
                DopenS (Design Open Source) is my way of documenting that shift: moving isolated design files from my computer to public.
            </p>
        </div>

        <a
            href="https://www.figma.com/@lawmaluki"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-[14px] text-white transition-transform hover:scale-105"
        >
            Check the files
            <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
    </section>
);
