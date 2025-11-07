'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import StaggerContainer, { StaggerItem } from '../StaggerContainer';
import { projects } from '@/app/data/projects';

// Get the first 4 projects for the homepage
const featuredProjects = projects.slice(0, 4);

export default function Projects() {
    return (
        <section className="py-24 bg-brand-beige">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-2 bg-brand/10 rounded-full text-sm font-medium text-brand mb-4">
                            Our Portfolio
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-brand mb-4">
                            Recent Projects
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Explore our latest interior design work
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-lg font-medium hover:bg-brand-soft transition-colors group mt-6 md:mt-0"
                        >
                            View All Projects
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredProjects.map((project) => (
                        <StaggerItem key={project.slug}>
                            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* Image */}
                                <div className="relative aspect-4/3 overflow-hidden">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/60 transition-all duration-500" />

                                    {/* View Project Button - Appears on Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="px-6 py-3 bg-white text-brand rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0"
                                        >
                                            View Project
                                        </Link>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 bg-brand/10 rounded-full text-xs font-medium text-brand">
                                            {project.category}
                                        </span>
                                        <span className="text-sm text-gray-500">{project.location}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-brand mb-2 group-hover:text-brand-gold transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {project.shortDescription}
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
