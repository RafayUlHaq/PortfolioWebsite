# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{user_name}} ({{user_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)

## Step 5: Configure Environment Variables (Recommended)
1. Copy `.env.local.example` to `.env.local`
2. Fill in your actual EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Alternative: Direct Code Update
If you prefer not to use environment variables, replace the placeholders in `components/EmailModal.jsx`:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  form.current,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
)
```

## Step 6: Test the Form
1. Run your development server: `npm run dev`
2. Go to the contact page
3. Click "Send an Email"
4. Fill out and submit the test form
5. Check your email for the message

## Template Variables
The form sends these variables to your EmailJS template:
- `{{user_name}}` - Sender's name
- `{{user_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Security Note
The public key is safe to use in client-side code. EmailJS handles the security on their end.