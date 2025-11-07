'use client';

import { Star } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import StaggerContainer, { StaggerItem } from '../StaggerContainer';

const testimonials = [
    {
        name: 'Olena Kovalenko',
        role: 'Homeowner',
        location: 'Lviv',
        image: '/testimonials/olena.jpg',
        rating: 5,
        text: 'Illyria Construct transformed our apartment into a dream home. Their attention to detail and understanding of our vision was exceptional. Highly recommended!',
    },
    {
        name: 'Dmytro Petrov',
        role: 'CEO, Tech Company',
        location: 'Kyiv',
        image: '/testimonials/dmytro.jpg',
        rating: 5,
        text: 'Professional, creative, and reliable. The team redesigned our office space and improved both aesthetics and employee productivity significantly.',
    },
    {
        name: 'Kateryna Bondar',
        role: 'Restaurant Owner',
        location: 'Lviv',
        image: '/testimonials/kateryna.jpg',
        rating: 5,
        text: 'From concept to completion, the team was exceptional. They listened to our needs and delivered a space that perfectly reflects our brand. Highly professional!',
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-brand/10 rounded-full text-sm font-medium text-brand mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-brand mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Trusted by homeowners and businesses across Ukraine
                    </p>
                </AnimatedSection>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <StaggerItem key={testimonial.name}>
                            <div className="bg-brand-beige rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 fill-brand-gold text-brand-gold"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 leading-relaxed mb-6 grow italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-4 border-t border-brand/10">
                                    <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-brand font-semibold">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-brand">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {testimonial.role} • {testimonial.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
