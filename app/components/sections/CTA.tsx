'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

export default function CTA() {
    return (
        <section className="py-24 bg-brand-gold">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="bg-brand rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                backgroundSize: '48px 48px',
                            }} />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                                Ready to Transform Your Space?
                            </h2>
                            <p className="text-xl text-brand-beige mb-10 leading-relaxed">
                                Let's discuss your project and bring your interior design vision to life. Our team is ready to create something extraordinary together.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand rounded-lg font-semibold hover:bg-brand-beige transition-all shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    Schedule Consultation
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="tel:+380931234567"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-soft text-white rounded-lg font-semibold hover:bg-brand-soft/90 transition-all border-2 border-white/20"
                                >
                                    <Phone className="h-5 w-5" />
                                    Call Now
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-12 pt-12 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div>
                                    <div className="text-3xl font-bold mb-1">250+</div>
                                    <div className="text-brand-beige text-sm">Projects</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-1">15+</div>
                                    <div className="text-brand-beige text-sm">Years</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-1">98%</div>
                                    <div className="text-brand-beige text-sm">Satisfaction</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-1">12</div>
                                    <div className="text-brand-beige text-sm">Awards</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
