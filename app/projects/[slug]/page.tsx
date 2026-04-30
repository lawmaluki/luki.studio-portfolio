import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/config';
import { MainLayout } from '@/components/layouts';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
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

                {/* Full description */}
                <div
                    className="mb-10 max-w-none"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                />

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
