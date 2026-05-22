# Alex Fernando Portfolio - React App

A modern, fully-responsive portfolio website built with React, Vite, and custom CSS animations.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with theme toggle
│   │   ├── ScrollIndicator.jsx # Scroll progress indicator
│   │   └── Footer.jsx          # Footer component
│   ├── sections/
│   │   ├── Hero.jsx            # Hero/about section
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Education.jsx       # Education & certifications
│   │   └── Contact.jsx         # Contact information
│   ├── hooks/
│   │   └── useScroll.js        # Custom scroll hooks
│   ├── styles/
│   │   └── globals.css         # Global styles & animations
│   ├── data.js                 # Portfolio content data
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # React entry point
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Features

- **Dark/Light Theme Toggle** - Smooth theme switching with CSS variables
- **Smooth Animations** - Intersection Observer for scroll animations
- **Responsive Design** - Mobile-first approach with media queries
- **Active Navigation** - Dynamic nav highlighting based on scroll position
- **Scroll Progress Bar** - Visual scroll depth indicator
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Performance Optimized** - Built with Vite for fast builds and HMR

## 📝 Customization

### Updating Portfolio Content

Edit `src/data.js` to update:
- Personal information
- Skills
- Work experience
- Projects
- Education
- Certifications
- Contact information

### Styling

Global styles are in `src/styles/globals.css`. The design uses CSS custom properties (variables) for easy theming:
- `--bg`, `--bg2`, `--bg3` - Background colors
- `--accent`, `--accent2` - Accent colors
- `--text`, `--text2` - Text colors
- `--border`, `--card` - Border and card colors

## 🔗 Social Links

Update contact links in Contact.jsx to point to real URLs. Currently they're placeholders.

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **CSS3** - Styling & animations
- **JavaScript ES6+** - Modern JavaScript

## 🎯 Performance

- Intersection Observer for lazy animation triggers
- CSS transitions for smooth animations
- Optimized asset delivery with Vite
- Minified production build

## 📄 License

This project is open source and available for personal use.
