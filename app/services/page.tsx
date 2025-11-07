import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building2, Ruler, Hammer, Sofa, Palette, ArrowRight, Check } from 'lucide-react';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import AnimatedSection from '../components/AnimatedSection';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';

export const metadata: Metadata = {
    title: 'Our Services - Interior Design Solutions',
    description: 'Comprehensive interior design services including residential design, commercial spaces, renovations, and more. Professional solutions tailored to your needs.',
};

const services = [
    {
        id: 'residential',
        icon: Home,
        title: 'Residential Design',
        tagline: 'Transform Your Living Space',
        description: 'Create a home that reflects your personality and enhances your daily living experience with our comprehensive residential design services.',
        features: [
            'Complete home design and renovation',
            'Kitchen and bathroom design',
            'Custom furniture selection',
            'Color schemes and material selection',
            'Lighting design',
            'Space optimization',
        ],
        process: [
            'Initial consultation and vision assessment',
            'Concept development and mood boards',
            '3D visualization and renderings',
            'Material selection and sourcing',
            'Project management and installation',
            'Final styling and handover',
        ],
    },
    {
        id: 'commercial',
        icon: Building2,
        title: 'Commercial Spaces',
        tagline: 'Elevate Your Business Environment',
        description: 'Professional office and retail spaces designed to enhance productivity, brand identity, and customer experience.',
        features: [
            'Office space planning',
            'Retail store design',
            'Restaurant and hospitality interiors',
            'Corporate identity integration',
            'Ergonomic workspace solutions',
            'Compliance with building codes',
        ],
        process: [
            'Business needs analysis',
            'Brand integration planning',
            'Space planning and layouts',
            'Technical drawings and specifications',
            'Vendor coordination',
            'Project supervision',
        ],
    },
    {
        id: 'planning',
        icon: Ruler,
        title: 'Space Planning',
        tagline: 'Maximize Your Space Potential',
        description: 'Strategic layout design to optimize functionality, flow, and make the most of every square meter.',
        features: [
            'Floor plan optimization',
            'Traffic flow analysis',
            'Furniture layout planning',
            'Storage solutions',
            'Multi-functional spaces',
            'Accessibility considerations',
        ],
        process: [
            'Site measurement and analysis',
            'Needs assessment',
            'Multiple layout options',
            'Client review and refinement',
            'Final floor plans',
            'Implementation guidance',
        ],
    },
    {
        id: 'renovation',
        icon: Hammer,
        title: 'Renovation',
        tagline: 'Breathe New Life Into Your Space',
        description: 'Complete renovation services from concept to completion with quality craftsmanship and attention to detail.',
        features: [
            'Structural modifications',
            'Complete remodeling',
            'Historic restoration',
            'Modern updates',
            'Contractor coordination',
            'Budget management',
        ],
        process: [
            'Property assessment',
            'Renovation scope definition',
            'Design and planning',
            'Permits and approvals',
            'Construction management',
            'Quality control and completion',
        ],
    },
    {
        id: 'furniture',
        icon: Sofa,
        title: 'Furniture Selection',
        tagline: 'Curated Pieces for Your Space',
        description: 'Expert furniture and décor selection that complements your design vision and lifestyle needs.',
        features: [
            'Custom furniture design',
            'Sourcing from top brands',
            'Vintage and antique pieces',
            'Budget-conscious options',
            'Fabric and finish selection',
            'Delivery coordination',
        ],
        process: [
            'Style preference assessment',
            'Budget discussion',
            'Sourcing and proposals',
            'Order management',
            'Delivery scheduling',
            'Installation and styling',
        ],
    },
    {
        id: 'color',
        icon: Palette,
        title: 'Color Consultation',
        tagline: 'Perfect Palette for Your Vision',
        description: 'Professional color guidance to create the ideal atmosphere and aesthetic for your space.',
        features: [
            'Color psychology application',
            'Palette development',
            'Paint selection',
            'Material coordination',
            'Lighting considerations',
            'Sample testing',
        ],
        process: [
            'Space evaluation',
            'Mood and style discussion',
            'Color scheme proposals',
            'Sample review',
            'Final palette selection',
            'Implementation guidance',
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-brand-beige">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center max-w-3xl mx-auto">
                            <span className="inline-block px-4 py-2 bg-brand/10 rounded-full text-sm font-medium text-brand mb-4">
                                Our Services
                            </span>
                            <h1 className="text-5xl sm:text-6xl font-bold text-brand mb-6">
                                Comprehensive Interior Design Solutions
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                From concept to completion, we provide full-service interior design tailored to your lifestyle, vision, and budget.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 bg-brand-beige">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'
                                        }`}
                                >
                                    {/* Content */}
                                    <AnimatedSection
                                        direction={isEven ? 'left' : 'right'}
                                        className={isEven ? '' : 'lg:col-start-2'}
                                    >
                                        <div className="w-14 h-14 bg-brand/20 rounded-xl flex items-center justify-center mb-6">
                                            <Icon className="h-7 w-7 text-brand" />
                                        </div>

                                        <h2 className="text-4xl font-bold text-brand mb-3">
                                            {service.title}
                                        </h2>
                                        <p className="text-brand font-medium text-lg mb-4">
                                            {service.tagline}
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="mb-8">
                                            <h3 className="font-semibold text-brand mb-4">What's Included:</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {service.features.map((feature) => (
                                                    <li key={feature} className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                                                        <span className="text-gray-700">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-lg font-medium hover:bg-brand-soft transition-colors group"
                                        >
                                            Get Started
                                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </AnimatedSection>

                                    {/* Process Card */}
                                    <AnimatedSection
                                        direction={isEven ? 'right' : 'left'}
                                        delay={0.2}
                                        className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                                    >
                                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                                            <h3 className="text-2xl font-semibold text-brand mb-6">
                                                Our Process
                                            </h3>
                                            <ol className="space-y-4">
                                                {service.process.map((step, i) => (
                                                    <li key={step} className="flex gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 font-semibold text-brand">
                                                            {i + 1}
                                                        </div>
                                                        <span className="text-gray-700 pt-1">{step}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    </AnimatedSection>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-brand text-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <AnimatedSection>
                            <h2 className="text-4xl font-bold mb-6">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-xl text-brand-beige mb-8 max-w-2xl mx-auto">
                                Let's discuss your vision and create a customized plan that brings your dream space to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand rounded-lg font-semibold hover:bg-brand-beige transition-all shadow-lg hover:shadow-xl"
                                >
                                    Schedule Consultation
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-soft text-white rounded-lg font-semibold hover:bg-brand-soft/90 transition-all border-2 border-white/20"
                                >
                                    View Our Work
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}
