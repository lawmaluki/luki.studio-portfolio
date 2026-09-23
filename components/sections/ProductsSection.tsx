/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from 'lucide-react';
import { liveApps, products, type Product } from '@/config';
import { SectionTitle } from './SectionTitle';

/** Wraps a card in a link only when the product has one. */
const Shell = ({ link, className, children }: { link?: string; className: string; children: React.ReactNode }) =>
    link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`group ${className}`}>
            {children}
        </a>
    ) : (
        <div className={className}>{children}</div>
    );

const Title = ({ item }: { item: Product }) => (
    <div className="flex items-start justify-between gap-3">
        <p className="text-base font-medium text-black group-hover:underline group-hover:underline-offset-4">
            {item.title}
        </p>
        {item.link && (
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#7f7f7f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
        )}
    </div>
);

export const ProductsSection: React.FC = () => {
    if (products.length === 0) return null;

    return (
        <section className="flex flex-col gap-6">
            <SectionTitle icon="build">My Products</SectionTitle>

            <div className="flex flex-col gap-6">
                {products.map((item) => (
                    <Shell key={item.title} link={item.link} className="flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
                        <div className="w-full shrink-0 overflow-hidden rounded-md border border-[#f2f2f2] bg-[#f6f6f6] sm:w-[200px]">
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Title item={item} />
                            <p className="text-[15px] leading-relaxed text-[#7f7f7f]">{item.summary}</p>
                            <p className="mt-1 text-[13px] text-[#a3a3a3]">{item.platform}</p>
                        </div>
                    </Shell>
                ))}
            </div>
        </section>
    );
};

export const LiveAppsSection: React.FC = () => {
    if (liveApps.length === 0) return null;

    return (
        <section className="flex flex-col gap-6">
            <SectionTitle icon="live">View live apps</SectionTitle>

            <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2">
                {liveApps.map((item) => (
                    <Shell key={item.title} link={item.link} className="flex flex-col gap-3">
                        <div className="overflow-hidden rounded-md border border-[#f2f2f2] bg-[#f6f6f6]">
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="aspect-[1416/810] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Title item={item} />
                            <p className="text-[15px] leading-relaxed text-[#7f7f7f]">{item.summary}</p>
                            <p className="mt-1 text-[13px] text-[#a3a3a3]">{item.platform}</p>
                        </div>
                    </Shell>
                ))}
            </div>
        </section>
    );
};
