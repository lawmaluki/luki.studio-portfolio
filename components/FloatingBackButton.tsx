'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function FloatingBackButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
            <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/90 p-2.5 text-sm font-medium text-[#4E4E4E] shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-[#D1D5DB] hover:shadow-xl sm:px-5 sm:py-2.5 dark:border-[#374151] dark:bg-[#1F2937]/90 dark:text-[#9CA3AF] dark:hover:border-[#4B5563]"
            >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                <span className="hidden sm:inline">Back to projects</span>
            </Link>
        </div>
    );
}
