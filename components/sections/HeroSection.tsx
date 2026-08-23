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
        <section className="relative mx-auto max-w-5xl overflow-hidden px-6 pt-8 pb-2 md:pt-14 md:pb-8">
            {/* Decorative dot-grid backdrop */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_65%_55%_at_30%_0%,black,transparent)] dark:[background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"
            />

            <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start md:gap-8">
                {/* — Left: headline + CTAs — */}
                <div>
                    <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
                        Design Partner for Mission-Driven Products, Startups & Communities
                    </h1>

                    <p className="mb-7 max-w-md text-base text-muted-foreground">
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

                {/* — Right: about panel + profile links — */}
                <div className="relative rounded-2xl border border-[#D9D9D9] bg-muted/40 p-6 backdrop-blur-sm dark:border-[#374151] dark:bg-white/[0.03] md:p-7">
                    <div className="mb-4 h-1 w-10 rounded-full bg-foreground/25" />

                    <p className="mb-4 text-base text-foreground">
                        <strong>I design and build products that solves real problems.</strong>
                        {' '} Over the last years, I&apos;ve worked with startups, nonprofits,
                        community platforms, civic organizations, event platforms, healthcare products,
                        and global technology teams to design experiences that are intuitive, scalable,
                        and impactful.
                    </p>

                    <p className="mb-8 text-base text-muted-foreground">
                        I don&apos;t just design screens; I work on the systems, workflows, and decisions underneath them, the parts that decide whether a product grows.
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
            </div>
        </section>
    );
};
