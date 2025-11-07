import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 characters').max(20, 'Phone number is too long').optional().or(z.literal('')),
    projectType: z.string().min(1, 'Please select a project type'),
    budget: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
