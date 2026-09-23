import { ArrowUpRight } from 'lucide-react';
import { FIGMA_URL } from '@/config';
import { SectionTitle } from './SectionTitle';

export const DopenSSection: React.FC = () => (
    <section className="flex flex-col gap-6">
        <SectionTitle icon="open">DopenS: Design Open Source</SectionTitle>

        <div className="flex flex-col gap-4 text-base leading-relaxed text-[#7f7f7f]">
            <p>
                Over time, I&apos;ve come to realize that design shouldn&apos;t live in isolation. A lot of the work we
                create ends up hidden in files, never really reaching the people who could learn from it, build on it,
                or be inspired by it.
            </p>
            <p>
                That&apos;s why I started publishing some of my past projects on the Figma Community — not just as
                finished pieces, but as open resources. The platform itself is built around sharing UI kits, templates,
                and design systems that others can duplicate, remix, and learn from.
            </p>
            <p>
                For me, this is about contributing back to a space that has quietly shaped how many of us design.
                It&apos;s also about making my work more useful beyond its original context — turning it into something
                others can reuse, question, and improve.
            </p>
            <p className="text-black">
                DopenS (Design Open Source) is my way of documenting that shift: moving isolated design files in my
                computer to public.
            </p>
        </div>

        <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-black px-5 py-2.5 text-[14px] text-white transition-opacity hover:opacity-80"
        >
            Check the files
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
    </section>
);
