'use client';

import { useEffect, useState } from 'react';
import { site } from '@/config';

const Chip = ({ label }: { label: string }) => (
    <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 pointer-events-none">
        {label}
    </span>
);

export const Footer: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 pointer-events-none">
            <div
                className={`pointer-events-auto flex items-center gap-1.5 rounded-lg border border-gray-300/60 dark:border-gray-600/80 bg-muted/70 dark:bg-muted/90 p-1.5 shadow-sm backdrop-blur-md transition-all duration-500 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
                {/* LinkedIn */}
                <div className="group relative">
                    <Chip label="LinkedIn" />
                    <a
                        href={site.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-9 w-9 items-center justify-center rounded-md bg-background text-foreground shadow-sm ring-1 ring-gray-200/80 dark:ring-gray-700/80 transition-opacity hover:opacity-60"
                    >
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                </div>

                {/* X (Twitter) */}
                <div className="group relative">
                    <Chip label="X (Twitter)" />
                    <a
                        href={`https://x.com/${site.handles.X.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className="flex h-9 w-9 items-center justify-center rounded-md bg-background text-foreground shadow-sm ring-1 ring-gray-200/80 dark:ring-gray-700/80 transition-opacity hover:opacity-60"
                    >
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </div>

                {/* GitHub */}
                <div className="group relative">
                    <Chip label="GitHub" />
                    <a
                        href={site.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex h-9 w-9 items-center justify-center rounded-md bg-background text-foreground shadow-sm ring-1 ring-gray-200/80 dark:ring-gray-700/80 transition-opacity hover:opacity-60"
                    >
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                    </a>
                </div>

                {/* Favicon — back to top */}
                <div className="group relative">
                    <Chip label="Back to top" />
                    <button
                        type="button"
                        aria-label="Back to top"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="h-9 w-9 overflow-hidden rounded-md bg-background shadow-sm ring-1 ring-gray-200/80 dark:ring-gray-700/80 transition-opacity hover:opacity-60"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Favicon.png"
                            alt="Back to top"
                            className="h-full w-full object-cover"
                        />
                    </button>
                </div>
            </div>
        </footer>
    );
};
