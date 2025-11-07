'use client';

import { Home, Building2, Ruler, Hammer, Sofa, Palette } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import StaggerContainer, { StaggerItem } from '../StaggerContainer';

const services = [
    {
        icon: Home,
        title: 'Residential Design',
        description: 'Custom home interiors that reflect your personality and enhance your daily living experience.',
        link: '/services#residential',
    },
    {
        icon: Building2,
        title: 'Commercial Spaces',
        description: 'Professional office and retail spaces that enhance productivity and brand identity.',
        link: '/services#commercial',
    },
    {
        icon: Ruler,
        title: 'Space Planning',
        description: 'Strategic layout design to maximize functionality and flow in every room.',
        link: '/services#planning',
    },
    {
        icon: Palette,
        title: 'Color Consultation',
        description: 'Expert guidance on color schemes that create the perfect ambiance for your space.',
        link: '/services#color',
    },
    {
        icon: Sofa,
        title: 'Furniture Selection',
        description: 'Curated furniture and décor selections that complement your design vision.',
        link: '/services#furniture',
    },
    {
        icon: Hammer,
        title: 'Renovation',
        description: 'Complete renovation services from concept to completion with quality craftsmanship.',
        link: '/services#renovation',
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-brand/10 rounded-full text-sm font-medium text-brand mb-4">
                        What We Offer
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-brand mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive interior design solutions tailored to your lifestyle and aesthetic preferences
                    </p>
                </AnimatedSection>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <StaggerItem key={service.title}>
                                <div className="group relative bg-brand-beige rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand/10 h-full">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                                        <Icon className="h-7 w-7 text-brand group-hover:text-white transition-colors" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-brand-soft transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <a
                                        href={service.link}
                                        className="inline-flex items-center text-(--color-brand-gold) font-medium group-hover:gap-2 transition-all"
                                    >
                                        Learn More
                                        <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">
                                            →
                                        </span>
                                    </a>

                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-brand-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
