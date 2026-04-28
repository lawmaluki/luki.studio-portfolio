'use client';

import { useState } from 'react';
import { Bookmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects, type ProjectCategory } from '@/config';

const CATEGORIES: ProjectCategory[] = ['Project', 'Spotlight', 'Reading', 'DopenS'];

export const ProjectsSection: React.FC = () => {
    const [active, setActive] = useState<ProjectCategory>('Spotlight');

    const filtered = projects.filter((p) => p.category === active);

    return (
        <section className="w-full px-6 py-8 md:py-12"> <section className=" container  mx-auto ">
            {/* Header */}
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
                Projects
            </h2>

            {/* Filter tabs */}
            <div className="mb-8 flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => {
                    const isActive = active === cat;
                    return (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => setActive(cat)}
                            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${isActive
                                    ? 'bg-orange-500 text-white'
                                    : 'border border-border bg-background text-foreground hover:bg-muted'
                                }`}
                        >
                            <Bookmark className="h-3.5 w-3.5" />
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Grid — projects with a slug */}
            {filtered.some((p) => p.slug) && (
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.filter((p) => p.slug).map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-muted transition-colors hover:border-foreground/30"
                        >
                            {/* Image */}
                            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                <Image
                                    src={project.image!}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
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
                <ul className="divide-y divide-border">
                    {filtered.filter((p) => !p.slug).map((project) => (
                        <li key={project.slug}>
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
        </section></section>
       
    );
};
