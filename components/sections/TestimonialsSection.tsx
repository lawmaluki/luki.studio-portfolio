'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/config';

const AUTO_SCROLL_INTERVAL = 4000;

export const TestimonialsSection: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback((index: number) => {
        setCurrent((index + testimonials.length) % testimonials.length);
    }, []);

    const prev = useCallback(() => goTo(current - 1), [current, goTo]);
    const next = useCallback(() => goTo(current + 1), [current, goTo]);

    // Auto-scroll
    useEffect(() => {
        timerRef.current = setTimeout(next, AUTO_SCROLL_INTERVAL);
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [next]);

    const t = testimonials[current];

    return (
        <section className = "mx-auto max-w-xl px-6 py-8 md:py-12" >
            {/* Header row */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Testimonials.
                </h2>

                <div className="flex items-center divide-x divide-black/10 overflow-hidden rounded-lg border border-black/10 bg-black/5 backdrop-blur-md dark:divide-white/20 dark:border-white/20 dark:bg-white/10">
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
                className="animate-in fade-in duration-500 w-full overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
            >
                <div className="px-8 py-10">
                    <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
                        {t.quote}
                    </p>
                </div>

                <div className="flex items-center justify-between border-t border-border bg-muted px-6 py-3 text-sm text-foreground">
                    <span className="font-medium">{t.name}</span>
                    <span className="text-muted-foreground">{t.company}</span>
                </div>
            </div>

        </section>
    );
};
