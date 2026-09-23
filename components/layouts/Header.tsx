'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { EMAIL, SCHEDULE_URL } from '@/config';

const NAV_LINKS = [
    { label: 'Send a mail', href: `mailto:${EMAIL}`, external: true },
    { label: 'Book a call', href: SCHEDULE_URL, external: true },
];

const NavLink = ({ label, href, external }: { label: string; href: string; external?: boolean }) => (
    <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group relative text-[15px] text-[#7f7f7f] transition-colors hover:text-black"
    >
        {label}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
    </Link>
);

export const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-5 z-50 mx-auto w-[90%] max-w-[640px]">
            <nav className="rounded-[9px] border border-[#f6f6f6] bg-white px-4 py-2 shadow-[0_1px_8px_1px_rgba(214,222,244,0.05)] sm:rounded-full sm:px-6">
                <div className="flex items-center justify-between gap-4 py-1">
                    <Link href="/" className="text-[15px] font-medium text-black">
                        Lawrence Maluki
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden items-center gap-5 sm:flex">
                        {NAV_LINKS.map((l) => (
                            <NavLink key={l.label} {...l} />
                        ))}
                        <span aria-hidden className="h-4 w-px bg-[#e5e5e5]" />
                        <NavLink label="Recent works" href="/recent-works" />
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        onClick={() => setOpen((o) => !o)}
                        className="text-black sm:hidden"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile links */}
                {open && (
                    <div className="flex flex-col gap-3 pt-3 pb-2 sm:hidden" onClick={() => setOpen(false)}>
                        {NAV_LINKS.map((l) => (
                            <NavLink key={l.label} {...l} />
                        ))}
                        <NavLink label="Recent works" href="/recent-works" />
                    </div>
                )}
            </nav>
        </header>
    );
};
