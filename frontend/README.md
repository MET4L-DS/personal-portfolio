# 🚀 Personal Portfolio - Ayanshu Dev Sikdar

A modern, responsive personal portfolio website showcasing my journey as a full-stack MERN developer and MCA student. Built with React, TypeScript, and modern web technologies to demonstrate my skills, projects, and professional experience.

## 🌟 Live Demo

🔗 **[Visit Portfolio](https://your-portfolio-url.com)**

## 📖 Overview

This portfolio represents my professional journey from a self-taught developer to a skilled full-stack engineer. It showcases my expertise in modern web technologies, highlighting personal projects, freelance work, academic achievements, and professional certifications.

## ✨ Features

### 🎨 **Modern Design & User Experience**

-   **Responsive Design**: Seamless experience across all devices and screen sizes
-   **Dark/Light Theme**: Toggle between themes with system preference detection
-   **Smooth Animations**: Powered by Framer Motion for engaging interactions
-   **Glassmorphism Effects**: Modern UI design with beautiful visual effects
-   **Custom Scrollbar**: Styled scrollbar matching the overall design theme

### 🏗️ **Architecture & Performance**

-   **Component-Based**: Modular React components with TypeScript
-   **Barrel Exports**: Clean import structure for better maintainability
-   **Responsive Grid**: Adaptive layouts using Tailwind CSS Grid
-   **Optimized Assets**: Fast loading with Vite build optimization
-   **SEO Ready**: Semantic HTML structure for better search engine visibility

### 📱 **Mobile-First Approach**

-   **Progressive Enhancement**: Mobile-first design scaling up to desktop
-   **Touch-Friendly**: Optimized for touch interactions and mobile navigation
-   **Adaptive Padding**: Responsive spacing that adjusts to screen size
-   **Collapsible Navigation**: Mobile-friendly hamburger menu

## 🛠️ Tech Stack

### **Frontend Framework**

-   **React 19**: Latest React features with concurrent rendering
-   **TypeScript**: Type-safe development with full IntelliSense support
-   **Vite**: Lightning-fast build tool and development server

### **Styling & UI**

-   **Tailwind CSS v4**: Utility-first CSS framework with modern features
-   **ShadCN UI**: High-quality, accessible React components
-   **Radix UI**: Primitive components for complex UI patterns
-   **Framer Motion**: Production-ready motion library for animations

### **Development Tools**

-   **ESLint**: Code linting with modern JavaScript/TypeScript rules
-   **PostCSS**: CSS processing with modern syntax support
-   **Class Variance Authority**: Type-safe component variants
-   **Tailwind Merge**: Efficient Tailwind class merging utility

### **Icons & Assets**

-   **Lucide React**: Beautiful, customizable SVG icons
-   **Custom Graphics**: Optimized SVG assets for better performance

## 📁 Project Structure

```
frontend/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── ui/                 # ShadCN UI components
│   │   │   ├── button.tsx      # Button component
│   │   │   ├── card.tsx        # Card component
│   │   │   ├── badge.tsx       # Badge component
│   │   │   ├── avatar.tsx      # Avatar component
│   │   │   └── separator.tsx   # Separator component
│   │   ├── About.tsx           # About section component
│   │   ├── Certifications.tsx  # Certifications showcase
│   │   ├── Contact.tsx         # Contact information
│   │   ├── Experience.tsx      # Professional experience
│   │   ├── Hero.tsx           # Landing hero section
│   │   ├── Navigation.tsx      # Navigation bar
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── ThemeToggle.tsx     # Dark/light theme toggle
│   │   └── index.ts           # Barrel exports
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx                # Main application component
│   ├── index.css              # Global styles and Tailwind imports
│   ├── main.tsx               # Application entry point
│   └── vite-env.d.ts          # Vite TypeScript definitions
├── components.json             # ShadCN UI configuration
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── tsconfig.app.json          # App-specific TypeScript config
├── tsconfig.node.json         # Node.js TypeScript config
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### **Prerequisites**

-   Node.js (v18 or higher)
-   npm or yarn package manager
-   Git

### **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/MET4L-DS/personal-portfolio.git
cd personal-portfolio/frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**

```
http://localhost:5173
```

### **Build for Production**

```bash
npm run build
```

### **Preview Production Build**

```bash
npm run preview
```

## 📋 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build the app for production             |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint to check code quality         |

## 🎯 Portfolio Sections

### **🏠 Hero Section**

-   Animated introduction with gradient text effects
-   Professional tagline and call-to-action buttons
-   Floating animation elements for visual appeal
-   Responsive typography scaling

### **👨‍💻 About Section**

-   Educational background and professional journey
-   Technical skills with animated badges
-   Personal philosophy and approach to development
-   Interactive cards with hover effects

### **💼 Projects Section**

-   Featured projects with detailed descriptions
-   Technology stack badges for each project
-   Live demo and GitHub repository links
-   Hover animations and interactive elements

### **🏢 Experience Section**

-   Professional and freelance experience
-   Project achievements and impact
-   Technologies used and skills demonstrated
-   Client testimonials and project outcomes

### **🏆 Certifications Section**

-   HackerRank certifications with skill breakdowns
-   Interactive certification cards
-   Skill progression visualization
-   Professional development timeline

### **📧 Contact Section**

-   Multiple contact methods
-   Social media links
-   Professional call-to-action
-   Contact form integration ready

## 🎨 Design Philosophy

### **Color Scheme**

-   **Primary**: Modern blue gradient (`from-primary to-purple-600`)
-   **Secondary**: Muted backgrounds with proper contrast
-   **Accent**: Strategic use of brand colors for highlights
-   **Dark Mode**: Seamless dark theme with proper color adaptation

### **Typography**

-   **Headers**: Bold, scalable typography with proper hierarchy
-   **Body**: Readable font sizes with optimal line height
-   **Code**: Monospace fonts for technical content
-   **Responsive**: Fluid typography that scales with screen size

### **Spacing & Layout**

-   **Consistent Grid**: 8px base unit for consistent spacing
-   **Responsive Padding**: Adaptive padding based on screen size
-   **Visual Hierarchy**: Clear content structure with proper spacing
-   **Accessibility**: WCAG compliant spacing and touch targets

## 🔧 Customization

### **Theme Configuration**

```typescript
// Update colors in tailwind.config.js
export default {
	theme: {
		extend: {
			colors: {
				primary: "your-primary-color",
				secondary: "your-secondary-color",
			},
		},
	},
};
```

### **Content Updates**

-   **Personal Information**: Update in respective component files
-   **Projects**: Modify projects array in `Projects.tsx`
-   **Experience**: Update experience data in `Experience.tsx`
-   **Social Links**: Update URLs in `Navigation.tsx` and `Contact.tsx`

### **Component Customization**

-   **ShadCN Components**: Customize in `components/ui/` directory
-   **Animations**: Modify Framer Motion variants
-   **Responsive Breakpoints**: Adjust Tailwind responsive classes

## 🌐 Deployment

### **Vercel (Recommended)**

```bash
npm install -g vercel
vercel --prod
```

### **Netlify**

```bash
npm run build
# Upload dist/ folder to Netlify
```

### **GitHub Pages**

```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 🔮 Future Enhancements

### **Planned Features**

-   [ ] Blog section with MDX support
-   [ ] Project filtering and search
-   [ ] Contact form with email integration
-   [ ] Analytics dashboard
-   [ ] Multi-language support
-   [ ] Progressive Web App (PWA) features

### **Technical Improvements**

-   [ ] Server-side rendering (SSR)
-   [ ] Performance optimizations
-   [ ] Enhanced SEO features
-   [ ] Accessibility improvements
-   [ ] Testing implementation

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-   **ShadCN UI**: For the beautiful, accessible component library
-   **Framer Motion**: For smooth, professional animations
-   **Tailwind CSS**: For the utility-first styling approach
-   **React Team**: For the amazing framework
-   **Vite**: For the lightning-fast development experience

## 📬 Contact

**Ayanshu Dev Sikdar**

-   **Email**: ayanshu.dev@example.com
-   **LinkedIn**: [linkedin.com/in/ayanshu-dev-sikdar](https://linkedin.com/in/ayanshu-dev-sikdar)
-   **GitHub**: [github.com/MET4L-DS](https://github.com/MET4L-DS)
-   **Portfolio**: [your-portfolio-url.com](https://your-portfolio-url.com)

---

**Built with ❤️ by Ayanshu Dev Sikdar** | **Powered by React, TypeScript, and Modern Web Technologies**
