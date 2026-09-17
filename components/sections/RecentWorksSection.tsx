/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Maximize2, Sparkles } from 'lucide-react';
import { projects } from '@/config';
import { SectionTitle } from './SectionTitle';

const shots = projects.filter((p) => p.category === 'Spotlight' && p.link).slice(0, 9);

export const RecentWorksSection: React.FC = () => (
    <section className="flex flex-col gap-6">
        <SectionTitle icon={Sparkles}>Recent works</SectionTitle>

        <Link
            href="/recent-works"
            className="group relative block max-h-[520px] overflow-hidden rounded-lg border border-[#f2f2f2] bg-[#f6f6f6] p-2"
        >
            <div className="columns-2 gap-2 sm:columns-3">
                {shots.map((p) => (
                    <img
                        key={p.link}
                        src={p.link}
                        alt="Recent work"
                        loading="lazy"
                        className="mb-2 w-full break-inside-avoid rounded-md"
                    />
                ))}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
            <span className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-black px-4 py-2 text-[14px] text-white transition-transform group-hover:scale-105">
                <Maximize2 className="h-3.5 w-3.5" />
                Go full screen
            </span>
        </Link>
    </section>
);
