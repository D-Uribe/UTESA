# UTESA - Landing Page 🏭
 
Landing page for UTESA, an industrial services trading and integration company. A responsive site with a working contact form, animations, and a modern design.
 
## Features
 
- 🎨 Responsive design (mobile, tablet, desktop)
- ✨ On-scroll animations with AOS
- 🖼️ Brand/client carousel with Swiper
- 📋 Service cards with hover effect
- 📧 Working contact form via EmailJS
- 🔔 Notifications with SweetAlert2
- 💬 Direct WhatsApp button
- ⏳ Loading state on the form's submit button
## Technologies
 
- HTML5 / CSS3
- Bootstrap 5
- Bootstrap Icons
- AOS (Animate On Scroll)
- Swiper.js
- EmailJS
- SweetAlert2
## Project structure
 
```
├── index.html       # Home page
├── contact.html      # Contact page
├── styles.css        # General styles
├── home.js           # AOS and Swiper logic (index.html)
├── contact.js         # EmailJS and form logic (contact.html)
└── assets/             # Images and logos
```
 
## Running it locally
 
1. Clone the repository
2. Open `index.html` with Live Server (VS Code extension) or any local server
3. No dependencies to install, everything loads via CDN
## Contact form setup
 
The form uses [EmailJS](https://www.emailjs.com) to send emails without a backend. If you're reusing this project:
 
1. Create an EmailJS account
2. Set up an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with the variables: `{{name}}`, `{{title}}`, `{{email}}`, `{{message}}`
4. Replace `publicKey`, `service_id`, and `template_id` in `contact.js`
## Webpage

https://app.netlify.com/projects/heroic-hotteok-59234b/overview

## Preview

<img width="1756" height="739" alt="image" src="https://github.com/user-attachments/assets/223cc3bc-f89a-48ca-b472-e4eb4206609e" />
