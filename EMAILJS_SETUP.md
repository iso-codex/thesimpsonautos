# EmailJS Template Setup Guide

## Quick Fix for "Invalid EmailJS configuration" Error

The error occurs when your EmailJS template variables don't match what the code is sending. Follow these steps:

## Step 1: Go to EmailJS Dashboard

1. Log in to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Find your template (ID: `template_fe015qd`) or create a new one

## Step 2: Set Up Your Template Variables

Your EmailJS template **MUST** include these exact variables:

```
{{name}}
{{email}}
{{message}}
{{title}}
{{time}}
```

## Step 3: Example EmailJS Template

Your template should look like this:

**Subject:**
```
Contact Us: {{title}}
```

**Content:**
```
A message by {{name}} has been received. Kindly respond at your earliest convenience.

{{name}}
{{time}}

{{message}}
```

**Settings:**
- To Email: `pkosimpson@gmail.com`
- From Name: `{{name}}`
- Reply To: `{{email}}`

## Step 4: Verify Your Template

Make sure:
- ✅ All 5 variables are included: `{{name}}`, `{{email}}`, `{{message}}`, `{{title}}`, `{{time}}`
- ✅ Variable names match exactly (case-sensitive)
- ✅ Template is saved and active
- ✅ Template ID matches your `.env` file: `template_inf2lpe`

## Step 5: Test

1. Restart your React development server
2. Fill out the contact form
3. Submit and check if email is received

## Troubleshooting

If you still get errors:

1. **Check Console Logs**: Open browser console (F12) and look for:
   - "Sending email with params:" - shows what's being sent
   - "Using Service ID:" and "Using Template ID:" - confirms config is loaded

2. **Verify Service ID**: Make sure your EmailJS service is active and the Service ID matches: `service_q746waf`

3. **Check Public Key**: Verify your Public Key in EmailJS dashboard matches: `KYPSOnLOP9Z8N6WpA`

4. **Template Variables**: Double-check that your template uses EXACTLY these variable names (no extra spaces, correct spelling)

## Alternative: Create a New Template

If the current template doesn't work:

1. Create a new template in EmailJS
2. Use the template code above
3. Copy the new Template ID
4. Update your `.env` file with the new Template ID
5. Restart your development server
