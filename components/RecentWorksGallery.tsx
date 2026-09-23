'use client';

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Lightbox } from './ProjectDescription';

export function RecentWorksGallery({ shots }: { shots: string[] }) {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    return (
        <>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {shots.map((src) => (
                    <button
                        key={src}
                        type="button"
                        onClick={() => setLightboxSrc(src)}
                        className="mb-4 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-lg border border-[#f2f2f2] bg-[#f6f6f6]"
                    >
                        <img
                            src={src}
                            alt="Recent work"
                            loading="lazy"
                            className="w-full transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </button>
                ))}
            </div>
            {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
        </>
    );
}
