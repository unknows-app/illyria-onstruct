// Team member data
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    email?: string;
    phone?: string;
    specialties: string[];
    experience: string;
    education?: string;
    social?: {
        linkedin?: string;
        instagram?: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Oksana Shevchenko',
        role: 'Founder & Creative Director',
        bio: '15+ years of experience in interior design with a degree from Lviv National Academy of Arts.',
        // WARNING: Image path must match an existing file in /public/images/team/ to avoid 404 errors
        image: '/images/team/oksana-shevchenko.jpg',
        email: 'oksana@illyriaconstruct.com',
        phone: '+380 93 123 4567',
        specialties: ['Residential Design', 'Creative Direction', 'Client Relations'],
        experience: '15+ years',
        education: 'Master of Arts, Lviv National Academy of Arts',
        social: {
            linkedin: 'https://linkedin.com/in/oksana-shevchenko',
            instagram: 'https://instagram.com/oksana.design',
        },
    },
    {
        id: '2',
        name: 'Viktor Bondarenko',
        role: 'Senior Interior Designer',
        bio: 'Specializes in residential design with a keen eye for contemporary aesthetics and functionality.',
        // WARNING: Image path must match an existing file in /public/images/team/ to avoid 404 errors
        image: '/images/team/viktor-bondarenko.jpg',
        email: 'viktor@illyriaconstruct.com',
        specialties: ['Contemporary Design', 'Space Planning', '3D Visualization'],
        experience: '10+ years',
        education: 'Bachelor of Architecture, Kyiv National University',
        social: {
            linkedin: 'https://linkedin.com/in/viktor-bondarenko',
        },
    },
    {
        id: '3',
        name: 'Natalia Kovalenko',
        role: 'Commercial Design Lead',
        bio: 'Expert in commercial spaces with over 50 successful office and retail projects.',
        // WARNING: Image path must match an existing file in /public/images/team/ to avoid 404 errors
        image: '/images/team/natalia-kovalenko.jpg',
        email: 'natalia@illyriaconstruct.com',
        specialties: ['Office Design', 'Retail Spaces', 'Brand Integration'],
        experience: '12+ years',
        education: 'Master of Interior Design, European Design School',
        social: {
            linkedin: 'https://linkedin.com/in/natalia-kovalenko',
            instagram: 'https://instagram.com/natalia.interiors',
        },
    },
    {
        id: '4',
        name: 'Andriy Moroz',
        role: 'Project Manager',
        bio: 'Ensures seamless project execution from concept to completion with meticulous attention to detail.',
        // WARNING: Image path must match an existing file in /public/images/team/ to avoid 404 errors
        image: '/images/team/andriy-moroz.jpg',
        email: 'andriy@illyriaconstruct.com',
        specialties: ['Project Management', 'Client Communication', 'Budget Control'],
        experience: '8+ years',
        education: 'MBA, Lviv Business School',
        social: {
            linkedin: 'https://linkedin.com/in/andriy-moroz',
        },
    },
];
