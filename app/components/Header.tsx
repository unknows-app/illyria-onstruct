'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-brand rounded-md flex items-center justify-center group-hover:bg-brand-soft transition-colors">
                            <span className="text-white font-bold text-xl">IC</span>
                        </div>
                        <span className="text-xl font-semibold text-brand tracking-tight">
                            Illyria Construct
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${isActive(item.href)
                                        ? 'text-brand'
                                        : 'text-gray-700 hover:text-brand hover:bg-brand/5'
                                    }`}
                            >
                                {item.name}
                                {isActive(item.href) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-6 py-2.5 bg-brand text-white rounded-md text-sm font-medium hover:bg-brand-soft transition-colors shadow-sm hover:shadow-md"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="md:hidden p-2 rounded-md text-brand hover:bg-brand/10 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                            style={{ top: '80px' }}
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed right-0 top-20 bottom-0 w-full max-w-sm bg-white shadow-2xl md:hidden overflow-y-auto"
                        >
                            <div className="px-6 py-8 space-y-6">
                                <nav className="space-y-2">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(item.href)
                                                    ? 'bg-brand text-white'
                                                    : 'text-gray-700 hover:bg-brand/5 hover:text-brand'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="pt-6 border-t border-gray-200">
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block w-full px-6 py-3 bg-brand text-white text-center rounded-lg font-medium hover:bg-brand-soft transition-colors"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
