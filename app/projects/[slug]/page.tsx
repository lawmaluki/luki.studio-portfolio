import { notFound } from 'next/navigation';
import { ArrowLeft, Bookmark, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/config';
import { MainLayout } from '@/components/layouts';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};
    return { title: `${project.title} — Luki Studio`, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <MainLayout>
            <article className="mx-auto max-w-5xl px-6 py-14">
                {/* Back */}
                <Link
                    href="/"
                    className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to projects
                </Link>

                {/* Banner */}
                <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-muted aspect-[16/7] relative">
                    {project.image ? (
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                    ) : (
                        <div className="absolute inset-0 bg-muted" />
                    )}
                </div>

                {/* Meta row */}
                <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                        <Bookmark className="h-3 w-3" />
                        {project.category}
                    </span>
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                    <span className="ml-auto text-xs text-muted-foreground font-mono">{project.year}</span>
                </div>

                {/* Title */}
                <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {project.title}
                </h1>
                <p className="mb-8 text-sm text-muted-foreground font-mono">{project.role}</p>

                <hr className="mb-8 border-border" />

                {/* Summary */}
                <p className="mb-6 text-lg font-medium text-foreground leading-relaxed">
                    {project.summary}
                </p>

                {/* Full description */}
                <p className="mb-10 text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.description}
                </p>

                {/* External link */}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 font-mono text-sm text-background transition-opacity hover:opacity-80"
                    >
                        View Project
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                )}
            </article>
        </MainLayout>
    );
}
