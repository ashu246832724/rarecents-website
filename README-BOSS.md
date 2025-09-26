# Rarecents Assurance Private Limited - Website

## Project Overview
A modern, responsive website for Rarecents Assurance Private Limited built with React and Vite. Features a professional light theme, mobile-responsive design, and comprehensive business information.

## Quick Start (5 minutes)

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation & Running
1. **Extract the project:**
   ```bash
   tar -xzf rarecents-website.tar.gz
   cd rarecents-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Local: http://localhost:5173/
   - Network: Check terminal for LAN URLs

## Production Deployment

### Option A: Build and Preview Locally
```bash
npm run build
npm run preview
```

### Option B: Deploy to Web Hosting
1. Build: `npm run build`
2. Upload the `dist/` folder to any web server
3. Point domain to the uploaded files

### Option C: Deploy to Free Hosting Services

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Website Features

### Pages
- **Home:** Company overview and key services
- **About:** Vision, mission, and company information
- **Services:** Comprehensive service offerings
- **Leadership:** Team profiles with photos
- **Clients:** Client portfolio and testimonials
- **Contact:** Contact information and inquiry form

### Technical Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern React with routing
- ✅ Professional light theme
- ✅ Fast loading with Vite
- ✅ SEO-friendly structure
- ✅ Contact form ready for backend integration

### Customization
- **Colors:** Edit `src/styles.css` (CSS variables at top)
- **Content:** Update pages in `src/pages/`
- **Images:** Add to `src/assets/` and reference in components
- **Logo:** Replace logo in `src/components/Layout.jsx`

## File Structure
```
rarecents-site/
├── dist/                    # Production build (upload this)
├── src/
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── styles.css         # Global styles
│   └── main.jsx          # App entry point
├── package.json           # Dependencies
├── vite.config.js        # Build configuration
└── README-BOSS.md        # This file
```

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

## Support
- **Developer:** [Your contact info]
- **Company:** Rarecents Assurance Private Limited
- **Email:** rarecentsapl@gmail.com
- **Phone:** +91 8574955848

## Notes
- The website is production-ready
- All content is based on provided company information
- Images are currently using Google Drive links (may need local hosting for production)
- Contact form needs backend integration for full functionality

---
*Built with React, Vite, and modern web technologies*



