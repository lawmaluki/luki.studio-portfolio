'use client';

import { useState } from 'react';
import { ArrowUpRight, PenLine } from 'lucide-react';
import { projects } from '@/config';
import { inferReadingType } from './ProjectsSection';
import { SectionTitle } from './SectionTitle';

const PREVIEW_PER_GROUP = 3;

const LABELS = { Reading: 'Articles', Newsletters: 'Newsletters', Podcasts: 'Podcasts' } as const;
const ITEM_LABELS = { Reading: 'Article', Newsletters: 'Newsletter', Podcasts: 'Podcast' } as const;

const items = projects.filter((p) => p.category === 'Reading').map((p) => ({ ...p, type: inferReadingType(p) }));
const groups = (Object.keys(LABELS) as (keyof typeof LABELS)[])
    .map((type) => ({ type, items: items.filter((i) => i.type === type) }))
    .filter((g) => g.items.length > 0);

export const ReadingSection: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="flex flex-col gap-6">
            <SectionTitle icon={PenLine}>Reading list</SectionTitle>

            <div className="flex flex-col gap-8">
                {groups.map((g) => (
                    <div key={g.type} className="grid gap-3 sm:grid-cols-[120px_1fr] sm:gap-6">
                        <p className="text-[15px] text-[#7f7f7f]">
                            {LABELS[g.type]} <span className="text-[#c4c4c4]">{g.items.length}</span>
                        </p>
                        <ul className="flex flex-col gap-4">
                            {(expanded ? g.items : g.items.slice(0, PREVIEW_PER_GROUP)).map((item) => (
                                <li key={item.link}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start justify-between gap-4"
                                    >
                                        <div>
                                            <p className="text-[15px] text-black group-hover:underline group-hover:underline-offset-4">
                                                {item.title}
                                            </p>
                                            <p className="text-[13px] text-[#7f7f7f]">{ITEM_LABELS[g.type]}</p>
                                        </div>
                                        <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-[#7f7f7f] opacity-0 transition-opacity group-hover:opacity-100" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {items.length > groups.length * PREVIEW_PER_GROUP && (
                <button
                    type="button"
                    onClick={() => setExpanded((e) => !e)}
                    className="self-start text-[15px] text-[#7f7f7f] underline decoration-[1.5px] underline-offset-[6px] transition-colors hover:text-black"
                >
                    {expanded ? 'Show less' : `Show all ${items.length}`}
                </button>
            )}
        </section>
    );
};
