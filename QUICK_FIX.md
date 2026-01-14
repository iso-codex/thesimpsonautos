# Quick Fix for EmailJS 400 Error

## Immediate Steps

1. **Check Browser Console (F12)**
   - Look for "=== EmailJS Configuration ===" log
   - Check "EmailJS Error Details:" for actual error
   - Share the error text

2. **Verify Template in EmailJS Dashboard**
   - Go to: https://dashboard.emailjs.com/admin/templates
   - Open template ID: `template_inf2lpe`
   - **CRITICAL:** Make sure template is **SAVED** and **ACTIVE**
   - Check that all variables exist: `{{name}}`, `{{email}}`, `{{message}}`, `{{title}}`, `{{time}}`

3. **Test Template in EmailJS**
   - In EmailJS dashboard, click "Test It" or "Playground" button
   - Fill in test values for all variables
   - Try sending a test email
   - If test works but code doesn't, there's a mismatch

4. **Double-Check Template Variables**
   - Subject line: Must be `Contact Us: {{title}}`
   - Content: Must use `{{name}}`, `{{email}}`, `{{message}}`, `{{time}}`
   - From Name: `{{name}}`
   - Reply To: `{{email}}`
   - All must be lowercase and exact spelling

## Common Issues

### Template Not Saved
- Make sure you click "Save" button in EmailJS
- Check template status is "Active"

### Variable Name Mismatch
- Variables are case-sensitive
- Must be lowercase: `{{name}}` not `{{Name}}` or `{{NAME}}`
- No extra spaces: `{{name}}` not `{{ name }}` or `{{name }}`

### Template ID Mismatch
- Verify template ID in `.env` file matches dashboard
- Current: `template_inf2lpe`
- Check you're logged into correct EmailJS account

### Service Connection Issue
- Verify service `service_q746waf` is connected and active
- Check email provider connection is working

## Debug Information

The code is sending:
```javascript
{
  name: "First Last",
  email: "customer@email.com",
  title: "The Simpsons Autos",
  time: "Monday, December 9, 2024, 02:30 PM",
  message: "Contact details..."
}
```

Your template MUST accept these exact variable names.

## Still Not Working?

1. Create a NEW template in EmailJS with exactly this:

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
- From Email: (use default)

2. Save the new template
3. Copy the NEW Template ID
4. Update `.env` file with new Template ID
5. Restart React server
6. Try again
