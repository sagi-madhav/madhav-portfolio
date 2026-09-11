# Madhav Sagi - Portfolio Website

A modern, interactive portfolio website showcasing AI and full-stack engineering projects. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **3D Particle Background**: Interactive Three.js particle field that responds to mouse movement
- **Dynamic Hero Section**: Animated role transitions and gradient text effects
- **Interactive Timeline**: Tabbed education and experience sections with smooth transitions
- **Skills Matrix**: Filterable skill categories with animated progress bars
- **Project Showcase**: Modal-based project details with category filtering
- **CLI Terminal**: Interactive command-line interface for exploring profile information
- **Contact Form**: Animated form with validation and success feedback
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Theme**: Custom dark mode with neon cyan and violet accents
- **Smooth Animations**: Framer Motion animations throughout

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + @react-three/fiber
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx            # Hero section with 3D particles
│   ├── About.tsx           # Education & experience timeline
│   ├── Skills.tsx          # Interactive skills matrix
│   ├── Projects.tsx        # Project cards with modal details
│   ├── Terminal.tsx        # CLI terminal interface
│   ├── Contact.tsx         # Contact form and info
│   ├── BackToTop.tsx       # Scroll-to-top button
│   └── ParticleBackground.tsx  # Three.js particle field
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design System

### Colors
- **Background**: `#0b0f19` (deep slate)
- **Primary**: `#00f2fe` (neon cyan)
- **Secondary**: `#a78bfa` (violet)
- **Accent**: `#8b5cf6` (purple glow)

### Typography
- **Sans**: Inter
- **Mono**: JetBrains Mono

### Animations
- Fade in, slide up, glow pulse, float
- Smooth page transitions with Framer Motion
- Interactive hover states on all clickable elements

## 🔧 Customization

### Update Personal Info
Edit the data in each component file:
- `Hero.tsx`: Name, roles, tagline, contact
- `About.tsx`: Education and experience arrays
- `Skills.tsx`: Skills array with categories
- `Projects.tsx`: Projects array with details

### Update Metadata
Edit `src/app/layout.tsx` to change SEO metadata, title, and description.

### Customize Colors
Edit `tailwind.config.ts` to modify the color scheme.

## 📱 Sections

1. **Hero**: Dynamic animated hero with particle background
2. **About**: Education and experience with tabbed interface
3. **Skills**: Filterable technical skills with progress indicators
4. **Projects**: Featured projects with detailed modal views
5. **Terminal**: Interactive CLI for exploring profile
6. **Contact**: Contact form and social links

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Run
- Any Node.js hosting

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 📧 Contact

- **Email**: sscholarssagi@gmail.com
- **LinkedIn**: [linkedin.com/in/madhav-sagi](https://linkedin.com/in/madhav-sagi)
- **GitHub**: [github.com/madhavsagi](https://github.com/madhavsagi)

---

Built with ❤️ by Madhav Sagi
