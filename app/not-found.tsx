'use client';

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import { MainLayout } from '@/components/layouts';

export default function NotFound() {

    return (
        <MainLayout>
            <div className="py-24 bg-[#f7e7cc] flex items-center justify-center px-4">
                <div className="bg-white shadow-lg border border-black/10 rounded-3xl max-w-lg w-full p-10 text-center">

                    {/* Icon */}
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0d1220]">
                        <AlertTriangle className="h-8 w-8 text-[#e9be7d]" />
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl font-semibold text-[#101624] mb-4">
                        Page Not Found
                    </h1>

                    {/* Message */}
                    <p className="text-sm md:text-base text-[#444] leading-relaxed mb-8">
                        The page you are looking for may have been moved, renamed, or is no longer available.
                        If you believe this is an error, feel free to contact our team for assistance.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="px-6 py-3 rounded-xl bg-[#0d1220] text-white font-medium hover:opacity-90 transition"
                        >
                            Return to Home
                        </Link>

                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-xl bg-[#e9be7d] text-[#101624] font-medium hover:bg-[#d8ad6e] transition"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>

    );
};