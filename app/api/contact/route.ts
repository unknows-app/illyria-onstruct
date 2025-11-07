import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with API key from environment variable (or dummy key for build)
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');

// Validation schema
const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 characters').optional().or(z.literal('')),
    projectType: z.string().min(1, 'Please select a project type'),
    budget: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate the request body
        const validationResult = contactSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Validation failed',
                    details: validationResult.error.issues
                },
                { status: 400 }
            );
        }

        const { name, email, phone, projectType, budget, message } = validationResult.data;

        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.warn('RESEND_API_KEY not configured, skipping email send');

            // Log the contact form submission instead
            console.log('Contact form submission:', { name, email, phone, projectType, budget, message });

            return NextResponse.json({
                success: true,
                message: 'Contact form submitted successfully (demo mode)',
            });
        }

        // Send email using Resend
        const emailData = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.CONTACT_EMAIL || 'hello@illyriaconstruct.com',
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background-color: #2F4A3A; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                        .content { background-color: #f4f4f4; padding: 30px; border-radius: 0 0 8px 8px; }
                        .field { margin-bottom: 20px; }
                        .label { font-weight: bold; color: #2F4A3A; margin-bottom: 5px; }
                        .value { background-color: white; padding: 12px; border-radius: 4px; border-left: 4px solid #C4A962; }
                        .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #C4A962; color: #666; font-size: 14px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2 style="margin: 0;">New Contact Form Submission</h2>
                            <p style="margin: 5px 0 0 0; opacity: 0.9;">Illyria Construct Website</p>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">Name</div>
                                <div class="value">${name}</div>
                            </div>
                            <div class="field">
                                <div class="label">Email</div>
                                <div class="value"><a href="mailto:${email}">${email}</a></div>
                            </div>
                            ${phone ? `
                            <div class="field">
                                <div class="label">Phone</div>
                                <div class="value"><a href="tel:${phone}">${phone}</a></div>
                            </div>
                            ` : ''}
                            <div class="field">
                                <div class="label">Project Type</div>
                                <div class="value">${projectType}</div>
                            </div>
                            ${budget ? `
                            <div class="field">
                                <div class="label">Budget</div>
                                <div class="value">${budget}</div>
                            </div>
                            ` : ''}
                            <div class="field">
                                <div class="label">Message</div>
                                <div class="value">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                            <div class="footer">
                                <p>This message was sent from the Illyria Construct contact form.</p>
                                <p>To reply, simply respond to this email.</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        console.log('Email sent successfully:', emailData);

        return NextResponse.json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.',
        });

    } catch (error) {
        console.error('Contact form error:', error);

        return NextResponse.json(
            {
                success: false,
                error: 'Failed to send message. Please try again later.'
            },
            { status: 500 }
        );
    }
}
