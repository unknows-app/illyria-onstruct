'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import AnimatedSection from '../components/AnimatedSection';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Living Rooms', 'Kitchens', 'Bedrooms', 'Bathrooms', 'Offices'];

const images = [
    { id: 1, category: 'Living Rooms', title: 'Modern Living Space', location: 'Lviv', src: '/images/gallery/spacejoy-tAuc4H7Qf9s-unsplash.jpg' },
    { id: 2, category: 'Kitchens', title: 'Contemporary Kitchen', location: 'Kyiv', src: '/images/gallery/kam-idris-kyt0PkBSCNQ-unsplash.jpg' },
    { id: 3, category: 'Bedrooms', title: 'Master Suite', location: 'Lviv', src: '/images/gallery/iwood-R5v8Xtc0ecg-unsplash.jpg' },
    { id: 4, category: 'Bathrooms', title: 'Luxury Bathroom', location: 'Lviv', src: '/images/gallery/sanibell-bv-530lZQXMKGw-unsplash.jpg' },
    { id: 5, category: 'Offices', title: 'Executive Office', location: 'Kyiv', src: '/images/gallery/lotus-design-n-print-oCw5_evbWyI-unsplash.jpg' },
    { id: 6, category: 'Living Rooms', title: 'Cozy Lounge', location: 'Lviv', src: '/images/gallery/virender-singh-hE0nmTffKtM-unsplash.jpg' },
    { id: 7, category: 'Kitchens', title: 'Minimalist Kitchen', location: 'Lviv', src: '/images/gallery/jason-wang-NxAwryAbtIw-unsplash.jpg' },
    { id: 8, category: 'Bedrooms', title: 'Serene Bedroom', location: 'Kyiv', src: '/images/gallery/kam-idris-vqMQN9zImG4-unsplash.jpg' },
    { id: 9, category: 'Bathrooms', title: 'Spa Bathroom', location: 'Lviv', src: '/images/gallery/billy-jo-catbagan-PbS9rXhsYIU-unsplash.jpg' },
];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

    const filteredImages = selectedCategory === 'All'
        ? images
        : images.filter(img => img.category === selectedCategory);

    return (
        <div className="min-h-screen bg-brand-beige">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-16 bg-white">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center max-w-3xl mx-auto">
                            <span className="inline-block px-4 py-2 bg-brand/10 rounded-full text-sm font-medium text-brand mb-4">
                                Gallery
                            </span>
                            <h1 className="text-5xl sm:text-6xl font-bold text-brand mb-6">
                                Design Inspiration
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Browse through our collection of stunning interior spaces. Each image showcases our commitment to excellence in design.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="py-8 bg-brand-beige sticky top-20 z-40 border-b border-brand/10">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex gap-2 overflow-x-auto pb-2">
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
                </section>

                {/* Gallery Grid */}
                <section className="py-16 bg-brand-beige">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/60 transition-all duration-300" />

                                    {/* Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                                        <p className="text-white/80 text-xs">{image.location}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="max-w-5xl w-full bg-brand-beige rounded-2xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-brand mb-2">
                                        {selectedImage.title}
                                    </h2>
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <span className="px-3 py-1 bg-brand/10 rounded-full text-sm">
                                            {selectedImage.category}
                                        </span>
                                        <span>{selectedImage.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
            <SiteFooter />
        </div>
    );
}
