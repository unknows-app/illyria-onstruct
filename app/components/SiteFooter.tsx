'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const footerLinks = {
    services: [
        { name: 'Residential Design', href: '/services#residential' },
        { name: 'Commercial Spaces', href: '/services#commercial' },
        { name: 'Space Planning', href: '/services#planning' },
        { name: 'Renovation', href: '/services#renovation' },
        { name: 'Furniture Selection', href: '/services#furniture' },
        { name: 'Color Consultation', href: '/services#color' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Projects', href: '/projects' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
    ],
};

export default function SiteFooter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus('success');
        setEmail('');

        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <footer className="bg-brand text-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter Section */}
                <div className="py-12 border-b border-white/10">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-semibold mb-3">Stay Inspired</h3>
                        <p className="text-brand-beige mb-6">
                            Subscribe to our newsletter for the latest design trends, project showcases, and expert tips.
                        </p>
                        <form onSubmit={handleSubmit} className="flex gap-3">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-soft text-brand rounded-lg font-medium transition-colors inline-flex items-center gap-2 disabled:opacity-50"
                            >
                                {status === 'loading' ? (
                                    'Sending...'
                                ) : status === 'success' ? (
                                    'Subscribed!'
                                ) : (
                                    <>
                                        Subscribe
                                        <Send className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-brand-gold rounded-md flex items-center justify-center">
                                <span className="text-brand font-bold text-xl">IC</span>
                            </div>
                            <span className="text-xl font-semibold tracking-tight">
                                Illyria Construct
                            </span>
                        </div>
                        <p className="text-brand-beige mb-6 max-w-md">
                            Creating timeless interiors that transform houses into homes and spaces into experiences. Based in Lviv, serving clients throughout Ukraine.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="tel:+380123456789"
                                className="flex items-center gap-3 text-brand-beige hover:text-brand-gold transition-colors group"
                            >
                                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                <span>+380 (93) 123-4567</span>
                            </a>
                            <a
                                href="mailto:hello@illyriaconstruct.com"
                                className="flex items-center gap-3 text-brand-beige hover:text-brand-gold transition-colors group"
                            >
                                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                <span>hello@illyriaconstruct.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-brand-beige">
                                <MapPin className="h-5 w-5" />
                                <span>14/5 Shevchenka St, Lviv, Ukraine</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-brand-beige hover:text-brand-gold transition-all inline-block hover:translate-x-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-brand-beige hover:text-brand-gold transition-all inline-block hover:translate-x-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-brand-beige hover:text-brand-gold transition-all inline-block hover:translate-x-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-beige text-sm">
                        © {new Date().getFullYear()} Illyria Construct. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors group"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors group"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors group"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
