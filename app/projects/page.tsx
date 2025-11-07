'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Filter } from 'lucide-react';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import AnimatedSection from '../components/AnimatedSection';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';
import { projects } from '../data/projects';

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Renovation'];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-brand-beige">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center max-w-3xl mx-auto">
                            <span className="inline-block px-4 py-2 bg-brand/10 rounded-full text-sm font-medium text-brand mb-4">
                                Our Portfolio
                            </span>
                            <h1 className="text-5xl sm:text-6xl font-bold text-brand mb-6">
                                Featured Projects
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Explore our portfolio of beautifully designed spaces across Ukraine. Each project tells a unique story of vision, creativity, and craftsmanship.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="py-8 bg-brand-beige sticky top-20 z-40 border-b border-brand/10">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-4 overflow-x-auto pb-2">
                            <div className="flex items-center gap-2 text-brand shrink-0">
                                <Filter className="h-5 w-5" />
                                <span className="font-medium">Filter:</span>
                            </div>
                            <div className="flex gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all shrink-0 ${selectedCategory === category
                                            ? 'bg-brand text-white shadow-md'
                                            : 'bg-white text-gray-700 hover:bg-brand/10 hover:text-brand'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-16 bg-brand-beige">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={selectedCategory}>
                            {filteredProjects.map((project) => (
                                <StaggerItem key={project.slug}>
                                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={project.coverImage}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/60 transition-all duration-500" />

                                            {/* View Project Button - Appears on Hover */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="px-6 py-3 bg-white text-brand rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0"
                                                >
                                                    View Details
                                                </Link>
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-brand">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-brand mb-2 group-hover:text-brand-gold transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4">
                                                {project.shortDescription}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                                                <span>{project.location}</span>
                                                <span>{project.area}</span>
                                                <span>{project.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-xl text-gray-600">
                                    No projects found in this category.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-brand text-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <AnimatedSection>
                            <h2 className="text-4xl font-bold mb-6">
                                Want Your Project Featured Here?
                            </h2>
                            <p className="text-xl text-brand-beige mb-8 max-w-2xl mx-auto">
                                Let's collaborate to create something extraordinary that reflects your vision and exceeds expectations.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand rounded-lg font-semibold hover:bg-brand-beige transition-all shadow-lg hover:shadow-xl"
                            >
                                Start Your Project
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}
