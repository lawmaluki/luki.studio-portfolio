/* eslint-disable @next/next/no-img-element */

export const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <div className="flex items-center gap-2">
        <img src={`/icons/${icon}.svg`} alt="" aria-hidden width={22} height={22} className="h-[22px] w-[22px]" />
        <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-black">{children}</h2>
    </div>
);
