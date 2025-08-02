# ThePirithApp Website

This is the React-based download website for ThePirithApp. It automatically fetches the latest releases from GitHub and provides download links for Android and iOS versions.

## Features

- 🎨 **Modern UI**: Built with React and Tailwind CSS
- 📱 **Responsive Design**: Works perfectly on all devices
- 🔄 **Auto-Updating**: Automatically fetches latest releases
- 📥 **Direct Downloads**: One-click download for APK and IPA files
- 📋 **Installation Guide**: Clear instructions for both platforms

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. Install dependencies:

```bash
cd website
npm install
```

2. Start development server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

### Environment Variables

Create a `.env` file in the website directory:

```env
REACT_APP_GITHUB_REPO=akindukodithuwakku/PirithApp
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme.

### Content

Edit `src/App.js` to modify:

- App description
- Features list
- Installation instructions
- Content preview

### Styling

The website uses Tailwind CSS for styling. All styles are in `src/index.css` and component classes.

## Deployment

The website is automatically deployed to GitHub Pages via GitHub Actions when you push to the main branch.

## Structure

```
website/
├── public/           # Static assets
├── src/              # React components
│   ├── App.js        # Main component
│   ├── index.js      # Entry point
│   └── index.css     # Global styles
├── package.json      # Dependencies
└── tailwind.config.js # Tailwind configuration
```
