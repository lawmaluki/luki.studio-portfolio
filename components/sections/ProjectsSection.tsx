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

            {/* Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-muted aspect-[4/3] block"
                    >
                        {project.image ? (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-muted" />
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="mb-1 text-xs font-mono text-white/70 uppercase tracking-wide">
                                {project.category} · {project.year}
                            </span>
                            <h3 className="text-base font-semibold text-white leading-snug">
                                {project.title}
                            </h3>
                            <p className="mt-1 text-xs text-white/80 line-clamp-2">
                                {project.summary}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="py-16 text-center text-sm text-muted-foreground">
                    No projects in this category yet.
                </p>
            )}
        </section></section>
       
    );
};
