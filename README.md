# The Simpsons Autos - Landing Page

A modern, dark-themed landing page for The Simpsons Autos car sales company built with React.js.

## Features

- **Dark Theme Design**: Sleek, modern dark theme matching luxury car aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Sections**:
  - Hero section with call-to-action
  - Today's Specials with car listings and filters
  - Featured section
  - Services section
  - Contact form with email functionality
- **Email Integration**: Contact form sends emails using EmailJS
- **Success Animation**: Beautiful animated success message when form is submitted

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure EmailJS**
   
   The contact form uses EmailJS to send emails. You need to:
   
   a. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
   
   b. Create an email service and template (see detailed guide below)
   
   c. Create a `.env` file in the root directory with your EmailJS credentials:
      ```
      REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
      REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
      REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
      REACT_APP_RECIPIENT_EMAIL=your-email@example.com
      ```
   
   **Note**: The `.env` file should not be committed to version control (it's already in `.gitignore`)

3. **Start Development Server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## EmailJS Setup Guide

1. **Sign up and Login**
   - Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Create a free account (200 emails/month free)

2. **Create an Email Service**
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions to connect your email account
   - Copy the **Service ID** (you'll need this)

3. **Create an Email Template**
   - Go to "Email Templates" → "Create New Template"
   - Use these variables in your template:
     - `{{from_name}}` - Customer's full name
     - `{{from_email}}` - Customer's email
     - `{{phone}}` - Customer's phone number
     - `{{address}}` - Customer's address
     - `{{message}}` - Additional message
   - Set the subject line (e.g., "New Contact Form Submission from The Simpsons Autos")
   - Copy the **Template ID** (you'll need this)

4. **Get Your Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Configure the App**
   - Create a `.env` file in the project root
   - Add your credentials:
     ```
     REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
     REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
     REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
     REACT_APP_RECIPIENT_EMAIL=your-email@example.com
     ```
   - Restart the development server after creating/updating the `.env` file

## Project Structure

```
thesimpsonautos/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── TodaysSpecials.js
│   │   ├── FeaturedSection.js
│   │   ├── ServicesSection.js
│   │   ├── Footer.js
│   │   ├── SuccessAnimation.js
│   │   └── *.css (component styles)
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Customization

- **Company Information**: Update contact details in `Footer.js`
- **Car Listings**: Modify the cars array in `TodaysSpecials.js`
- **Colors & Styling**: Adjust CSS variables and styles in component CSS files
- **Images**: Replace placeholder images with your own car images

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React 18
- EmailJS for contact form
- CSS3 for styling
- Google Fonts (Inter)

## License

Copyright © 2024 The Simpsons Autos
