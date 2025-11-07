'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import AnimatedSection from '../components/AnimatedSection';
import StaggerContainer, { StaggerItem } from '../components/StaggerContainer';

const contactInfo = [
    {
        icon: Phone,
        title: 'Phone',
        details: '+380 (93) 123-4567',
        link: 'tel:+380931234567',
    },
    {
        icon: Mail,
        title: 'Email',
        details: 'hello@illyriaconstruct.com',
        link: 'mailto:hello@illyriaconstruct.com',
    },
    {
        icon: MapPin,
        title: 'Address',
        details: '14/5 Shevchenka St, Lviv, Ukraine',
        link: 'https://maps.google.com',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        details: 'Mon-Fri: 9:00 AM - 6:00 PM',
        link: null,
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            projectType: '',
            budget: '',
            message: '',
        });

        setTimeout(() => setStatus('idle'), 3000);
    };

    type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

    const handleChange = (e: React.ChangeEvent<FormElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="min-h-screen bg-brand-beige">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-brand text-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center max-w-3xl mx-auto">
                            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                                Let's Create Something Amazing Together
                            </h1>
                            <p className="text-xl text-brand-beige leading-relaxed">
                                Ready to transform your space? Get in touch with us to discuss your project and receive a personalized consultation.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-16 bg-brand-beige">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactInfo.map((info) => {
                                const Icon = info.icon;
                                const content = (
                                    <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow text-center h-full">
                                        <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                            <Icon className="h-6 w-6 text-brand" />
                                        </div>
                                        <h3 className="font-semibold text-brand mb-2">{info.title}</h3>
                                        <p className="text-gray-600 text-sm">{info.details}</p>
                                    </div>
                                );

                                return (
                                    <StaggerItem key={info.title}>
                                        {info.link ? (
                                            <a href={info.link} className="block h-full">
                                                {content}
                                            </a>
                                        ) : (
                                            content
                                        )}
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Contact Form & Map */}
                <section className="py-24 bg-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Form */}
                            <AnimatedSection>
                                <h2 className="text-3xl font-bold text-brand mb-6">
                                    Send Us a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-brand mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-brand mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-brand mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors"
                                                placeholder="+380 XX XXX XXXX"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="projectType" className="block text-sm font-medium text-brand mb-2">
                                                Project Type *
                                            </label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors"
                                            >
                                                <option value="">Select type</option>
                                                <option value="residential">Residential Design</option>
                                                <option value="commercial">Commercial Space</option>
                                                <option value="renovation">Renovation</option>
                                                <option value="consultation">Consultation</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-medium text-brand mb-2">
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors"
                                            >
                                                <option value="">Select range</option>
                                                <option value="under-10k">Under $10,000</option>
                                                <option value="10k-25k">$10,000 - $25,000</option>
                                                <option value="25k-50k">$25,000 - $50,000</option>
                                                <option value="50k-plus">$50,000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-brand mb-2">
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us about your project, your vision, and any specific requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full px-8 py-4 bg-brand text-white rounded-lg font-semibold hover:bg-brand-soft transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 group"
                                    >
                                        {status === 'loading' ? (
                                            'Sending...'
                                        ) : status === 'success' ? (
                                            'Message Sent!'
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    {status === 'success' && (
                                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                                            Thank you! We'll get back to you within 24 hours.
                                        </div>
                                    )}
                                </form>
                            </AnimatedSection>

                            {/* Map & Additional Info */}
                            <AnimatedSection delay={0.2}>
                                <h2 className="text-3xl font-bold text-brand mb-6">
                                    Visit Our Studio
                                </h2>

                                {/* Google Maps Embed */}
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0846879984733!2d24.029174576916285!3d49.84127923171917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2sTaras%20Shevchenko%20Monument!5e0!3m2!1sen!2sua!4v1699294400000!5m2!1sen!2sua"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Illyria Construct Studio Location - Lviv, Ukraine"
                                    />
                                </div>

                                <div className="bg-brand-beige rounded-xl p-6 space-y-4">
                                    <h3 className="font-semibold text-brand text-lg mb-4">
                                        What to Expect
                                    </h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex gap-3">
                                            <span className="text-brand-gold mt-1">✓</span>
                                            <span>Free initial consultation to discuss your project</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-brand-gold mt-1">✓</span>
                                            <span>Detailed project proposal within 3-5 business days</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-brand-gold mt-1">✓</span>
                                            <span>Transparent pricing with no hidden fees</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-brand-gold mt-1">✓</span>
                                            <span>Regular updates throughout the project</span>
                                        </li>
                                    </ul>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}
