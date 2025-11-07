# Contact Form Setup Guide

## Overview

The contact form now has full backend integration with:

- ✅ Server-side validation using Zod
- ✅ Email delivery via Resend
- ✅ Client-side validation with error display
- ✅ Professional HTML email templates
- ✅ Error handling and user feedback

## Setup Instructions

### 1. Get a Resend API Key

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Resend API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=hello@illyriaconstruct.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**Important Notes:**

- `.env.local` is gitignored and won't be committed
- For testing, use `onboarding@resend.dev` as the FROM email
- For production, verify your domain in Resend and use your own email

### 3. Test the Contact Form

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/contact`

3. Fill out and submit the form

4. Check your `CONTACT_EMAIL` inbox for the message

## Features

### Client-Side Validation

- Real-time field validation
- Clear error messages
- Visual feedback for invalid fields

### Server-Side Validation

- Zod schema validation
- Type-safe form data
- Comprehensive error responses

### Email Template

- Professional HTML design
- Branded styling
- All form fields included
- Reply-to sender's email

## Demo Mode

If `RESEND_API_KEY` is not configured, the form will:

- Still validate all fields
- Log submissions to console
- Show success message
- Not send actual emails

This allows testing without email service setup.

## Production Deployment

### Vercel/Netlify

Add environment variables in your deployment platform:

1. Go to Project Settings → Environment Variables
2. Add:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `RESEND_FROM_EMAIL`

### Verify Your Domain (Production)

For production use with your own domain:

1. In Resend dashboard, go to Domains
2. Add your domain (e.g., illyriaconstruct.com)
3. Add DNS records as instructed
4. Update `RESEND_FROM_EMAIL` to use your domain:

   ```
   RESEND_FROM_EMAIL=hello@illyriaconstruct.com
   ```

## Troubleshooting

### Form submits but no email received

- Check RESEND_API_KEY is correct
- Verify CONTACT_EMAIL is valid
- Check Resend dashboard for logs
- Check spam folder

### Build fails

- Make sure .env.local exists (even if empty)
- API key can be added after build

### Validation errors

- Check browser console for details
- Ensure all required fields are filled
- Phone and budget are optional fields

## API Endpoint

**POST** `/api/contact`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+380 93 123 4567",
  "projectType": "residential",
  "budget": "25k-50k",
  "message": "I would like to renovate my apartment..."
}
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

**Error Response (400/500):**

```json
{
  "success": false,
  "error": "Error message",
  "details": [...]
}
```

## Cost

Resend free tier includes:

- 3,000 emails/month
- 100 emails/day
- Perfect for most small businesses

## Support

For issues with:

- **Resend**: Check [Resend documentation](https://resend.com/docs)
- **Form validation**: See `app/lib/validations.ts`
- **API route**: See `app/api/contact/route.ts`
