import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Landing Page' | 'UI Component' | 'Full Site' | 'Dashboard' | 'Featured';
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  problem?: string;
  solution?: string;
  outcome?: string;
}

export interface Service {
  title: string;
  description: string;
  // Fix: Changed from JSX.Element to React.ReactNode and imported React to resolve namespace issue
  icon: React.ReactNode;
  benefits: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}
