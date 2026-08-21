import { notFound } from 'next/navigation';
import { projects } from '@/config';
import { MainLayout } from '@/components/layouts';
import { ProjectDescription } from '@/components/ProjectDescription';
import { FloatingBackButton } from '@/components/FloatingBackButton';
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
                {/* Full description */}
                <ProjectDescription html={project.description} />
            </article>
            <FloatingBackButton />
        </MainLayout>
    );
}
