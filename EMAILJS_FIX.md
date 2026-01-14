# EmailJS Template Fix Guide

## Current Configuration
- **Template ID:** `template_inf2lpe`
- **Service ID:** `service_q746waf`
- **Public Key:** `KYPSOnLOP9Z8N6WpA`

## Required Template Variables

Your EmailJS template **MUST** include these exact variables (case-sensitive):

1. `{{name}}` - Customer's full name
2. `{{email}}` - Customer's email address  
3. `{{message}}` - The message/content
4. `{{title}}` - Title text (used in subject)
5. `{{time}}` - Timestamp

## EmailJS Template Setup

### Subject Line:
```
Contact Us: {{title}}
```

### Email Body:
```
A message by {{name}} has been received. Kindly respond at your earliest convenience.

{{name}}
{{time}}
{{message}}
```

### Template Settings:

**To Email:** `pkosimpson@gmail.com`

**Reply To:** `{{email}}` (this will reply to the customer)

**From Name:** `{{name}}` (optional)

**From Email:** Use default email address (checked)

## Step-by-Step Fix

1. **Go to EmailJS Dashboard**
   - Visit https://dashboard.emailjs.com/admin/templates
   - Find template ID: `template_inf2lpe`

2. **Verify Template Variables**
   - Click on the template to edit
   - Make sure ALL variables are present: `{{name}}`, `{{email}}`, `{{message}}`, `{{title}}`, `{{time}}`
   - Variables are case-sensitive - use lowercase

3. **Check Subject Line**
   - Subject should be: `Contact Us: {{title}}`
   - Make sure `{{title}}` is included

4. **Check Email Content**
   - The body must use `{{name}}`, `{{email}}`, `{{message}}`, `{{time}}`
   - You can use them anywhere in the template

5. **Save the Template**
   - Click "Save" button
   - Make sure template is active/enabled

6. **Test the Template**
   - Click "Test It" or "Playground" button in EmailJS
   - Verify it sends correctly

7. **Restart React Server**
   - Stop your React development server (Ctrl+C)
   - Run `npm start` again
   - This reloads environment variables

## What the Code is Sending

The React code sends these parameters:
```javascript
{
  name: "First Last",
  email: "customer@email.com",
  title: "The Simpsons Autos",
  time: "Monday, December 9, 2024, 02:30 PM",
  message: "Contact Details:\n\nName: ...\nEmail: ...\nPhone: ...\nAddress: ..."
}
```

## Common Issues

### Issue: "Template variables don't match"
**Fix:** Make sure all 5 variables exist in your template exactly as written above

### Issue: "Template not found"
**Fix:** 
- Verify template ID `template_inf2lpe` exists in your dashboard
- Check you're logged into the correct EmailJS account
- Restart React server after updating .env

### Issue: Still getting 400 error
**Fix:**
1. Open browser console (F12)
2. Look for "Sending email with params:" log
3. Verify what's being sent matches your template
4. Double-check template has ALL variables with exact spelling
5. Make sure template is saved and active

## Verification Checklist

- [ ] Template ID `template_inf2lpe` exists in EmailJS
- [ ] All 5 variables (`{{name}}`, `{{email}}`, `{{message}}`, `{{title}}`, `{{time}}`) are in template
- [ ] Subject line includes `{{title}}`
- [ ] Reply To is set to `{{email}}`
- [ ] Template is saved and active
- [ ] `.env` file has correct template ID
- [ ] React server has been restarted after changes

## Still Having Issues?

1. Check browser console (F12) for detailed error logs
2. Try using EmailJS "Test It" feature to verify template works
3. Verify your EmailJS account has requests remaining (200/month free)
4. Check that service `service_q746waf` is active and connected
