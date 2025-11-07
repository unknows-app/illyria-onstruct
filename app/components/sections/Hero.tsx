'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-beige via-brand-beige-soft to-brand-beige pt-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #2F4A3A 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full">
                        <Sparkles className="h-4 w-4 text-brand-gold" />
                        <span className="text-sm font-medium text-brand">Award-Winning Design Studio</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand leading-tight">
                        Crafting Timeless
                        <span className="block text-brand-gold">Interiors</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl">
                        Transform your space into a masterpiece with our spectacular interior services. We blend elegance, functionality, and your unique vision into every detail.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white rounded-lg font-semibold hover:bg-brand-soft transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Start Your Project
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-brand/20 hover:border-brand/40"
                        >
                            View Our Work
                        </Link>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex gap-8 pt-4">
                        <div>
                            <div className="text-3xl font-bold text-brand">250+</div>
                            <div className="text-sm text-gray-600">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-brand">15+</div>
                            <div className="text-sm text-gray-600">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-brand">98%</div>
                            <div className="text-sm text-gray-600">Client Satisfaction</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/hero.jpg"
                            alt="Modern luxury living space interior design"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                                    <Sparkles className="h-6 w-6 text-brand-gold" />
                                </div>
                                <div>
                                    <div className="font-semibold text-brand">12 Design Awards</div>
                                    <div className="text-sm text-gray-600">Recognized Excellence</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute -top-4 -right-4 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand/20 rounded-full blur-2xl"
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-brand/30 flex items-start justify-center p-2"
                >
                    <motion.div className="w-1.5 h-1.5 bg-brand rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
