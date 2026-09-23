/* eslint-disable @next/next/no-img-element */
import { SCHEDULE_URL } from '@/config';

export const IntroSection: React.FC = () => (
    <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
            <img
                src="/Logo.png"
                alt="Lawrence Maluki"
                className="h-12 w-12 rounded-full border border-[#f2f2f2] object-cover"
            />
            <div>
                <p className="text-base font-medium text-black">Lawrence Maluki</p>
                <p className="text-base text-[#7f7f7f]">Product Designer &amp; Design Engineer</p>
            </div>
        </div>

        <p className="text-base leading-relaxed text-black">
            I design and build products that solve real problems. I&apos;ve worked with startups, nonprofits,
            community platforms, event platforms, healthcare products, and global technology teams, working on the
            systems, workflows, and decisions underneath the screens: the parts that decide whether a product grows.
        </p>

        <p className="text-base text-black">
            Freelance product designer, open to{' '}
            <a
                href={SCHEDULE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7f7f7f] underline decoration-[1.5px] underline-offset-[6px] transition-colors hover:text-black"
            >
                new projects
            </a>
        </p>
    </section>
);
