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
                <p className="text-base text-[#7f7f7f]">Product Designer</p>
            </div>
        </div>

        <p className="text-base leading-relaxed text-balance text-black">
            I&apos;m a product designer who can design, prototype and build. I specialise in SaaS, AI products,
            complex workflows and design systems.
        </p>

        <p className="text-base leading-relaxed text-balance text-black">
            Design engineering is my edge: I take work from UX research and Figma prototypes through to frontend
            implementation, using AI-assisted development to get from idea to working product faster. I&apos;ve done
            this with startups, nonprofits, community and event platforms, healthcare products, and global technology
            teams.
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
