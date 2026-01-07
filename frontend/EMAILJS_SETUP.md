# EmailJS Setup Guide

This project uses EmailJS to send emails directly from the frontend without a backend server.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Contact Form

**Subject:** Contact Form: {{subject}}

**Content:**
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the company portfolio contact form.
Reply to: {{from_email}}
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key

1. Go to **Account** > **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## Step 5: Configure Frontend

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace:
- `your_service_id_here` with your Service ID from Step 2
- `your_template_id_here` with your Template ID from Step 3
- `your_public_key_here` with your Public Key from Step 4

## Step 6: Install Dependencies

```bash
cd frontend
npm install
```

## Step 7: Run the Project

```bash
npm start
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (palanisamy20044@gmail.com)
4. You should receive the contact form submission

## Troubleshooting

- **"EmailJS configuration is missing"**: Make sure your `.env` file is in the `frontend` directory and contains all three variables
- **"Failed to send message"**: Check your EmailJS service is properly configured and your email provider settings are correct
- **Emails not received**: Check spam folder, verify EmailJS service is connected to your email provider

## Free Tier Limits

- 200 emails per month (free tier)
- Upgrade available if you need more

## No Backend Required!

With EmailJS, you don't need:
- ❌ Backend server
- ❌ SMTP configuration
- ❌ Server-side code
- ✅ Everything works from the frontend!
