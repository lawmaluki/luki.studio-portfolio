import { ArrowUpRight, Mail } from 'lucide-react';
import { EMAIL, SCHEDULE_URL } from '@/config';

export const ContactSection: React.FC = () => (
    <section className="relative overflow-hidden rounded-xl border border-[#f2f2f2] bg-[#f6f6f6] px-6 py-12 text-center sm:px-10">
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        />
        <div className="relative flex flex-col items-center gap-3">
            <h2 className="text-[32px] font-medium tracking-[-0.03em] text-black">Up for a quick chat?</h2>
            <p className="max-w-sm text-[15px] leading-relaxed text-balance text-[#7f7f7f]">
                Have a product in mind, or a design problem that needs untangling? Let&apos;s bring it to life.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[14px] text-white transition-opacity hover:opacity-80"
                >
                    <Mail className="h-3.5 w-3.5" />
                    Send an email
                </a>
                <a
                    href={SCHEDULE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-5 py-2.5 text-[14px] text-black transition-colors hover:border-black"
                >
                    Book a call
                    <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
            </div>
        </div>
    </section>
);
