
import React from 'react';
import { Project, Service, PricingTier } from './types';

export const COLORS = {
  primary: '#2563EB',
  bg: {
    light: '#FFFFFF',
    dark: '#000000'
  },
  text: {
    light: '#000000',
    dark: '#FFFFFF'
  },
  card: {
    light: '#F3F4F6',
    dark: '#0A0A0A'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Previous Portfolio",
    description: "My first professional portfolio project. Built with React and Tailwind CSS—a clean, minimalist design showcasing early work in web development. Features smooth animations, responsive design, and a focus on simplicity and user experience.",
    category: "Featured",
    image: "/image/peng.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://oche-wziz.vercel.app/",
    githubUrl: "https://github.com/XiocheX",
    problem: "Needed a portfolio that demonstrated frontend skills while remaining fast and accessible.",
    solution: "Built a lightweight React app with smooth animations, responsive design, and optimized performance. Used Framer Motion for engaging interactions without sacrificing speed.",
    outcome: "Portfolio received 500+ visits, generated multiple client inquiries. Page load time: 1.2s. Lighthouse score: 95+."
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "Next-generation web application. Building with modern tech stack for speed and scalability. A full-featured platform with real-time updates and advanced interactions.",
    category: "Featured",
    image: "/image/cat1.jpg",
    technologies: ["Next.js", "TypeScript", "Web APIs"],
    liveUrl: "#",
    githubUrl: "https://github.com/XiocheX",
    problem: "Traditional approach to app building leads to slow, unmaintainable code. Need a scalable foundation.",
    solution: "Building with Next.js App Router, TypeScript for type safety, and modern React patterns. Focus on performance and developer experience.",
    outcome: "Will handle 10k+ concurrent users. Target: 100ms interaction response time."
  },
  {
    id: 3,
    title: "In Development",
    description: "Experimental interactive web experience. Pushing boundaries with cutting-edge animations and 3D graphics. A showcase of what's possible with modern web technologies.",
    category: "Featured",
    image: "/image/cat2.jpg",
    technologies: ["WebGL", "Three.js", "GSAP"],
    liveUrl: "#",
    githubUrl: "https://github.com/XiocheX",
    problem: "Most websites are static and boring. How do we make the web truly immersive?",
    solution: "Combining WebGL/Three.js for 3D graphics, GSAP for advanced animations, and careful performance optimization to keep 60fps.",
    outcome: "Proof of concept for next-gen interactive storytelling. Works smoothly on mobile and desktop."
  },
  {
    id: 4,
    title: "Archive",
    description: "Past implementations and learning projects. Early experiments in web development, backend systems, and full-stack applications. Where everything started.",
    category: "Featured",
    image: "/image/cat4.jpg",
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/XiocheX",
    problem: "Started with zero experience. How to quickly learn full-stack development?",
    solution: "Built 20+ projects across different domains: dashboards, APIs, databases. Each project taught new concepts about scalability and user experience.",
    outcome: "Strong foundation in full-stack architecture, debugging, and shipping products under pressure."
  }
];

export const SERVICES: Service[] = [
  {
    title: "Landing Pages That Convert",
    description: "I build high-performance landing pages designed specifically to drive user action and increase your bottom line.",
    benefits: ["SEO Optimized", "High Speed Scores", "Conversion Focused"],
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Custom UI Development",
    description: "Pixel-perfect implementations of your designs with clean, maintainable, and scalable component architectures.",
    benefits: ["Accessible UI", "Design System Driven", "Modern Stack"],
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
  },
  {
    title: "Fluid Animations",
    description: "Enhancing user experience with subtle micro-interactions and complex storytelling animations using Framer Motion.",
    benefits: ["Smooth Transitions", "Scroll Interactions", "Interactive Feedback"],
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Bug Fixes & Speed",
    description: "Specialized performance optimization and technical debt cleanup to ensure your app stays fast and reliable.",
    benefits: ["Performance Audits", "React Optimization", "Responsive Fixes"],
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  }
];

export const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for personal projects or simple product launches.",
    features: ["Single Page Landing Page", "Responsive Design", "Basic Animations", "SEO Friendly", "3-5 Days Delivery"]
  },
  {
    name: "Professional",
    price: "$649",
    description: "Comprehensive solution for growing businesses.",
    recommended: true,
    features: ["Up to 5 Pages", "Advanced Interactions", "CMS Integration", "Performance Optimization", "7-10 Days Delivery"]
  },
  {
    name: "Premium",
    price: "$1199+",
    description: "Complex web applications and custom dashboard UI.",
    features: ["Custom Web App Development", "State Management", "API Integrations", "Full Design System", "Custom Quote Needed"]
  }
];
