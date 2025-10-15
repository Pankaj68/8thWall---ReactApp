# AutoViz AR Experience - React App

A simple React application that loads the 8th Wall AR wheel experience into an iFrame, providing a seamless AR experience for AutoViz wheel visualization.

## Features

- 🎯 **iFrame Integration**: Loads the 8th Wall AR experience seamlessly
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices
- 🔄 **Loading States**: Smooth loading animations and error handling
- 🎨 **Modern UI**: Beautiful gradient background and professional styling
- 📱 **Mobile Optimized**: Full-screen AR experience on mobile devices

## 8th Wall Project

This app loads the 8th Wall AR experience from: [https://autoviz.8thwall.app/wheel-ar/](https://autoviz.8thwall.app/wheel-ar/)

The original AutoViz experience can be found at: [https://old.autoviz.io/ar.php](https://old.autoviz.io/ar.php)

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd autoviz-iframe-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
autoviz-iframe-app/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── App.js             # Main React component with iFrame
│   ├── App.css            # Styling for the application
│   └── index.js           # React DOM entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Key Features

### iFrame Integration
The app uses a secure iFrame to load the 8th Wall AR experience with proper permissions for:
- Camera access
- Microphone access
- Accelerometer and gyroscope sensors
- XR spatial tracking

### Responsive Design
- Desktop: Full-screen AR experience with header and footer
- Mobile: Optimized for portrait and landscape orientations
- Tablet: Adaptive layout for medium-sized screens

### Error Handling
- Loading states with spinner animation
- Error messages with retry functionality
- Graceful fallbacks for network issues

## Browser Compatibility

This app is optimized for modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- WebXR APIs (for AR functionality)
- iFrame sandboxing

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/autoviz-iframe-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Deploy to Netlify/Vercel
Simply connect your GitHub repository and deploy the build folder.

## Configuration

### Changing the 8th Wall URL
To load a different 8th Wall experience, update the `eighthWallUrl` constant in `src/App.js`:

```javascript
const eighthWallUrl = 'https://your-8th-wall-project.app/';
```

### Customizing Styling
Modify `src/App.css` to customize:
- Colors and gradients
- Layout and spacing
- Mobile responsiveness
- Loading animations

## Troubleshooting

### Common Issues

1. **AR not loading**: Ensure the 8th Wall project URL is correct and accessible
2. **Camera permissions**: Make sure the site is served over HTTPS in production
3. **Mobile issues**: Test on actual devices as AR requires real sensors

### Browser Console
Check the browser console for any JavaScript errors or network issues.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the package.json file for details.

## Support

For issues related to:
- **React App**: Check this repository's issues
- **8th Wall AR**: Visit [8th Wall documentation](https://docs.8thwall.com/)
- **AutoViz**: Contact the AutoViz team

## Acknowledgments

- Built with React and Create React App
- AR experience powered by 8th Wall
- Original AutoViz wheel experience
