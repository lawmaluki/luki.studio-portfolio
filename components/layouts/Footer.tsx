'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { DRIBBLE_URL, FIGMA_URL, SCHEDULE_URL, site } from '@/config';

const COLUMNS = [
    {
        title: 'Hiring?',
        links: [
            { label: 'LinkedIn', href: site.links.linkedin },
            { label: 'Figma', href: FIGMA_URL },
            { label: 'Cal.com', href: SCHEDULE_URL },
        ],
    },
    {
        title: 'Find me online',
        links: [
            { label: 'Dribbble', href: DRIBBLE_URL },
            { label: 'Twitter', href: `https://x.com/${site.handles.X.replace('@', '')}` },
            { label: 'GitHub', href: site.links.github },
        ],
    },
];

export const Footer: React.FC = () => (
    <footer className="mx-auto w-full max-w-[600px] px-6 pt-16 pb-12">
        <div className="flex flex-wrap items-start justify-between gap-10 border-t border-[#f2f2f2] pt-10">
            <div className="flex flex-wrap gap-10 sm:gap-16">
                {COLUMNS.map((col) => (
                    <div key={col.title} className="flex flex-col gap-3">
                        <p className="text-[15px] text-[#7f7f7f]">{col.title}</p>
                        {col.links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1 text-[15px] text-black"
                            >
                                {l.label}
                                <ArrowUpRight className="h-3.5 w-3.5 text-[#7f7f7f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        ))}
                    </div>
                ))}

                <Link
                    href="/terms"
                    className="text-[15px] text-[#7f7f7f] underline decoration-[1.5px] underline-offset-[6px] transition-colors hover:text-black"
                >
                    Terms
                </Link>
            </div>

            <div className="flex flex-col items-start gap-3">
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-[15px] text-[#7f7f7f] underline decoration-[1.5px] underline-offset-[6px] transition-colors hover:text-black"
                >
                    Back to top
                </button>
            </div>
        </div>
    </footer>
);
