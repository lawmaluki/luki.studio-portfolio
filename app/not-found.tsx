'use client';

import Link from 'next/link';
import { MainLayout } from '@/components/layouts';

export default function NotFound() {
    return (
        <MainLayout>
            <section className="mx-auto max-w-xl px-6 py-16 md:py-24">
                <p className="mb-3 font-mono text-sm uppercase tracking-wide text-muted-foreground">
                    404
                </p>

                <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                    Page Not Found
                </h1>

                <p className="mb-8 text-base text-muted-foreground">
                    This page may have been moved, renamed, or no longer exists.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 font-mono text-sm text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
                    >
                        GO HOME
                    </Link>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-md border border-foreground bg-background px-4 py-2 font-mono text-sm uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                        CONTACT
                    </Link>
                </div>
            </section>
        </MainLayout>
    );
}
