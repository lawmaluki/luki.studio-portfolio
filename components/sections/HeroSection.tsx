'use client';

import { useState } from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
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
        <section className="mx-auto max-w-xl px-6 pt-8 pb-2 md:pt-12 md:pb-4">
            {/* — Block 1: headline + CTAs — */}
            <div className="mb-4">
                <h1 className="mb-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                    Design Partner for Mission-Driven Products, Startups & Communities
                </h1>

                <p className="mb-7 text-base text-muted-foreground">
                 Build products that people love using and teams love building.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    {/* Schedule Call */}
                    <a
                        href={SCHEDULE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-[#D9D9D9] bg-background px-4 py-2 font-mono text-sm text-foreground transition-colors hover:bg-foreground hover:text-background dark:border-[#374151]"
                    >
                        Schedule Call
                        <ArrowUpRight className="h-4 w-4" />
                    </a>

                    {/* Copy Email */}
                    <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex items-center gap-2 rounded-md border border-[#D9D9D9] bg-background px-4 py-2 font-mono text-sm text-foreground transition-colors hover:bg-foreground hover:text-background dark:border-[#374151]"
                    >
                        <Plus className="h-3.5 w-3.5" />
                        {copied ? 'Copied!' : 'Copy Email'}
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
                    <strong>I design and build products that solves real problems.</strong>
                    {' '} Over the last 6+ years, I've worked with startups, nonprofits, 
                    community platforms, civic organizations, event platforms, healthcare products, 
                    and global technology teams to design experiences that are intuitive, scalable, 
                    and impactful.
                </p>

                <p className="mb-8 text-base text-muted-foreground">

I don't just design screens; I design systems, workflows, and experiences that help products grow.
                </p>

                <div className="flex flex-wrap gap-3">
                    <a
                        href={DRIBBLE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 font-mono text-sm text-white transition-opacity hover:opacity-80 dark:bg-gray-200 dark:text-gray-900"
                    >
                        Dribbble Profile
                        <ArrowUpRight className="h-4 w-4" />
                    </a>

                    <a
                        href={FIGMA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 font-mono text-sm text-white transition-opacity hover:opacity-80 dark:bg-gray-200 dark:text-gray-900"
                    >
                        Figma Profile
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
            
        </section>
    );
};
