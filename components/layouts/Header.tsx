'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export const Header: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/">
                    <Image src="/Logo.svg" alt="lawmaluki" width={40} height={40} priority />
                </Link>

                {/* Dark / Light toggle */}
                <button
                    type="button"
                    aria-label="Toggle theme"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
                >
                    <span className="block h-5 w-5 rounded-sm bg-black dark:bg-white" />
                </button>
            </div>
        </header>
    );
};
