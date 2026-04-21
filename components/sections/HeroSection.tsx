'use client';

import { useState } from 'react';
import { Bookmark, Plus } from 'lucide-react';
import Link from 'next/link';
import { DRIBBLE_URL, EMAIL, FIGMA_URL, SCHEDULE_URL } from '@/config';



export const HeroSection: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="mx-auto max-w-xl px-6 py-8 md:py-12">
            {/* — Block 1: headline + CTAs — */}
            <div className="mb-4">
                <h1 className="mb-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                    Design Partner For Ambitious Tech Startups and Founders
                </h1>

                <p className="mb-7 text-base text-muted-foreground">
                    You&rsquo;ve got the idea. Great.<br />
                    Leave the rest to me!
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    {/* Schedule Call */}
                    <a
                        href={SCHEDULE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-foreground bg-background px-4 py-2 font-mono text-sm uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                        SCHEDULE CALL
                        <Bookmark className="h-3.5 w-3.5" />
                    </a>

                    {/* Copy Email */}
                    <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex items-center gap-2 rounded-md border border-foreground bg-background px-4 py-2 font-mono text-sm uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                        <Plus className="h-3.5 w-3.5" />
                        {copied ? 'COPIED!' : 'COPY EMAIL'}
                    </button>

                    {/* Terms */}
                    <Link
                        href="/terms"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Terms
                    </Link>
                </div>
            </div>

            {/* — Block 2: about + profile links — */}
            <div className="max-w-xl">
                <p className="mb-4 text-base text-foreground">
                    <strong>I design and build products end-to-end.</strong>
                    {' '}Over the past 5 years, I&rsquo;ve worked across Peak, IBM&rsquo;s Weather Channel,
                    YC-backed Dojah, Antler-backed Souk, and Techstars-backed Voyance.
                    In my most recent roles, I didn&rsquo;t just design&mdash;I shipped the code too.
                </p>

                <p className="mb-8 text-base text-muted-foreground">
                    I come from a design-first perspective, which most engineers don&rsquo;t. That changes
                    how I think, build, and prioritize. With AI agents in my workflow, I can go from
                    Figma to production, shipping real products for real users, fast.
                </p>

                <div className="flex flex-wrap gap-3">
                    <a
                        href={DRIBBLE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 font-mono text-sm text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
                    >
                        Dribbble Profile
                        <Bookmark className="h-3.5 w-3.5" />
                    </a>

                    <a
                        href={FIGMA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 font-mono text-sm text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
                    >
                        Figma Profile
                        <Bookmark className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
            
        </section>
    );
};
