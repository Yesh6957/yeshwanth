# Yesh Personal Portfolio Website Requirements Document

## 1. Website Overview

### 1.1 Website Name
Yesh - Personal Portfolio

### 1.2 Website Description
A sophisticated personal portfolio website showcasing Yeshwanth J's professional journey as an MCA student, developer, and AI/ML enthusiast. The site presents education, experience, skills, and featured projects in an elegant, minimalist glassmorphism-inspired design.

### 1.3 Target Audience\nRecruiters, potential employers, collaborators, and professional network connections in the software development and AI/ML fields.

---

## 2. Website Structure and Functionality

### 2.1 Navigation Structure
Single-page application with smooth anchor-link navigation:\n- About Me (#about)\n- Education (#education)
- Experience (#experience)
- Skills (#skills)
- Projects (#projects)
- Contact (#contact)

### 2.2 Core Sections
\n#### 2.2.1 Header / Navigation Bar
- Sticky full-width header with semi-transparent white background (rgba(255,255,255,0.85))
- Backdrop-filter blur effect (8px) for frosted glass appearance
- Left:'Yesh' logo in modern sans-serif font
- Right: Horizontal navigation links (About Me, Education, Experience, Project, Contact) with hover accent colors
- Mobile: Collapses into hamburger menu\n- Smooth scroll behavior for anchor navigation

#### 2.2.2 Hero Section (Intro)
- Layout: Two-column on desktop, stacked on mobile
- Left Column:\n  - Large headline: 'I'm Yesh'
  - Auto-typed rotating roles: 'I'm a Photographer', 'I'm a Developer', 'I'm an AI Enthusiast' with typewriter animation
  - Short tagline below\n  - CTA button: 'Contact Me' or 'View Projects' in accent color
- Right Column:
  - Square photo container with glassmorphism styling (semi-transparent background, soft shadow, rounded edges)
  - Photo of Yeshwanth J, centered and optimized\n- Clean glassmorphic design with soft whites, light grays, and gentle shadows
\n#### 2.2.3 About Me Section
- Structure inspired by https://yesh-dev.vercel.app/
- Heading: 'About Me'
- Desktop Layout:
  - Left: 2-4 brief bio paragraphs describing background as MCA student with software engineering and AI/ML experience
  - Icon list of strengths/skills/interests
  - Right: Key stats in glass cards (e.g., 'MCA Student2026', '9.02 CGPA','Full-Stack Developer')
- Mobile: Stacked columns\n- Smooth fade-up entrance animations on scroll
- Subtle hover effects on icons and cards

#### 2.2.4 Education Section
- Heading: 'Education'\n- Two education entries:
  1. Master of Computer Applications (MCA), SRM University, 2024-2026, CGPA: 9.02
  2. Bachelor of Computer Applications (BCA), Bangalore University, 2020-2023, CGPA: 7.21
- Display in timeline or card format with glassmorphic containers

#### 2.2.5 Experience Section
- Heading: 'Experience'\n- Three experience cards:
  1. AI Tech Decentralized Intern - BlockesBlock (Aug 2025 - Sep 2025)
     - Optimized LLM components (10% faster response times)
     - Developed React-based AI dashboards with Python APIs
     - Implemented Web3.js features for dApp functionality
  2. Web Development Intern - Code Bind Technology, Chennai (May 2025 - Jun 2025)
     - Built real-time book ordering system (JavaScript, PHP, MySQL)
     - Handled 200+ simulated transactions per day
     - Participated in Agile sprints\n  3. Associate Trainee - Data Annotator - Tika Data Service Pvt. Ltd, Hosur (Dec 2023 - Jul 2024)\n     - Annotated 1,000+ images for computer vision models
     - Improved model accuracy by ~15%
     - Collaborated with cross-functional teams
- Timeline or card layout with glassmorphic styling
- Fade-in animations on scroll

#### 2.2.6 Skills Section
- Heading: 'Skills'
- Organized by categories:
  - Programming Languages: Python, C, C++, Java, JavaScript, PHP\n  - Web Technologies: HTML, CSS, React, Node.js, Bootstrap
  - Frameworks: Django, Flask, Express.js
  - Databases: MySQL, Firebase
  - Tools: Git, GitHub, VS Code, Android Studio, Postman
- Display format: Labeled proficiency bars or skill cards with icons
- Grid layout on desktop, stacked on mobile
- Glassmorphic containers with subtle gradients and rounded corners
- Animated skill bars/circles on scroll into view
- Interactive hover with color shift or lift effect

#### 2.2.7 Featured Projects Section
- Heading: 'Featured Projects' with subheading'Showcasing Our Most Impactful Work'
- Structure inspired by https://brightedge.framer.website/
- Vertical stack of project cards revealed sequentially on scroll
- Three project cards:
  1. Online Food Ordering System (HTML, CSS, JS, PHP, MySQL)
     - Secure food ordering platform with real-time tracking
     - 25% query time reduction through optimized indexing
  2. Books Buy & Rent Application (Java, XML, Firebase)
     - Android app with Firebase authentication and real-time updates
  3. Payani Maga - AI Travel Itinerary Agent (React, FastAPI, Python, LLM model Ollama-llama3)
     - AI-based travel planner with personalized itineraries
     - Integrated OpenAI GPT, currency data, weather APIs, Google Maps APIs
     - Features: budgeting, real-time AI chat, safety alerts
- Each card includes: title, brief description, key technologies tags, featured image
- Glassmorphic cards with generous spacing, subtle shadows, rounded edges
- Clickable cards open project website in new tab
- Fade-up/slide/scale entrance animations
- Subtle hover highlights (lift and accent color)

#### 2.2.8 Footer / Contact Section
- Top: Friendly icon (books) with CTA message'Ready to build something amazing?' in refined serif/stylized font
- Subheading: 'I'd love to connect with you.' in lighter sans-serif
- Vertical stack of semi-transparent contact cards:\n  - Email: yeshwanth8797@gmail.com
  - Phone: +91 9150957594
  - LinkedIn: YESHWANTH J
  - GitHub: yesh6957
  - Location: Hosur, Tamil Nadu -635109
- Cards with labels left, details right, soft corners, muted backgrounds, generous spacing
- Bottom: Personal signature'Yeshwanth J' in orange/accent color with italic/script font
- Copyright tag: © 2025\n- Minimalist, readable, responsive design fitting glassmorphism theme

---

## 3. Design Style\n
### 3.1 Overall Theme
- Sophisticated, minimalist, elegant glassmorphism-inspired design
- Sandalwood, woody, and book vibe as shown in reference image1000085304.png
- Striking yet clean withample white space and dark contrasts
\n### 3.2 Color Palette
- Primary: Warm beige/cream tones (sandalwood-inspired)
- Secondary: Deep charcoal/black for text and contrasts
- Accent: Orange or warm amber for CTAs, signature, and highlights
- Glassmorphic elements: Semi-transparent whites (rgba(255,255,255,0.7-0.9))

### 3.3 Visual Elements
- Semi-transparent panels with backdrop-filter blur (8-12px)
- Soft drop-shadows for depth (box-shadow: 0 4px 16px rgba(0,0,0,0.1))
- Rounded corners on all containers (8-16px border-radius)
- Smooth CSS transitions (0.3s ease) for hover and scroll animations

### 3.4 Typography
- Font Family: Modern sans-serif (Inter, Helvetica Neue, SF Pro Display)
- Headlines: Slightly bolder, larger size, tight line spacing
- Body Text: High contrast, consistent styling
- Signature/CTA: Italic/script font for warmth

### 3.5 Layout
- Generous white space between sections
- Clear visual separation with glassmorphic dividers
- Responsive breakpoints for mobile, tablet, and desktop
- Grid/multi-column layouts on wide screens, stacked on mobile

### 3.6 Animations
- Fade-up/slide entrance animations on scroll
- Typewriter effect for rotating roles in hero section
- Smooth skill bar/circle animations on scroll into view
- Subtle hover effects: color shift, lift (transform: translateY(-4px))

---\n
## 4. Technical Requirements

### 4.1 Frontend Technologies
- HTML5, CSS3, JavaScript\n- CSS Variables for global styles (fonts, colors, sizing)
- Responsive design with media queries
- Smooth scroll behavior (scroll-behavior: smooth)
\n### 4.2 Styling Approach
- Glassmorphism: background: rgba() + backdrop-filter: blur()
- CSS transitions and keyframes for animations
- Semantic HTML structure for accessibility and SEO
- Optimized for screen readers\n
### 4.3 Responsive Design
- Mobile-first approach\n- Breakpoints: Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px)
- Hamburger menu for mobile navigation
- Stacked layouts on smaller screens

### 4.4 Performance Optimization
- Optimized images (compressed, appropriate formats)
- Lazy loading for images and animations
- Minimal external dependencies
\n---

## 5. Reference Materials

### 5.1 Reference Websites
- About Me section structure: https://yesh-dev.vercel.app/
- Featured Projects section layout: https://brightedge.framer.website/
\n### 5.2 Reference Images
- Overall theme and visual style: 1000085304.png (sandalwood, woody, book vibe with minimalist portfolio layout)
\n---

## 6. Contact Information
- Name: Yeshwanth J
- Location: Hosur, Tamil Nadu - 635109
- Phone: +91 9150957594
- Email: yeshwanth8797@gmail.com
- LinkedIn: YESHWANTH J
- GitHub: yesh6957