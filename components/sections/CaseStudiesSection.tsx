/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ArrowUpRight, BookOpen, LayoutGrid } from 'lucide-react';
import { projects } from '@/config';
import { SectionTitle } from './SectionTitle';

// Flagship case studies, shown large; every other project goes in the grid below.
const FEATURED_SLUGS = [
    'milpress-adult-literacy',
    'akropolis-product-design',
    'kyc-verification-flow',
    'designing-leveragex',
];

const caseStudies = projects.filter((p) => p.category === 'Project' && p.slug);
const featured = FEATURED_SLUGS.map((slug) => caseStudies.find((p) => p.slug === slug)).filter((p) => p !== undefined);
const others = caseStudies.filter((p) => !FEATURED_SLUGS.includes(p.slug));

export const CaseStudiesSection: React.FC = () => (
    <section className="flex flex-col gap-6">
        <SectionTitle icon={BookOpen}>Read case studies</SectionTitle>

        <div className="flex flex-col gap-12">
            {featured.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-base font-medium text-black">{p.title}</p>
                            <p className="text-[15px] leading-relaxed text-[#7f7f7f]">{p.summary}</p>
                        </div>
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#7f7f7f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                    </div>
                    {p.image && (
                        <div className="overflow-hidden rounded-lg border border-[#f2f2f2] bg-[#f6f6f6]">
                            <img
                                src={p.image}
                                alt={p.title}
                                loading="lazy"
                                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    )}
                </Link>
            ))}
        </div>
    </section>
);

export const MoreProjectsSection: React.FC = () => (
    <section className="flex flex-col gap-6">
        <SectionTitle icon={LayoutGrid}>More projects</SectionTitle>

        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2">
            {others.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group flex flex-col gap-3">
                    <div className="overflow-hidden rounded-md border border-[#f2f2f2] bg-[#f6f6f6]">
                        {p.image && (
                            <img
                                src={p.image}
                                alt={p.title}
                                loading="lazy"
                                className="aspect-[1416/810] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        )}
                    </div>
                    <div>
                        <p className="text-[15px] font-medium text-black">{p.title}</p>
                        <p className="line-clamp-2 text-[15px] text-[#7f7f7f]">{p.summary}</p>
                    </div>
                </Link>
            ))}
        </div>
    </section>
);
