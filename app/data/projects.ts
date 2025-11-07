// Project data with comprehensive information
export interface Project {
    id: string;
    slug: string;
    title: string;
    category: 'Residential' | 'Commercial' | 'Hospitality' | 'Renovation';
    location: string;
    area: string;
    year: string;
    client?: string;
    duration?: string;
    budget?: string;
    coverImage: string;
    images: string[];
    shortDescription: string;
    fullDescription: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    services: string[];
    materials?: string[];
    features: string[];
    testimonial?: {
        text: string;
        author: string;
        role: string;
    };
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'modern-apartment-lviv',
        title: 'Modern Apartment Lviv',
        category: 'Residential',
        location: 'Lviv, Ukraine',
        area: '85 sqm',
        year: '2024',
        client: 'Private Client',
        duration: '3 months',
        budget: '$35,000',
        coverImage: '/images/projects/spacejoy-tAuc4H7Qf9s-unsplash.jpg',
        images: [
            '/images/projects/spacejoy-tAuc4H7Qf9s-unsplash.jpg',
            '/images/projects/iwood-R5v8Xtc0ecg-unsplash.jpg',
            '/images/projects/jason-wang-NxAwryAbtIw-unsplash.jpg',
            '/images/projects/kam-idris-vqMQN9zImG4-unsplash.jpg',
            '/images/projects/virender-singh-hE0nmTffKtM-unsplash.jpg',
        ],
        shortDescription: 'Contemporary living space with clean lines and luxurious materials',
        fullDescription: 'This stunning 85 sqm apartment transformation showcases our expertise in creating modern, functional living spaces. Located in the heart of Lviv, the project features an open-plan layout that maximizes natural light and creates a seamless flow between living areas. We incorporated high-end materials, custom-built furniture, and a sophisticated neutral palette with warm accents.',
        challenge: 'The existing layout was compartmentalized with small, dark rooms that didn\'t suit the client\'s modern lifestyle.',
        solution: 'We removed non-structural walls to create an open-plan living area, installed floor-to-ceiling windows, and designed custom storage solutions to maximize space efficiency.',
        results: [
            'Increased natural light by 60%',
            'Created 20% more usable living space',
            'Reduced energy costs with smart home integration',
            'Achieved a timeless design that will age gracefully',
        ],
        services: ['Space Planning', 'Interior Design', 'Custom Furniture', 'Lighting Design'],
        materials: ['Oak Wood Flooring', 'Marble Countertops', 'Italian Tiles', 'Designer Lighting Fixtures'],
        features: [
            'Open-plan living and kitchen area',
            'Custom-built wardrobe systems',
            'Smart home automation',
            'Underfloor heating',
            'Floor-to-ceiling windows',
            'Designer lighting throughout',
        ],
        testimonial: {
            text: 'Illyria Construct transformed our apartment beyond our wildest dreams. Their attention to detail and understanding of our needs was exceptional.',
            author: 'Olena Kovalenko',
            role: 'Homeowner',
        },
    },
    {
        id: '2',
        slug: 'tech-startup-office',
        title: 'Tech Startup Office',
        category: 'Commercial',
        location: 'Kyiv, Ukraine',
        area: '250 sqm',
        year: '2024',
        client: 'Tech Innovators Ltd.',
        duration: '2 months',
        budget: '$75,000',
        coverImage: '/images/projects/kam-idris-kyt0PkBSCNQ-unsplash.jpg',
        images: [
            '/images/projects/kam-idris-kyt0PkBSCNQ-unsplash.jpg',
            '/images/projects/lotus-design-n-print-oCw5_evbWyI-unsplash.jpg',
            '/images/projects/sanibell-bv-530lZQXMKGw-unsplash.jpg',
            '/images/projects/billy-jo-catbagan-PbS9rXhsYIU-unsplash.jpg',
        ],
        shortDescription: 'Innovative workspace designed for creativity and collaboration',
        fullDescription: 'A dynamic office space designed to foster creativity, collaboration, and productivity. This tech startup headquarters features flexible workspaces, creative meeting areas, and a vibrant color scheme that reflects the company\'s innovative culture. We incorporated biophilic design elements, acoustic solutions, and ergonomic furniture to create an inspiring work environment.',
        challenge: 'Create a workspace that promotes collaboration while providing quiet zones for focused work, all within a limited budget.',
        solution: 'We designed flexible zones with movable partitions, acoustic pods for private calls, and an open central area with modular furniture that can be reconfigured for different team sizes.',
        results: [
            'Increased employee satisfaction by 45%',
            'Improved acoustic performance by 40%',
            'Created 15 distinct work zones in open plan',
            'Reduced setup time for client meetings by 60%',
        ],
        services: ['Space Planning', 'Interior Design', 'Brand Integration', 'Furniture Selection'],
        materials: ['Industrial Concrete Finish', 'Acoustic Panels', 'Modular Furniture', 'LED Lighting'],
        features: [
            'Flexible hot-desking zones',
            'Private acoustic pods',
            'Collaboration areas with whiteboards',
            'Recreational break-out space',
            'High-speed charging stations',
            'Green wall installations',
        ],
        testimonial: {
            text: 'The new office has transformed how our team works. Productivity is up, and everyone loves coming to work.',
            author: 'Dmytro Petrov',
            role: 'CEO, Tech Innovators',
        },
    },
    {
        id: '3',
        slug: 'luxury-villa-renovation',
        title: 'Luxury Villa Renovation',
        category: 'Renovation',
        location: 'Lviv, Ukraine',
        area: '320 sqm',
        year: '2023',
        client: 'Private Client',
        duration: '6 months',
        budget: '$120,000',
        coverImage: '/images/projects/virender-singh-hE0nmTffKtM-unsplash.jpg',
        images: [
            '/images/projects/virender-singh-hE0nmTffKtM-unsplash.jpg',
            '/images/projects/jason-wang-NxAwryAbtIw-unsplash.jpg',
            '/images/projects/spacejoy-tAuc4H7Qf9s-unsplash.jpg',
            '/images/projects/iwood-R5v8Xtc0ecg-unsplash.jpg',
            '/images/projects/kam-idris-vqMQN9zImG4-unsplash.jpg',
            '/images/projects/sanibell-bv-530lZQXMKGw-unsplash.jpg',
        ],
        shortDescription: 'Complete transformation of a classic villa into modern elegance',
        fullDescription: 'This comprehensive renovation project breathed new life into a 1960s villa while preserving its architectural character. We modernized all systems, redesigned the layout for contemporary living, and created luxurious interiors that blend classic elegance with modern comfort. The project included structural modifications, complete interior redesign, and landscaping.',
        challenge: 'Modernize outdated systems and layout while preserving the villa\'s historic character and charm.',
        solution: 'We carefully restored original architectural features while introducing contemporary elements through materials and furnishings. All systems were upgraded to modern standards with minimal visual impact.',
        results: [
            'Preserved 80% of original architectural features',
            'Improved energy efficiency by 55%',
            'Increased property value by 40%',
            'Created seamless indoor-outdoor living',
        ],
        services: ['Complete Renovation', 'Interior Design', 'Structural Modifications', 'Landscaping'],
        materials: ['Natural Stone', 'Hardwood Flooring', 'Designer Fabrics', 'Custom Millwork'],
        features: [
            'Restored original moldings and details',
            'Modern open-plan kitchen',
            'Master suite with spa bathroom',
            'Wine cellar and entertainment room',
            'Landscaped garden with terrace',
            'Smart home integration',
        ],
    },
    {
        id: '4',
        slug: 'fine-dining-restaurant',
        title: 'Fine Dining Restaurant',
        category: 'Hospitality',
        location: 'Lviv, Ukraine',
        area: '180 sqm',
        year: '2023',
        client: 'Gourmet Dining Group',
        duration: '4 months',
        budget: '$90,000',
        coverImage: '/images/projects/billy-jo-catbagan-PbS9rXhsYIU-unsplash.jpg',
        images: [
            '/images/projects/billy-jo-catbagan-PbS9rXhsYIU-unsplash.jpg',
            '/images/projects/lotus-design-n-print-oCw5_evbWyI-unsplash.jpg',
            '/images/projects/kam-idris-kyt0PkBSCNQ-unsplash.jpg',
            '/images/projects/sanibell-bv-530lZQXMKGw-unsplash.jpg',
        ],
        shortDescription: 'Sophisticated atmosphere with attention to every detail',
        fullDescription: 'An intimate fine dining restaurant that combines elegance with comfort. The design features rich materials, dramatic lighting, and carefully curated artwork to create an unforgettable dining experience. We focused on acoustics, lighting design, and spatial flow to ensure both intimacy and operational efficiency.',
        challenge: 'Create an upscale atmosphere while maintaining practical functionality for restaurant operations.',
        solution: 'We designed flexible lighting zones, acoustic treatments for sound control, and a kitchen layout that supports efficient service while maintaining the elegant aesthetic.',
        results: [
            'Increased seating capacity by 25%',
            'Improved acoustic comfort significantly',
            'Reduced service time by 30%',
            'Created Instagram-worthy ambiance',
        ],
        services: ['Interior Design', 'Lighting Design', 'Furniture Selection', 'Brand Integration'],
        materials: ['Velvet Upholstery', 'Brass Fixtures', 'Marble Tables', 'Custom Lighting'],
        features: [
            'Dramatic chandelier installation',
            'Private dining alcoves',
            'Open kitchen with chef\'s table',
            'Wine display wall',
            'Bespoke furniture throughout',
            'Integrated sound system',
        ],
        testimonial: {
            text: 'The design perfectly captures our vision. Our guests are constantly complimenting the ambiance.',
            author: 'Kateryna Bondar',
            role: 'Restaurant Owner',
        },
    },
    {
        id: '5',
        slug: 'boutique-hotel-lobby',
        title: 'Boutique Hotel Lobby',
        category: 'Hospitality',
        location: 'Lviv, Ukraine',
        area: '150 sqm',
        year: '2023',
        client: 'Heritage Hotels',
        duration: '3 months',
        budget: '$65,000',
        coverImage: '/images/projects/lotus-design-n-print-oCw5_evbWyI-unsplash.jpg',
        images: [
            '/images/projects/lotus-design-n-print-oCw5_evbWyI-unsplash.jpg',
            '/images/projects/spacejoy-tAuc4H7Qf9s-unsplash.jpg',
            '/images/projects/iwood-R5v8Xtc0ecg-unsplash.jpg',
        ],
        shortDescription: 'Welcoming space that combines comfort with sophisticated design',
        fullDescription: 'A stunning hotel lobby that creates a memorable first impression while providing functional check-in areas and comfortable seating zones. The design incorporates local materials and craftsmanship, creating a sense of place that reflects Lviv\'s rich cultural heritage.',
        services: ['Interior Design', 'Furniture Selection', 'Lighting Design', 'Art Curation'],
        materials: ['Local Stone', 'Leather Seating', 'Custom Rugs', 'Artisan Lighting'],
        features: [
            'Grand reception desk',
            'Multiple seating zones',
            'Local art installations',
            'Ambient lighting system',
            'Concierge area',
        ],
    },
    {
        id: '6',
        slug: 'executive-office-suite',
        title: 'Executive Office Suite',
        category: 'Commercial',
        location: 'Lviv, Ukraine',
        area: '120 sqm',
        year: '2024',
        client: 'Corporate Services Inc.',
        duration: '2 months',
        budget: '$55,000',
        coverImage: '/images/projects/sanibell-bv-530lZQXMKGw-unsplash.jpg',
        images: [
            '/images/projects/sanibell-bv-530lZQXMKGw-unsplash.jpg',
            '/images/projects/kam-idris-vqMQN9zImG4-unsplash.jpg',
            '/images/projects/jason-wang-NxAwryAbtIw-unsplash.jpg',
        ],
        shortDescription: 'Elegant workspace designed for productivity and style',
        fullDescription: 'A sophisticated executive office that balances professionalism with comfort. The design includes a private office, meeting room, and reception area with high-end finishes and smart technology integration.',
        services: ['Interior Design', 'Custom Furniture', 'Technology Integration', 'Lighting Design'],
        materials: ['Walnut Paneling', 'Leather', 'Marble', 'Smart Glass'],
        features: [
            'Private executive office',
            'Meeting room with AV system',
            'Reception and waiting area',
            'Built-in storage solutions',
            'Smart lighting and climate control',
        ],
    },
    {
        id: '7',
        slug: 'contemporary-townhouse',
        title: 'Contemporary Townhouse',
        category: 'Residential',
        location: 'Kyiv, Ukraine',
        area: '200 sqm',
        year: '2023',
        client: 'Private Client',
        duration: '5 months',
        budget: '$85,000',
        coverImage: '/images/projects/jason-wang-NxAwryAbtIw-unsplash.jpg',
        images: [
            '/images/projects/jason-wang-NxAwryAbtIw-unsplash.jpg',
            '/images/projects/virender-singh-hE0nmTffKtM-unsplash.jpg',
            '/images/projects/spacejoy-tAuc4H7Qf9s-unsplash.jpg',
            '/images/projects/kam-idris-kyt0PkBSCNQ-unsplash.jpg',
        ],
        shortDescription: 'Multi-level home with seamless indoor-outdoor living',
        fullDescription: 'A modern townhouse design that maximizes vertical space and creates fluid connections between levels. Features include an open-plan ground floor, private bedrooms on upper levels, and a rooftop terrace.',
        services: ['Complete Interior Design', 'Space Planning', 'Furniture Selection', 'Outdoor Design'],
        materials: ['Porcelain Tiles', 'Oak Stairs', 'Glass Balustrades', 'Designer Fixtures'],
        features: [
            'Three-story open stairwell',
            'Rooftop terrace',
            'Open-plan living areas',
            'Master suite with dressing room',
            'Home office',
            'Landscaped courtyard',
        ],
    },
    {
        id: '8',
        slug: 'historic-building-renovation',
        title: 'Historic Building Renovation',
        category: 'Renovation',
        location: 'Lviv, Ukraine',
        area: '280 sqm',
        year: '2024',
        client: 'Heritage Preservation Trust',
        duration: '8 months',
        budget: '$150,000',
        coverImage: '/images/projects/iwood-R5v8Xtc0ecg-unsplash.jpg',
        images: [
            '/images/projects/iwood-R5v8Xtc0ecg-unsplash.jpg',
            '/images/projects/billy-jo-catbagan-PbS9rXhsYIU-unsplash.jpg',
            '/images/projects/lotus-design-n-print-oCw5_evbWyI-unsplash.jpg',
            '/images/projects/kam-idris-vqMQN9zImG4-unsplash.jpg',
        ],
        shortDescription: 'Preserving heritage while adding modern functionality',
        fullDescription: 'A sensitive restoration of a 19th-century building that respects its historic character while introducing modern amenities. The project required collaboration with conservation specialists to preserve original features while upgrading infrastructure.',
        services: ['Historic Restoration', 'Interior Design', 'Systems Upgrade', 'Conservation'],
        materials: ['Original Stonework', 'Period-Appropriate Finishes', 'Reclaimed Materials', 'Hidden Modern Systems'],
        features: [
            'Restored original features',
            'Hidden climate control',
            'Period lighting fixtures',
            'Modern kitchen in historic shell',
            'Preserved facade',
            'Updated electrical and plumbing',
        ],
    },
    {
        id: '9',
        slug: 'minimalist-penthouse',
        title: 'Minimalist Penthouse',
        category: 'Residential',
        location: 'Kyiv, Ukraine',
        area: '140 sqm',
        year: '2024',
        client: 'Private Client',
        duration: '4 months',
        budget: '$95,000',
        coverImage: '/images/projects/kam-idris-vqMQN9zImG4-unsplash.jpg',
        images: [
            '/images/projects/kam-idris-vqMQN9zImG4-unsplash.jpg',
            '/images/projects/sanibell-bv-530lZQXMKGw-unsplash.jpg',
            '/images/projects/virender-singh-hE0nmTffKtM-unsplash.jpg',
        ],
        shortDescription: 'Sleek design with panoramic city views',
        fullDescription: 'A sophisticated penthouse with floor-to-ceiling windows showcasing panoramic city views. The minimalist design emphasizes clean lines, quality materials, and thoughtful details that create a serene urban retreat.',
        services: ['Interior Design', 'Custom Furniture', 'Lighting Design', 'Art Consultation'],
        materials: ['Polished Concrete', 'Glass', 'Stainless Steel', 'Natural Stone'],
        features: [
            'Floor-to-ceiling windows',
            'Open-plan living',
            'Designer kitchen',
            'Spa-like master bathroom',
            'Walk-in closet',
            'Private terrace',
        ],
    },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

// Helper function to get related projects
export function getRelatedProjects(currentSlug: string, category: string, limit = 3): Project[] {
    return projects
        .filter(p => p.slug !== currentSlug && p.category === category)
        .slice(0, limit);
}
