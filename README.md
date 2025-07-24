# The Pirith App

A modern, futuristic React Native application dedicated to Buddhist wisdom and practices. Built with TypeScript, Expo, and React Navigation.

## 🎨 Design Philosophy

The app features a Buddhist-inspired color scheme with modern, futuristic UI elements:

- **Primary Colors**: Saffron/Dark Orange (#8B4513), Golden Yellow (#FFD700)
- **Background**: Deep Navy Blue (#1A1A2E), Dark Blue-Gray (#16213E)
- **Accent Colors**: Lotus Pink (#FF69B4), Meditation Purple (#9370DB), Wisdom Green (#20B2AA)

## 📱 Features

### Main Sections

1. **Suthra** - Sacred Buddhist Texts
2. **Pirith** - Protective Chants
3. **Bodhi Pooja** - Enlightenment Ceremonies
4. **Jathaka Katha** - Buddha's Life Stories
5. **Reference** - Buddhist Resources

### Technical Features

- ✨ Modern, scrollable dashboard
- 🎯 Touchable card navigation
- 🌙 Dark theme with Buddhist aesthetics
- 📱 Responsive design
- 🔄 Smooth navigation transitions
- 🎨 Consistent color scheme throughout

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ThePirithApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on different platforms**

   ```bash
   # Android
   npm run android

   # iOS (macOS only)
   npm run ios

   # Web
   npm run web
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── DashboardCard.tsx
├── constants/           # App constants
│   ├── Colors.ts
│   └── ScreenNames.ts
├── navigation/          # Navigation setup
│   └── AppNavigator.tsx
├── screens/            # Screen components
│   ├── Dashboard.tsx
│   ├── SuthraScreen.tsx
│   ├── PirithScreen.tsx
│   ├── BodhiPoojaScreen.tsx
│   ├── JathakaKathaScreen.tsx
│   └── Refference.tsx
├── types/              # TypeScript type definitions
│   └── navigation.ts
├── utils/              # Utility functions
└── services/           # API and external services
```

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation v6
- **Styling**: React Native StyleSheet
- **State Management**: React Hooks
- **Development**: Expo CLI

## 🎯 Key Components

### DashboardCard

A reusable card component with:

- Touchable interaction
- Customizable gradients
- Icon support
- Glow effects
- Buddhist-inspired styling

### Color Scheme

Consistent Buddhist-themed colors:

- Deep, calming backgrounds
- Warm, spiritual accent colors
- High contrast for readability
- Subtle transparency effects

## 📱 Navigation

The app uses React Navigation with a stack navigator:

- Dashboard (Home screen)
- Individual section screens
- Consistent header styling
- Smooth transitions

## 🔧 Development

### Adding New Screens

1. Create a new screen component in `src/screens/`
2. Add the screen name to `src/constants/ScreenNames.ts`
3. Update navigation types in `src/types/navigation.ts`
4. Add the screen to `src/navigation/AppNavigator.tsx`

### Styling Guidelines

- Use the Colors constant for all color values
- Follow the Buddhist theme
- Maintain consistency across components
- Use proper TypeScript types

## 🚀 Deployment

### Building for Production

```bash
# Build for Android
expo build:android

# Build for iOS
expo build:ios

# Build for web
expo build:web
```

### Publishing Updates

```bash
expo publish
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Buddhist community for inspiration
- React Native and Expo teams
- Open source contributors

---

**May all beings be happy** 🙏
