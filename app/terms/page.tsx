import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MainLayout } from '@/components/layouts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms — Luki Studio',
    description: 'How projects are handled, including expectations around payments, cancellations, and ownership of work.',
};

const sections = [
    {
        label: 'INTRO',
        content: (
            <p>
                At Luki Studio, I focus on delivering thoughtful, high-quality design work through a collaborative process.
                These terms outline how projects are handled, including expectations around payments, cancellations,
                and ownership of work.
            </p>
        ),
    },
    {
        label: 'WORK ENGAGEMENT',
        content: (
            <ul>
                <li>When a project is scheduled, the allocated work time is reserved specifically for your product or brand.</li>
                <li>I dedicate time to research, design exploration, prototyping, and communication throughout the engagement.</li>
                <li>Once work on a task or phase begins, that time is considered consumed and billable, regardless of whether the final design direction is selected.</li>
                <li>Clients may request to stop or cancel work at any point, subject to the conditions described in this policy.</li>
            </ul>
        ),
    },
    {
        label: 'PAYMENT TERMS',
        content: (
            <ul>
                <li>Projects typically begin once an initial 55% deposit or first payment has been received.</li>
                <li>Depending on the scope, payments may be structured as:</li>
                <li>Upfront payment</li>
                <li>Milestone payments</li>
                <li>Monthly or retainer-based billing</li>
                <li>All invoices are expected to be paid within the timeframe specified on the invoice.</li>
                <li>Delays in payment may result in:</li>
                <li>A pause in active work</li>
                <li>Adjustments to delivery timelines</li>
                <li>Final deliverables may be withheld until all outstanding balances have been cleared.</li>
            </ul>
        ),
    },
    {
        label: 'CANCELLATIONS',
        content: (
            <ul>
                <li>If a client cancels a project after work has begun, any completed work hours are billable and must be paid.</li>
                <li>Deposits are non-refundable once the project has started.</li>
                <li>If I need to cancel due to unforeseen circumstances, any unused portion of a deposit will be refunded promptly.</li>
                <li>Written notice is required for all cancellations.</li>
            </ul>
        ),
    },
    {
        label: 'OWNERSHIP & INTELLECTUAL PROPERTY',
        content: (
            <ul>
                <li>All design files, concepts, and deliverables created remain the property of Luki Studio until full payment has been received.</li>
                <li>Upon full payment, ownership of the final deliverables transfers to the client.</li>
                <li>I reserve the right to display completed work in my portfolio unless a non-disclosure agreement has been signed.</li>
                <li>Preliminary concepts and explorations not selected for delivery remain the intellectual property of Luki Studio.</li>
            </ul>
        ),
    },
    {
        label: 'REVISIONS',
        content: (
            <ul>
                <li>Each project phase includes a defined number of revision rounds as outlined in the project proposal.</li>
                <li>Revisions beyond the agreed scope will be billed at the standard hourly rate.</li>
                <li>A revision is defined as changes within the original brief. A change in direction or scope constitutes a new phase of work.</li>
            </ul>
        ),
    },
    {
        label: 'CONFIDENTIALITY',
        content: (
            <ul>
                <li>Any sensitive business information shared during the engagement will be treated with strict confidentiality.</li>
                <li>I will not share, sell, or disclose client information to third parties without explicit consent.</li>
                <li>If required, a formal NDA can be signed prior to the project commencing.</li>
            </ul>
        ),
    },
];

export default function TermsPage() {
    return (
        <MainLayout>
            <article className="mx-auto max-w-xl px-6 py-10 md:py-16">
                {/* Back link */}
                <Link
                    href="/"
                    className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to Home
                </Link>

                {/* Sections */}
                <div className="space-y-12">
                    {sections.map((section) => (
                        <div key={section.label}>
                            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                {section.label}
                            </p>
                            <div className="text-base leading-relaxed text-foreground [&_ul]:space-y-3 [&_ul]:pl-0 [&_li]:flex [&_li]:gap-3 before:[&_li]:content-['•'] before:[&_li]:text-muted-foreground before:[&_li]:shrink-0">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </MainLayout>
    );
}
