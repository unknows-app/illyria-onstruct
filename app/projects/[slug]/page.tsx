import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, MapPin, Ruler, Check, Quote } from 'lucide-react';
import { Metadata } from 'next';
import Header from '@/app/components/Header';
import SiteFooter from '@/app/components/SiteFooter';
import AnimatedSection from '@/app/components/AnimatedSection';
import StaggerContainer, { StaggerItem } from '@/app/components/StaggerContainer';
import { getProjectBySlug, getRelatedProjects, projects } from '@/app/data/projects';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} - ${project.category} Project`,
        description: project.shortDescription,
        openGraph: {
            title: project.title,
            description: project.fullDescription,
            type: 'website',
        },
    };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    const relatedProjects = getRelatedProjects(project.slug, project.category);

    return (
        <div className="min-h-screen bg-brand-beige">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-brand hover:text-brand-gold transition-colors mb-8 group"
                            >
                                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                                Back to Projects
                            </Link>

                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-brand/10 rounded-full text-sm font-medium text-brand mb-4">
                                        {project.category}
                                    </span>
                                    <h1 className="text-4xl sm:text-5xl font-bold text-brand mb-6">
                                        {project.title}
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        {project.fullDescription}
                                    </p>

                                    {/* Project Info Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-brand-gold mt-1" />
                                            <div>
                                                <div className="text-sm text-gray-500">Location</div>
                                                <div className="font-medium text-brand">{project.location}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Ruler className="h-5 w-5 text-brand-gold mt-1" />
                                            <div>
                                                <div className="text-sm text-gray-500">Area</div>
                                                <div className="font-medium text-brand">{project.area}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Calendar className="h-5 w-5 text-brand-gold mt-1" />
                                            <div>
                                                <div className="text-sm text-gray-500">Year</div>
                                                <div className="font-medium text-brand">{project.year}</div>
                                            </div>
                                        </div>
                                        {project.duration && (
                                            <div className="flex items-start gap-3">
                                                <Calendar className="h-5 w-5 text-brand-gold mt-1" />
                                                <div>
                                                    <div className="text-sm text-gray-500">Duration</div>
                                                    <div className="font-medium text-brand">{project.duration}</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Main Project Image */}
                                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Challenge & Solution */}
                {(project.challenge || project.solution) && (
                    <section className="py-16 bg-brand-beige">
                        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-12">
                                {project.challenge && (
                                    <AnimatedSection>
                                        <h2 className="text-2xl font-bold text-brand mb-4">The Challenge</h2>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            {project.challenge}
                                        </p>
                                    </AnimatedSection>
                                )}
                                {project.solution && (
                                    <AnimatedSection delay={0.2}>
                                        <h2 className="text-2xl font-bold text-brand mb-4">Our Solution</h2>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            {project.solution}
                                        </p>
                                    </AnimatedSection>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Project Gallery */}
                <section className="py-16 bg-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="mb-12">
                            <h2 className="text-3xl font-bold text-brand mb-4">Project Gallery</h2>
                            <p className="text-xl text-gray-600">
                                Explore the details and craftsmanship of this project
                            </p>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.images.map((image, index) => (
                                <StaggerItem key={index}>
                                    <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                                        <Image
                                            src={image}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Project Details */}
                <section className="py-16 bg-brand-beige">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Services */}
                            <AnimatedSection>
                                <h3 className="text-xl font-bold text-brand mb-6">Services Provided</h3>
                                <ul className="space-y-3">
                                    {project.services.map((service, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                                            <span className="text-gray-700">{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>

                            {/* Features */}
                            <AnimatedSection delay={0.1}>
                                <h3 className="text-xl font-bold text-brand mb-6">Key Features</h3>
                                <ul className="space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>

                            {/* Materials */}
                            {project.materials && (
                                <AnimatedSection delay={0.2}>
                                    <h3 className="text-xl font-bold text-brand mb-6">Materials Used</h3>
                                    <ul className="space-y-3">
                                        {project.materials.map((material, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                                                <span className="text-gray-700">{material}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AnimatedSection>
                            )}
                        </div>
                    </div>
                </section>

                {/* Results */}
                {project.results && project.results.length > 0 && (
                    <section className="py-16 bg-white">
                        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                            <AnimatedSection className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-brand mb-4">Project Results</h2>
                                <p className="text-xl text-gray-600">
                                    Measurable outcomes that exceeded expectations
                                </p>
                            </AnimatedSection>

                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {project.results.map((result, index) => (
                                    <StaggerItem key={index}>
                                        <div className="bg-brand-beige rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all">
                                            <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Check className="h-6 w-6 text-brand-gold" />
                                            </div>
                                            <p className="text-gray-700 font-medium">{result}</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </section>
                )}

                {/* Client Testimonial */}
                {project.testimonial && (
                    <section className="py-16 bg-brand">
                        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                            <AnimatedSection className="max-w-3xl mx-auto text-center text-white">
                                <Quote className="h-12 w-12 mx-auto mb-6 text-brand-gold" />
                                <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
                                    "{project.testimonial.text}"
                                </blockquote>
                                <div>
                                    <div className="font-semibold text-lg">{project.testimonial.author}</div>
                                    <div className="text-brand-beige">{project.testimonial.role}</div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </section>
                )}

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <section className="py-24 bg-brand-beige">
                        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                            <AnimatedSection className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-brand mb-4">Related Projects</h2>
                                <p className="text-xl text-gray-600">
                                    More {project.category.toLowerCase()} projects you might like
                                </p>
                            </AnimatedSection>

                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedProjects.map((relatedProject) => (
                                    <StaggerItem key={relatedProject.slug}>
                                        <Link
                                            href={`/projects/${relatedProject.slug}`}
                                            className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                                        >
                                            <div className="relative aspect-4/3 overflow-hidden">
                                                <Image
                                                    src={relatedProject.coverImage}
                                                    alt={relatedProject.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-lg font-semibold text-brand group-hover:text-brand-gold transition-colors mb-2">
                                                    {relatedProject.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {relatedProject.shortDescription}
                                                </p>
                                            </div>
                                        </Link>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-16 bg-brand-gold">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold text-brand mb-4">
                                Have a Project in Mind?
                            </h2>
                            <p className="text-xl text-brand-soft mb-8">
                                Let's create something amazing together
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-lg font-semibold hover:bg-brand-soft transition-all shadow-lg hover:shadow-xl"
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
