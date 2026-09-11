---
name: portfolio-website-design
description: Madhav Sagi's AI-focused Software Engineer portfolio - Astro-based static site with interactive elements for landing top-tier SDE/ML roles
metadata:
  type: project
  created: 2026-07-27
  target_audience: FAANG recruiters and hiring managers
  deployment: Static export (GitHub Pages/Vercel/Netlify)
---

# Madhav Sagi Portfolio Website - Design Specification

## Project Overview

**Goal:** Build a high-performance, visually stunning portfolio website to showcase Madhav's projects and experience to land interviews at top tech companies (FAANG, unicorns) for SDE/ML Engineer roles.

**Target Audience:** Technical recruiters and hiring managers who will spend 30-60 seconds scanning the site initially.

**Key Requirements:**
- Equal priority for desktop and mobile experiences (responsive perfection)
- Static site export for zero-cost hosting and perfect reliability
- Interactive elements that demonstrate technical creativity without being gimmicky
- Performance-first architecture (Lighthouse 95+ across all categories)

---

## Technical Architecture

### Core Stack: Astro 4 + Alpine.js + Tailwind CSS

**Why Astro:**
- Ships near-zero JavaScript by default with "islands architecture"
- Perfect Lighthouse scores (performance-first)
- Static site generation with component-based development
- Can use framework components (React/Vue) only where needed

**Interactive Islands Strategy:**
- **Hero Canvas:** Particles.js (~20KB) for lightweight particle background
- **Timeline/Skills/Projects/Terminal:** Alpine.js for filters, tabs, modals, CLI parsing
- **Form:** Alpine.js for client-side validation

**Styling System:**
- Tailwind CSS with custom dark theme
- Color palette:
  - Background: `#0b0f19` (obsidian)
  - Accent: `#00f2fe` (neon cyan)
  - Secondary: `#a78bfa` (violet glow)
  - Text: `#e2e8f0` (slate-200)
  - Card backgrounds: `#1e293b` (slate-800)

### Project Structure

```
src/
├── components/
│   ├── Hero.astro                 # Static headline + CTA buttons
│   ├── HeroCanvas.jsx             # Interactive particle background
│   ├── About.astro                # Education section
│   ├── Timeline.jsx               # Expandable experience cards
│   ├── SkillsMatrix.jsx           # Filter tabs + animated badges
│   ├── ProjectCard.astro          # Static project card shell
│   ├── ProjectModal.jsx           # Modal with detailed view
│   ├── Terminal.jsx               # CLI terminal component
│   ├── ContactForm.jsx            # Form with validation
│   └── Footer.astro               # Static footer + back-to-top
├── layouts/
│   └── BaseLayout.astro           # Global layout, dark theme, fonts
├── pages/
│   └── index.astro                # Single-page app structure
└── styles/
    └── global.css                 # Tailwind + custom properties
```

### Performance Targets

- First Contentful Paint: <1.5s
- Time to Interactive: <2.5s
- Lighthouse scores: 95+ (Performance, Accessibility, Best Practices, SEO)
- Bundle size: <150KB gzipped (excluding images)

---

## User Profile & Content

**Name:** Madhav Sagi  
**Location:** Tampa, FL  
**Email:** sscholarssagi@gmail.com  
**LinkedIn:** linkedin.com/in/madhav-sagi/  
**Target Roles:** SDE, ML/AI Engineer, Full-Stack Engineer

**Headline/Tagline:**  
"M.S. CS (AI) Student @ Georgia Tech | Software Engineer bridging Full-Stack Systems, Cloud Architecture, and Machine Learning."

---

## Page Sections Design

### 1. Hero Section

**Layout:** Full viewport height, centered content with interactive background.

**Components:**
- Animated particle canvas background (particles.js)
  - 80-100 particles
  - Cyan (#00f2fe) and violet (#a78bfa) colors
  - Mouse-follow drift effect
  - Connection lines between nearby particles
  - Optimized for 60fps on mobile

**Content Structure:**
```
MADHAV SAGI
[Animated role cycling text:]
→ Software Engineer
→ AI & Machine Learning Developer
→ Georgia Tech M.S. CS (AI) Student

M.S. CS (AI) Student @ Georgia Tech |
Software Engineer bridging Full-Stack Systems,
Cloud Architecture, and Machine Learning

[Explore Projects] [Get in Touch] [Download Resume]

Tampa, FL
```

**Typography:**
- Name: `text-5xl md:text-7xl font-bold` with gradient (cyan → violet)
- Animated tagline: `text-xl md:text-2xl` with typewriter/fade effect
- Body text: `text-base md:text-lg text-slate-300`

**CTA Buttons:**
- Primary (Explore Projects): Cyan glow, hover scale + shadow pulse → scrolls to projects
- Secondary (Get in Touch): Outline style, hover fill → scrolls to contact
- Tertiary (Download Resume): Ghost button → triggers PDF download
- All buttons: 200ms transitions, accessibility focus states

**Scroll Indicator:** Animated chevron at bottom with bounce animation

---

### 2. About & Experience Timeline

**Layout:** Two-column grid on desktop (60/40 split), stacks on mobile.

**Left Column: Education Highlights**

```
About Me
─────────────────

🎓 M.S. in Computer Science
   Specialization: Artificial Intelligence
   Georgia Institute of Technology
   GPA: 4.00 | Expected May 2027

🎓 B.S. in Computer Science
   Honors, Dean's List
   University of Florida
   Graduated December 2024
```

**Right Column: Interactive Experience Timeline**

Vertical timeline with expandable cards (Alpine.js accordion behavior).

**Default (Collapsed) State:**
```
2026 ─●─ Outlier AI
      │  AI Trainer / Researcher
      │  [Expand ▼]
      │
2025 ─●─ Deepa Electricals
      │  Software Development Engineer Intern
      │  [Expand ▼]
```

**Expanded State:**
```
┌────────────────────────────────────────────┐
│ Outlier AI                                 │
│ AI Trainer / Researcher                    │
│ Jan 2026 – Jul 2026                        │
│ ─────────────────────────────────────      │
│ • Evaluated AI-generated code across       │
│   Python, Java, and Go for production      │
│   readiness                                │
│ • Tested math algorithm accuracy and       │
│   triaged production errors                │
│ • Improved model feedback loops through    │
│   structured evaluation frameworks         │
│                                            │
│ Skills: Python, Java, Go, AI Evaluation    │
│ [Collapse ▲]                               │
└────────────────────────────────────────────┘
```

**Experience Details:**

**Outlier AI** – AI Trainer / Researcher (Jan 2026 – Jul 2026)
- Evaluated AI-generated code across Python, Java, and Go for production readiness
- Tested math algorithm accuracy and triaged production errors
- Improved model feedback loops through structured evaluation frameworks
- Skills: Python, Java, Go, AI Evaluation

**Deepa Electricals** – Software Development Engineer Intern (Jun 2025 – Dec 2025)
- Optimized MDM REST API, improving efficiency by 15%
- Built Bitbucket CI/CD pipeline with Terraform for infrastructure automation
- Worked in Agile Scrum workflow with cross-functional teams
- Skills: REST APIs, CI/CD, Terraform, Bitbucket, Agile/Scrum

**Interaction Behavior:**
- Click to expand: Smooth height animation (300ms ease-out)
- Accordion behavior: Collapse others when one expands
- Timeline dots glow cyan when card is expanded
- Scroll animation: Cards fade in with 100ms stagger, timeline line draws from top to bottom

---

### 3. Interactive Skills Matrix

**Layout:** Full-width section with filter tabs at top, skill badges in responsive grid.

**Filter Tabs (Alpine.js):**
```
[ All ]  Languages  Frameworks & Cloud  Tools
  ─────
```

**Skills Organization:**

**Languages:**
- Python
- Go
- Java
- C++
- SQL (PostgreSQL, MySQL)
- TypeScript
- NoSQL (MongoDB)

**Frameworks & Cloud:**
- Spring Boot
- Flask
- React
- Next.js
- Angular
- Pandas
- PySpark
- AWS (EC2)
- GCP (Compute Engine)
- Docker
- Terraform
- Nginx
- REST APIs

**Tools:**
- Git
- GitHub
- Jenkins
- Jira
- Linux
- Bash
- CI/CD

**Badge Design:**
- Dark slate background (#1e293b) with cyan border
- Hover: Scale 1.05, cyan glow shadow, border brightens
- Category icon in top-right corner
- Skill name centered
- Grid: 4 columns desktop, 2 mobile

**Filter Animation:**
- Click filter: Unmatched badges fade out + scale down (200ms)
- Matched badges rearrange with CSS Grid transition
- Active filter tab: Cyan underline + glow

**Scroll Animation:**
- Badges fade in with 50ms stagger per badge
- Grid animates from bottom-up on first viewport entry

---

### 4. Featured Projects Showcase

**Layout:** Filter tabs + card grid (3 columns desktop, 2 tablet, 1 mobile).

**Filter Tabs:**
```
[ All ]  AI/ML  Full-Stack  IoT/Cloud
```

**Project Card Design (Compact View):**
```
┌─────────────────────────────────────────┐
│  [Project thumbnail/gradient]           │
│                                         │
│  Requestify                             │
│  Full-Stack DJ & Audience Interaction  │
│                                         │
│  [Python] [TypeScript] [Flask] [React] │
│  [MySQL] [GCP] [Nginx]                  │
│                                         │
│  [View Details →]                       │
└─────────────────────────────────────────┘
```

**Card Hover Effect:**
- Lift up (translateY -8px)
- Cyan glow shadow
- Thumbnail subtle zoom (scale 1.05)

**Modal/Drawer Layout (Problem → Solution → Impact):**

Click card opens modal with detailed view:

```
┌──────────────────────────────────────────────────┐
│  [✕ Close]                                       │
│                                                  │
│  Project Name                                    │
│  ──────────────────────────────────────────      │
│                                                  │
│  Problem:                                        │
│  [Brief description of the problem this solves] │
│                                                  │
│  Solution:                                       │
│  • [Key technical decision 1]                    │
│  • [Key technical decision 2]                    │
│  • [Key technical decision 3]                    │
│                                                  │
│  Impact:                                         │
│  • [Deployment/performance metric]               │
│  • [Scale/complexity achievement]                │
│                                                  │
│  Tech Stack:                                     │
│  [Badge] [Badge] [Badge]                         │
│                                                  │
│  [Live Demo →]  [GitHub Repo →]                  │
└──────────────────────────────────────────────────┘
```

**Modal Interaction:**
- Click card → Modal slides up from bottom (mobile) or fades in center (desktop)
- Dark overlay backdrop with blur
- Smooth animation (300ms)
- ESC key and outside-click to close
- Scroll within modal if content overflows

**Project 1: Requestify** (Full-Stack / Cloud)

**Problem:** DJs need real-time audience interaction for song requests with payment integration and playlist management.

**Solution:**
- Flask REST API for playlist management and request handling
- React frontend with real-time updates
- Stripe integration for paid requests
- Spotify API for music catalog access
- MySQL database with optimized queries for concurrent users

**Impact:**
- Deployed on GCP Compute Engine with Nginx reverse proxy
- Automated CI/CD pipeline for continuous deployment
- Handles concurrent user sessions with low latency

**Tech Stack:** Python, TypeScript, Flask, React, MySQL, GCP Compute Engine, Nginx, Stripe API, Spotify API

---

**Project 2: Machine Learning Trading System** (AI / Algorithmic)

**Problem:** Develop an algorithmic trading system that learns optimal execution strategies while avoiding overfitting on historical data.

**Solution:**
- Event-driven market simulator architecture
- Reinforcement Learning (Q-Learning) for trading agent training
- Multi-variable analysis to optimize execution speed
- Backtesting framework with walk-forward validation to prevent overfitting

**Impact:**
- Trained RL agents that adapt to market conditions
- Event-driven architecture enables realistic simulation of order execution
- Demonstrated profitability on unseen test data

**Tech Stack:** Python, Reinforcement Learning (Q-Learning), Event-Driven Architecture, Pandas

---

**Project 3: Real-Time IoT Sign-Language Translator** (IoT / AWS / Vision)

**Problem:** Enable real-time sign language translation from edge devices to cloud inference with low latency.

**Solution:**
- ESP32 IoT edge device with C++ firmware for camera capture
- AWS EC2 instance running OpenCV and MediaPipe for hand landmark detection
- Python inference pipeline for gesture classification
- Bash automation scripts for EC2 deployment and configuration
- Interactive web UI for real-time translation display

**Impact:**
- Edge-to-cloud pipeline achieves <200ms latency for inference
- Automated EC2 deployment reduces setup time from hours to minutes
- Scalable architecture supports multiple concurrent devices

**Tech Stack:** ESP32 IoT, C++, Python, AWS EC2, OpenCV, MediaPipe, Bash Automation

---

### 5. Interactive CLI Terminal

**Layout:** Fixed at bottom of page (desktop) or collapsible section (mobile).

**Terminal Design:**
```
┌─────────────────────────────────────────────────┐
│ madhav@portfolio:~$ _                           │
│                                                 │
│ Type 'help' for available commands              │
└─────────────────────────────────────────────────┘
```

**Styling:**
- Background: `#0a0e17` (darker than main bg)
- Text: Cyan monospace (`font-mono`)
- Blinking cursor: Cyan underscore
- Height: 200px (desktop), full-screen overlay (mobile)
- Border: Subtle cyan glow on top edge

**Supported Commands:**

| Command    | Action                                              | Output                                          |
|------------|-----------------------------------------------------|-------------------------------------------------|
| `help`     | List all available commands                         | Display command list with descriptions          |
| `about`    | Scroll to About section                             | Brief bio + section scroll                      |
| `skills`   | Scroll to Skills section                            | List top 5 skills + section scroll              |
| `projects` | Scroll to Projects section                          | List project names + section scroll             |
| `contact`  | Scroll to Contact section                           | Display email/LinkedIn + section scroll         |
| `resume`   | Trigger PDF download                                | Download resume PDF                             |
| `clear`    | Clear terminal output                               | Clear screen                                    |
| `whoami`   | Display identity                                    | "Madhav Sagi - Software Engineer"               |

**Unknown Command Handling:**
```
madhav@portfolio:~$ unknown-command
Command not found. Type 'help' for available commands.
```

**Example Output:**
```
madhav@portfolio:~$ skills

Top Skills:
• Python - AI/ML, Backend Development
• Go - System Programming, APIs
• AWS/GCP - Cloud Infrastructure
• React - Frontend Development
• Docker - Containerization

[Scrolling to Skills section...]

madhav@portfolio:~$ _
```

**Preset Command Badges (Above Terminal):**
Quick-click shortcuts:
```
[help] [about] [skills] [projects] [contact]
```

**Mobile Behavior:**
- Collapsible section with "Open Terminal" button
- Opens as full-screen modal with close button
- Same functionality as desktop version

**Implementation (Alpine.js):**
- Input field captures Enter key
- Parse command string (trim, lowercase)
- Match against command list
- Execute action: scroll to section, download file, display output
- Maintain command history (up/down arrow navigation)

---

### 6. Contact Form & Footer

**Contact Section Layout:**
Centered form with background gradient glow effect.

**Form Design:**
```
┌─────────────────────────────────────────┐
│  Get In Touch                           │
│  ─────────────────                      │
│                                         │
│  [Name input field]                     │
│  [Email input field]                    │
│  [Message textarea]                     │
│                                         │
│  [Send Message]                         │
└─────────────────────────────────────────┘
```

**Form Features (Alpine.js):**

**Client-Side Validation:**
- Name: Required, min 2 characters
- Email: Required, valid email format (regex)
- Message: Required, min 10 characters

**Validation Feedback:**
- Real-time validation on blur
- Red border + error message for invalid fields
- Green checkmark for valid fields
- Submit button disabled until all fields valid

**Form Submission:**
- Since this is static export, integrate with Formspree or Web3Forms API
- Alternative: mailto fallback if API integration not preferred
- Loading state on submit (spinner + disabled button)

**Success Animation:**
```
┌─────────────────────────────────────────┐
│          ✓                              │
│     Message Sent!                       │
│                                         │
│  Thanks for reaching out. I'll get     │
│  back to you within 24 hours.          │
│                                         │
│  [Send Another Message]                 │
└─────────────────────────────────────────┘
```

Form morphs into success message with checkmark animation (scale + fade).

---

**Footer Design:**
```
┌────────────────────────────────────────────────┐
│                                                │
│         Madhav Sagi                            │
│         Software Engineer                      │
│                                                │
│  [GitHub] [LinkedIn] [Email] [Tampa, FL]      │
│                                                │
│  Built with Astro + Tailwind CSS              │
│  © 2026 Madhav Sagi                           │
│                                                │
│         [Back to Top ↑]                       │
└────────────────────────────────────────────────┘
```

**Footer Features:**
- Social/contact links with hover glow effect
- Back to Top button:
  - Smooth scroll to hero section
  - Fixed position (bottom-right corner)
  - Appears after scrolling past hero section (Intersection Observer)
  - Mobile-friendly (40px tap target)

---

## Animation & Interaction Patterns

**Scroll-Triggered Animations (Intersection Observer):**
- Sections fade in as they enter viewport (100px threshold)
- Staggered animations for cards/badges (50-100ms delay)
- Timeline drawing animation (SVG stroke)
- Smooth scroll behavior for all anchor links

**Hover States:**
- All interactive elements have clear hover feedback
- Buttons: Scale 1.05 + glow shadow
- Cards: Lift + glow + thumbnail zoom
- Badges: Scale + border brighten
- Links: Color transition + underline

**Loading States:**
- Skeleton loaders for images (prevent layout shift)
- Smooth transitions when content loads

**Accessibility:**
- All interactive elements keyboard-navigable
- Focus states clearly visible (cyan outline)
- ARIA labels for icon-only buttons
- Semantic HTML structure
- Alt text for all images
- Color contrast meets WCAG AA standards

---

## Deployment Strategy

**Build Process:**
1. `npm run build` → Static HTML/CSS/JS output in `dist/`
2. Optimize images (WebP with fallbacks)
3. Minify and bundle assets
4. Generate sitemap and robots.txt

**Hosting Options (Static):**
- GitHub Pages (free, custom domain support)
- Vercel (free tier, automatic deployments)
- Netlify (free tier, form handling built-in)

**CI/CD:**
- GitHub Actions workflow for automatic builds on push to main
- Deploy preview for pull requests

**Performance Optimizations:**
- Image lazy loading (native `loading="lazy"`)
- Critical CSS inlined in `<head>`
- Preload fonts and hero images
- Service worker for offline support (optional)

---

## Success Criteria

**Performance:**
- Lighthouse Performance score: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <2.5s
- Total bundle size: <150KB gzipped (excluding images)

**User Experience:**
- Site loads instantly on both desktop and mobile
- All interactions feel smooth and responsive (60fps)
- Clear visual hierarchy guides user through content
- Contact form successfully submits (or triggers mailto)
- Terminal commands execute correctly
- Project modals display full details

**Visual Quality:**
- Consistent dark mode aesthetic across all sections
- Cyan/violet accent colors create cohesive brand
- Typography hierarchy is clear and readable
- All animations are smooth and purposeful (not distracting)

**Content:**
- All personal information is accurate and up-to-date
- Projects showcase technical depth and impact
- Skills matrix reflects current expertise
- Resume download works correctly

---

## Future Enhancements (Out of Scope for V1)

- Blog section for technical writing
- Dark/light mode toggle
- More project case studies with embedded videos
- Analytics integration (Google Analytics / Plausible)
- Easter eggs in terminal (ASCII art, hidden commands)
- Testimonials/recommendations section
- Interactive resume timeline
- Contact form backend with email notifications

These can be added incrementally after V1 launch.
