# Rarecents Assurance Private Limited - Modern Website

A modern, responsive website for Rarecents Assurance Private Limited built with React and a professional design system inspired by Grant Thornton Bharat's layout structure.

## 🎨 Design Features

### Modern Professional Design
- **Clean, corporate aesthetic** with a professional blue-gray color palette
- **Fully responsive design** that works seamlessly on desktop, tablet, and mobile
- **Day/Night theme toggle** with smooth transitions
- **Modern typography** using Inter font family
- **Subtle animations** and smooth scrolling effects

### Color Palette
- **Primary**: Professional blue-gray tones
- **Accent**: Vibrant blue (#3b82f6) for CTAs and highlights
- **Supporting**: Emerald green for success states
- **Dark Mode**: Inverted color scheme with proper contrast

## 🚀 Technology Stack

- **React 19** with modern hooks and functional components
- **React Router** for client-side routing
- **Custom CSS** with CSS variables for theming
- **Vite** for fast development and building
- **Modern ES6+** JavaScript features

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Optimized touch interactions
- Collapsible navigation menu
- Stacked layouts on smaller screens
- Readable typography at all sizes

## 🎯 Key Features

### Navigation
- **Sticky header** with backdrop blur effect
- **Mobile hamburger menu** with smooth animations
- **Active page indicators** with underline animations
- **Theme toggle** in header

### Pages
1. **Home** - Hero section with services overview
2. **About** - Company vision, mission, and values
3. **Services** - Comprehensive service offerings
4. **Leadership** - Team profiles with photos
5. **Clients** - Client portfolio and testimonials
6. **Contact** - Contact form and information

### Components
- **ModernHeader** - Navigation with theme toggle
- **ModernFooter** - Company information and links
- **ModernLayout** - Main layout wrapper
- **Card components** - Consistent styling across pages

## 🛠️ Development

### Prerequisites
- Node.js 20+ (recommended)
- npm or yarn package manager

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The development server runs on `http://localhost:5173` with:
- Hot module replacement (HMR)
- Network access for mobile testing
- Automatic browser refresh

## 🚀 Deployment

### AWS Amplify
The project is configured for AWS Amplify deployment with:
- **Node 20** runtime specified in `amplify.yml`
- **Build commands** for React/Vite
- **Artifact configuration** for SPA routing

### Build Configuration
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - nvm install 20
        - nvm use 20
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ModernHeader.jsx      # Navigation component
│   ├── ModernFooter.jsx     # Footer component
│   └── ModernLayout.jsx      # Layout wrapper
├── pages/
│   ├── ModernHome.jsx        # Home page
│   ├── ModernAbout.jsx       # About page
│   ├── ModernServices.jsx    # Services page
│   ├── ModernLeadership.jsx  # Leadership page
│   ├── ModernClients.jsx     # Clients page
│   └── ModernContact.jsx     # Contact page
├── styles/
│   └── modern.css            # Modern design system
├── assets/
│   └── Bhaskar.jpeg          # Leadership photos
├── ModernApp.jsx             # Main app component
└── main.jsx                  # Entry point
```

## 🎨 Design System

### CSS Variables
The design system uses CSS variables for consistent theming:

```css
:root {
  /* Light Theme */
  --primary-50: #f8fafc;
  --primary-900: #0f172a;
  --accent-blue: #3b82f6;
  --text-primary: var(--primary-900);
  --bg-primary: var(--primary-50);
}

[data-theme="dark"] {
  /* Dark Theme */
  --bg-primary: var(--primary-900);
  --text-primary: var(--primary-50);
}
```

### Component Classes
- **Cards**: `.card` with hover effects
- **Buttons**: `.btn`, `.btn-primary`, `.btn-outline`
- **Typography**: Responsive text sizes
- **Layout**: Grid and flexbox utilities

## 🔧 Customization

### Theme Colors
Update CSS variables in `src/styles/modern.css`:

```css
:root {
  --accent-blue: #your-color;
  --accent-emerald: #your-color;
}
```

### Content Updates
- **Text content**: Update directly in component files
- **Images**: Replace in `src/assets/` directory
- **Links**: Update href attributes in components

### Image Management

#### Replacing Images
The website uses copyright-free images from Unsplash with automatic carousel functionality. To replace images:

1. **Find new images**: Use Unsplash, Pexels, or other royalty-free sources
2. **Update image URLs**: Replace URLs in component files
3. **Maintain aspect ratio**: Use 500x300px or similar proportions
4. **Test responsiveness**: Ensure images work on all devices

#### Image Locations by Section:

**Home Page Services** (`src/pages/ModernHome.jsx`):
- Accounting & Bookkeeping: Lines 36-40
- Taxation & Compliance: Lines 52-56  
- Audit & Assurance: Lines 68-72

**About Page Values** (`src/pages/ModernAbout.jsx`):
- Integrity: Lines 123-127
- Excellence: Lines 139-143
- Partnership: Lines 155-159

**Clients Page Trust Indicators** (`src/pages/ModernClients.jsx`):
- Proven Track Record: Lines 99-103
- Diverse Expertise: Lines 115-119
- Long-term Partnerships: Lines 131-135

**Contact Page Services** (`src/pages/ModernContact.jsx`):
- Quick Response: Lines 165-169
- Free Consultation: Lines 181-185
- Expert Team: Lines 197-201

#### Image Carousel Component
The `ImageCarousel` component automatically rotates through multiple images every 3 seconds. To customize:

```jsx
<ImageCarousel 
  images={[
    'https://your-image-1.jpg',
    'https://your-image-2.jpg',
    'https://your-image-3.jpg'
  ]}
  alt="Descriptive alt text"
  className="w-full h-48 object-cover rounded-lg mb-4"
/>
```

#### Single Image (No Carousel)
To use a single static image instead of carousel:

```jsx
<img 
  src="https://your-image.jpg" 
  alt="Descriptive alt text"
  className="w-full h-48 object-cover rounded-lg mb-4"
/>
```

## 📊 Performance

### Optimizations
- **Lazy loading** for images
- **CSS variables** for efficient theming
- **Minimal JavaScript** bundle
- **Optimized fonts** with Google Fonts
- **Responsive images** with proper sizing

### SEO Features
- **Meta tags** for social sharing
- **Structured data** ready
- **Semantic HTML** elements
- **Accessible** navigation and forms

## 🧪 Testing

### Local Testing
```bash
# Start dev server
npm run dev

# Test on mobile
# Use network URL: http://[your-ip]:5173
```

### Mobile Testing
- Use network URL for mobile devices
- Test responsive breakpoints
- Verify touch interactions
- Check theme toggle functionality

## 📝 Content Management

All content is preserved from the original website:
- **Company information** unchanged
- **Service descriptions** maintained
- **Leadership profiles** with photos
- **Contact details** preserved
- **Client lists** intact

## 🚀 Deployment Instructions

1. **Commit changes** to Git repository
2. **Push to main branch** to trigger Amplify build
3. **Monitor build** in AWS Amplify console
4. **Test live site** after deployment
5. **Verify mobile responsiveness**

## 📞 Support

For technical support or customization requests:
- **Email**: rarecentsapl@gmail.com
- **Phone**: +91 8574955848
- **Location**: Lucknow, Uttar Pradesh, India

---

**Built with ❤️ for Rarecents Assurance Private Limited**
