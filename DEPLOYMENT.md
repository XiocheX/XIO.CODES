# XIO Portfolio - Vercel Deployment Guide

This is a modern, high-performance portfolio built with **Vite + React + TypeScript**.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Project Structure

```
├── index.html              # Entry HTML file
├── index.tsx               # React app entry point
├── App.tsx                 # Main app component
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies & scripts
├── vercel.json             # Vercel deployment config
├── .vercelignore           # Files to ignore in deployment
├── components/             # React components
├── sections/               # Page sections
├── context/                # React context
├── public/                 # Static assets
└── styles/                 # CSS files
```

## 🚀 Vercel Deployment

This project is optimized for Vercel deployment. All necessary configuration files are included:

### Configuration Files

- **vercel.json** - Deployment configuration with framework detection
- **.vercelignore** - Files excluded from deployment
- **package.json** - Build scripts optimized for Vercel

### One-Click Deploy

Click the button below to deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/XiocheX/XIO.CODES)

### Manual Deployment Steps

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the Vite framework

3. **Configure Environment Variables** (if needed)
   - Go to project settings → Environment Variables
   - Add any required variables (none needed for basic deployment)
   - Click "Deploy"

### Build Settings (Auto-Detected)

- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install` (auto-detected)

## 🔧 Environment Variables

For local development, create a `.env.local` file:

```env
VITE_API_URL=http://localhost:3000
```

For production on Vercel, add variables via the dashboard:
- Dashboard → Settings → Environment Variables

## 📊 Performance Optimizations

This project includes several performance optimizations:

- **Code Splitting** - Vendor, animation libraries separated
- **Minification** - JavaScript minified with terser
- **Tree Shaking** - Unused code removed during build
- **Caching Headers** - Configured in vercel.json
- **Security Headers** - XSS, clickjacking protection enabled

## 🚨 Troubleshooting

### Vercel Not Detecting Framework

If Vercel shows "Unable to detect framework":

1. Ensure `vercel.json` exists in root directory
2. Check that `package.json` has correct build script
3. Verify `vite.config.ts` is in root directory
4. Clear Vercel cache: Project Settings → Deployments → Clear Cache

### Build Failing

Check the Vercel deployment logs:
1. Go to Vercel dashboard
2. Click project → Deployments
3. Click "Latest" deployment
4. Scroll to "Build Logs" tab

Common issues:
- Missing `node_modules` - Run `npm install` locally first
- Node version mismatch - Vercel uses Node 18 by default
- Environment variables missing - Add to Vercel dashboard

### Port Already in Use

If `npm run dev` fails due to port 3000:

```bash
# Use different port
vite --port 3001
```

## 📦 Dependencies

- **React 19** - UI library
- **React DOM 19** - React web rendering
- **Framer Motion** - Animation library
- **Vite 6** - Build tool & dev server
- **TypeScript 5** - Type safety
- **Tailwind CSS** - Styling (via CDN)

## 🔐 Security

- Security headers configured in `vercel.json`
- XSS protection enabled
- Clickjacking protection enabled
- Content-Type detection prevention
- Strict referrer policy

## 📈 Monitoring

After deployment, monitor your site with:

- [Vercel Analytics](https://vercel.com/analytics)
- [Web Vitals](https://web.dev/vitals/)
- Google PageSpeed Insights

## 🆘 Support

For issues with:

- **Vite:** [Vite Docs](https://vitejs.dev)
- **React:** [React Docs](https://react.dev)
- **Vercel:** [Vercel Docs](https://vercel.com/docs)
- **TypeScript:** [TypeScript Docs](https://www.typescriptlang.org)

---

**Framework:** Vite + React + TypeScript  
**Hosting:** Vercel  
**Status:** Production Ready ✅
