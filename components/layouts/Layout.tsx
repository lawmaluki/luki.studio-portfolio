'use client';
import React from 'react';
// import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    // const currentPath = usePathname();

    return (
        <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">

            {/* Header */}
            <Header />

            {/* Main content (pushes footer to bottom) */}
            {/* <main className="flex-1 pt-16 lg:pt-20 container mx-auto px-4"> */}
                {children}
            {/* </main> */}

            {/* Footer at bottom */}
            <Footer />

        </div>
    );
};
