'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/config';

export const TestimonialsSection: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((current + 1) % testimonials.length);

    const t = testimonials[current];

    return (
        <section className="mx-auto max-w-xl px-6 pt-2 pb-8 md:pt-4 md:pb-12">
            {/* Header row */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Testimonials.
                </h2>

                <div className="flex items-center divide-x divide-[#D9D9D9] overflow-hidden rounded-lg border border-[#D9D9D9] bg-black/5 backdrop-blur-md dark:divide-white/20 dark:border-white/20 dark:bg-white/10">
                    <button
                        type="button"
                        onClick={prev}
                        aria-label="Previous testimonial"
                        className="flex h-9 w-10 items-center justify-center text-foreground transition-colors hover:bg-muted"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next testimonial"
                        className="flex h-9 w-10 items-center justify-center text-foreground transition-colors hover:bg-muted"
                    >
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Card */}
            <div
                key={t.id}
                className="animate-in fade-in duration-500 w-full overflow-hidden rounded-2xl border border-[#D9D9D9] bg-background dark:border-[#374151]"
            >
                <div className="px-8 py-10">
                    <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
                        {t.quote}
                    </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#D9D9D9] bg-[#F5F5F5] px-6 py-3 text-sm text-foreground dark:border-[#374151] dark:bg-[#1f2937]">
                    <span className="font-medium">{t.name}</span>
                    <span className="text-muted-foreground">{t.company}</span>
                </div>
            </div>

        </section>
    );
};
