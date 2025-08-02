# ThePirithApp Deployment Setup

This document explains the deployment setup for ThePirithApp, including both the website and mobile app builds.

## Website Deployment

The website is automatically deployed to GitHub Pages when code is pushed to the `main` branch.

### Workflow: `.github/workflows/deploy-website.yml`

- **Trigger**: Push to main branch or manual dispatch
- **Platform**: Ubuntu Latest
- **Build**: React app in `/website` directory
- **Deploy**: GitHub Pages using official GitHub Actions

### Requirements

1. **GitHub Pages enabled** in repository settings
2. **Proper permissions** configured in workflow
3. **Node.js 18** for building

### Manual Deployment

To manually trigger website deployment:

1. Go to GitHub repository
2. Navigate to Actions tab
3. Select "Deploy Website" workflow
4. Click "Run workflow"

## Mobile App Builds

Mobile app builds are triggered manually and require Expo configuration.

### Workflow: `.github/workflows/build-mobile.yml`

- **Trigger**: Manual dispatch only
- **Platforms**: Android (Ubuntu) and iOS (macOS)
- **Build**: Expo EAS Build

### Requirements

1. **Expo Account** with access token
2. **EAS Configuration** (`eas.json`)
3. **Repository Secret**: `EXPO_TOKEN`

### Setting up Expo Token

1. Go to [Expo Settings](https://expo.dev/accounts/[username]/settings/access-tokens)
2. Create a new access token
3. Add it to repository secrets as `EXPO_TOKEN`

### Manual Mobile Build

1. Go to GitHub repository
2. Navigate to Actions tab
3. Select "Build Mobile Apps" workflow
4. Click "Run workflow"
5. Choose platform (Android or iOS)

## Troubleshooting

### Website Deployment Issues

1. **Build fails**: Check Node.js version and dependencies
2. **404 errors**: Verify GitHub Pages is enabled
3. **Permission errors**: Check workflow permissions

### Mobile Build Issues

1. **EXPO_TOKEN missing**: Add token to repository secrets
2. **EAS build fails**: Check `eas.json` configuration
3. **Platform-specific errors**: Verify platform requirements

### Common Fixes

1. **Clear cache**: Delete `node_modules` and reinstall
2. **Update dependencies**: Run `npm update` in website directory
3. **Check logs**: Review GitHub Actions logs for specific errors

## File Structure

```
.github/workflows/
├── deploy-website.yml          # Website deployment
├── build-mobile.yml           # Mobile app builds
├── build-and-deploy.yml.disabled    # Disabled (conflicts)
├── simple-deploy.yml.disabled       # Disabled (conflicts)
└── build-mobile.yml.disabled        # Disabled (conflicts)

website/
├── src/                        # React source code
├── public/                     # Static assets
├── package.json               # Dependencies
└── tailwind.config.js         # Styling configuration

eas.json                       # Expo build configuration
```

## Environment Variables

### Website Build
- `REACT_APP_GITHUB_REPO`: GitHub repository name
- `REACT_APP_LATEST_RELEASE`: Latest release version

### Mobile Build
- `EXPO_TOKEN`: Expo access token (from secrets)

## Support

For deployment issues:
1. Check GitHub Actions logs
2. Verify repository settings
3. Review this documentation
4. Check Expo documentation for mobile builds
