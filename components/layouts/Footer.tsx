'use client';

import { ArrowUp } from 'lucide-react';
import { site } from '@/config';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full  bg-background">
            <div className="mx-auto flex max-w-xl items-center justify-between px-6 py-4">
                {/* Left: brand + year */}
                <span className="text-sm text-muted-foreground">
                    luki.studio · {new Date().getFullYear()}
                </span>

                {/* Center: icon pill */}
                <div className="flex items-center gap-1 rounded-full border border-border bg-muted px-2 py-1.5">
                    <a
                        href={site.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-background"
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a
                        href={site.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-background"
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                    </a>
                    <button
                        type="button"
                        aria-label="Back to top"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80"
                    >
                        <ArrowUp className="h-4 w-4" />
                    </button>
                </div>

                {/* Right: X (Twitter) */}
                <a
                    href={`https://x.com/${site.handles.X.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    X (Twitter)
                </a>
            </div>
        </footer>
    );
};
