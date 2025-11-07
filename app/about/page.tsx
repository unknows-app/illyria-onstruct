import { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import AnimatedSection from '../components/AnimatedSection';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';
import { Target, Users, Award, Heart } from 'lucide-react';
import { teamMembers } from '../data/team';

export const metadata: Metadata = {
    title: 'About Us - Our Story & Values',
    description: 'Learn about Illyria Construct\'s 15+ years of creating exceptional interior spaces in Lviv, Ukraine. Meet our team and discover our design philosophy.',
};

const values = [
    {
        icon: Target,
        title: 'Vision',
        description: 'To become the leading interior design studio in Ukraine, setting new standards for creativity, quality, and client satisfaction.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'We believe in the power of collaboration, working closely with our clients to bring their vision to life.',
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'We are committed to delivering exceptional quality in every project, no matter the size or complexity.',
    },
    {
        icon: Heart,
        title: 'Passion',
        description: 'Our passion for design drives us to create spaces that inspire, comfort, and delight.',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-brand-beige">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center max-w-3xl mx-auto">
                            <span className="inline-block px-4 py-2 bg-brand/10 rounded-full text-sm font-medium text-brand mb-4">
                                About Illyria Construct
                            </span>
                            <h1 className="text-5xl sm:text-6xl font-bold text-brand mb-6">
                                Creating Spaces That Tell Your Story
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Since 2008, we've been transforming houses into homes and spaces into experiences across Ukraine. Our approach combines timeless design principles with contemporary aesthetics.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24 bg-brand-beige">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <AnimatedSection>
                                <h2 className="text-4xl font-bold text-brand mb-6">Our Story</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Founded in 2008 by Oksana Shevchenko, Illyria Construct began with a simple yet powerful vision: to create interior spaces that not only look beautiful but also enhance the lives of those who inhabit them.
                                    </p>
                                    <p>
                                        What started as a small studio in Lviv has grown into one of Ukraine's most respected interior design firms. We've completed over 250 projects, ranging from intimate residential renovations to large-scale commercial developments.
                                    </p>
                                    <p>
                                        Our success is built on a foundation of creativity, craftsmanship, and unwavering commitment to our clients. Every project is an opportunity to push boundaries, explore new ideas, and create something truly exceptional.
                                    </p>
                                    <p>
                                        Today, our team of passionate designers, architects, and project managers continues to redefine what's possible in interior design, one project at a time.
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2} className="relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/hero.jpg"
                                        alt="Illyria Construct Design Studio"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-brand mb-4">Our Values</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The principles that guide every decision we make
                            </p>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value) => {
                                const Icon = value.icon;
                                return (
                                    <StaggerItem key={value.title}>
                                        <div className="text-center p-6">
                                            <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <Icon className="h-8 w-8 text-brand" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-brand mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 bg-brand-beige">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-brand mb-4">Meet Our Team</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Talented designers dedicated to bringing your vision to life
                            </p>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member) => (
                                <StaggerItem key={member.id}>
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="aspect-square relative overflow-hidden">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold text-brand mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-brand-gold text-sm mb-3">{member.role}</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-24 bg-brand text-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <StaggerItem>
                                <div className="text-5xl font-bold mb-2">250+</div>
                                <div className="text-brand-beige">Projects Completed</div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="text-5xl font-bold mb-2">15+</div>
                                <div className="text-brand-beige">Years of Experience</div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="text-5xl font-bold mb-2">98%</div>
                                <div className="text-brand-beige">Client Satisfaction</div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="text-5xl font-bold mb-2">12</div>
                                <div className="text-brand-beige">Design Awards</div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}
