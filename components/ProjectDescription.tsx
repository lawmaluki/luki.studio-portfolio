'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { X } from 'lucide-react';

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose]);

    const handleClose = useCallback((e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={handleClose}
        >
            <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close"
            >
                <X className="h-5 w-5" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt="Project image"
                className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            />
        </div>
    );
}

export function ProjectDescription({ html }: { html: string }) {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG') {
                setLightboxSrc((target as HTMLImageElement).src);
            }
        };
        el.addEventListener('click', handleClick);
        return () => el.removeEventListener('click', handleClick);
    }, []);

    return (
        <>
            <div
                ref={ref}
                className="mb-10 max-w-none [&_img:not(.carousel-thumb-img)]:cursor-zoom-in"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            {lightboxSrc && (
                <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
            )}
        </>
    );
}
