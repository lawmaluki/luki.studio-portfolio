import type { LucideIcon } from 'lucide-react';

export const SectionTitle = ({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) => (
    <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-black" strokeWidth={2.25} />
        <h2 className="text-[22px] font-medium tracking-[-0.02em] text-black">{children}</h2>
    </div>
);
