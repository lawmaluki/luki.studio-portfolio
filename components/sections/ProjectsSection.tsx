'use client';

import { useState } from 'react';
import { Bookmark, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects, type ProjectCategory, type Project } from '@/config';

const CATEGORIES: ProjectCategory[] = ['Project', 'Spotlight', 'Reading', 'DopenS'];

type ReadingType = 'All' | 'Reading' | 'Newsletters' | 'Podcasts';
const READING_FILTERS: ReadingType[] = ['All', 'Reading', 'Newsletters', 'Podcasts'];

function inferReadingType(project: Project): Exclude<ReadingType, 'All'> {
    const url = project.link ?? '';
    if (
        url.includes('spotify.com') ||
        url.includes('podcasts.apple.com') ||
        url.includes('afripods.africa') ||
        url.includes('mfmpod.com') ||
        url.includes('startupsfortherestofus.com') ||
        url.endsWith('.fm') ||
        url.includes('.fm/')
    ) return 'Podcasts';
    if (url.includes('substack.com') || url.includes('newsletter')) return 'Newsletters';
    return 'Reading';
}

function InfoDietView({ items }: { items: Project[] }) {
    const [filter, setFilter] = useState<ReadingType>('All');

    const typed = items.map((p) => ({ ...p, type: inferReadingType(p) }));
    const filtered = filter === 'All' ? typed : typed.filter((p) => p.type === filter);

    const counts = {
        Reading: typed.filter((p) => p.type === 'Reading').length,
        Newsletters: typed.filter((p) => p.type === 'Newsletters').length,
        Podcasts: typed.filter((p) => p.type === 'Podcasts').length,
    };
    const categoryCount = Object.values(counts).filter((c) => c > 0).length;

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Info Diet</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    Content I consume regularly — {items.length} sources across {categoryCount} categories.
                </p>
            </div>

            {/* Filter pills */}
            <div className="mb-8 flex flex-wrap gap-2">
                {READING_FILTERS.map((f) => {
                    const isActive = filter === f;
                    return (
                        <button
                            key={f}
                            type="button"
                            onClick={() => setFilter(f)}
                            className={`rounded-full px-3.5 py-1 text-sm font-medium transition-colors ${
                                isActive
                                    ? 'bg-lime-200 text-lime-900 dark:bg-lime-300 dark:text-lime-950'
                                    : 'bg-gray-100 text-muted-foreground hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
                            }`}
                        >
                            {f}
                        </button>
                    );
                })}
            </div>

            {/* List */}
            <ul className="divide-y divide-gray-300/40 dark:divide-gray-600/30">
                {filtered.map((item, i) => (
                    <li key={i}>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between py-4 transition-opacity hover:opacity-60"
                        >
                            <div className="flex items-center gap-3">
                                <span className="font-medium text-foreground">{item.title}</span>
                                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs text-muted-foreground">
                                    {item.type}
                                </span>
                            </div>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                    </li>
                ))}
            </ul>

            {filtered.length === 0 && (
                <p className="py-16 text-center text-sm text-muted-foreground">
                    No items in this category yet.
                </p>
            )}
        </div>
    );
}

export const ProjectsSection: React.FC = () => {
    const [active, setActive] = useState<ProjectCategory>('Spotlight');

    const filtered = projects.filter((p) => p.category === active);
    const readingItems = projects.filter((p) => p.category === 'Reading');

    return (
        <section className="w-full px-6 py-8 md:py-12">
            <section className="container mx-auto">
                {/* Category tabs */}
                <div className="mb-8 flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => {
                        const isActive = active === cat;
                        return (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActive(cat)}
                                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-muted-foreground hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
                                }`}
                            >
                                <Bookmark className="h-3.5 w-3.5" />
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Reading → Info Diet view */}
                {active === 'Reading' && <InfoDietView items={readingItems} />}

                {/* Other categories */}
                {active !== 'Reading' && (
                    <>
                        {/* Grid — projects with a slug */}
                        {filtered.some((p) => p.slug) && (
                            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {filtered.filter((p) => p.slug).map((project) => (
                                    <Link
                                        key={project.slug}
                                        href={`/projects/${project.slug}`}
                                        className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-muted transition-colors hover:border-foreground/30"
                                    >
                                        <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                            <Image
                                                src={project.image!}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5 p-4">
                                            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                                                {project.category} · {project.year}
                                            </span>
                                            <h3 className="text-sm font-semibold leading-snug text-foreground">
                                                {project.title}
                                            </h3>
                                            <p className="line-clamp-2 text-xs text-muted-foreground">
                                                {project.summary}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* List — projects without a slug */}
                        {filtered.some((p) => !p.slug) && (
                            <ul className="divide-y divide-gray-300/40 dark:divide-gray-600/30">
                                {filtered.filter((p) => !p.slug).map((project, i) => (
                                    <li key={i}>
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="group flex items-center justify-between py-4 text-foreground transition-colors hover:text-muted-foreground"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wide w-10 shrink-0">
                                                    {project.year}
                                                </span>
                                                <span className="text-sm font-medium">{project.title}</span>
                                            </div>
                                            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wide opacity-0 transition-opacity group-hover:opacity-100">
                                                View →
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {filtered.length === 0 && (
                            <p className="py-16 text-center text-sm text-muted-foreground">
                                No projects in this category yet.
                            </p>
                        )}
                    </>
                )}
            </section>
        </section>
    );
};
