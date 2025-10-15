# AutoViz AR Wheel Experience

A simple React application that provides a beautiful interface to view AutoViz wheels in Augmented Reality using 8th Wall technology.

## Features

- 🎯 **Simple AR Button**: One-click access to the AR experience
- 🎨 **Beautiful UI**: Modern, responsive design with gradient backgrounds
- 📱 **Mobile Optimized**: Works perfectly on all devices
- 🚗 **Wheel Information**: Displays wheel specifications and features
- 🔗 **Direct Integration**: Opens 8th Wall AR experience in new tab

## AR Experience

- **Original Experience**: [https://old.autoviz.io/ar.php](https://old.autoviz.io/ar.php)
- **8th Wall Project**: [https://autoviz.8thwall.app/wheel-ar/](https://autoviz.8thwall.app/wheel-ar/)

## Wheel Details

- **Brand**: Fikse
- **Size**: 17" x 10.5"
- **Model**: 20272
- **Finish**: Custom

## How to Use

1. **Click "View in AR"** button
2. **Allow popups** when prompted
3. **Grant camera permissions** in the AR experience
4. **Follow the AR instructions**:
   - Stand at the side of your vehicle
   - Carefully align the guideline
   - Place wheels and enjoy!

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Open your browser** to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App

## Project Structure

```
autoviz-ar-viewer/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # Styling
│   └── index.js           # React entry point
├── package.json           # Dependencies
└── README.md             # This file
```

## AR Tips

- **Use in bright, open areas** for best results
- **Keep your vehicle in the camera frame**
- **Avoid quick or sudden movements**
- **Ensure stable internet connection**
- **Use modern browsers** (Chrome/Safari recommended)

## Troubleshooting

### AR Not Loading
- Check if popups are blocked in your browser
- Ensure you have a stable internet connection
- Try refreshing the page and clicking the button again

### Camera Issues
- Grant camera permissions when prompted
- Make sure you're using HTTPS in production
- Test on actual mobile devices for best AR experience

### Browser Compatibility
- Chrome (recommended)
- Safari (iOS/macOS)
- Firefox (limited AR support)
- Edge (Windows)

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/autoviz-ar-viewer",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## Technologies Used

- **React 18** - Frontend framework
- **8th Wall** - AR technology
- **CSS3** - Styling with gradients and animations
- **HTML5** - Semantic markup

## License

MIT License - feel free to use and modify as needed.

## Support

For issues related to:
- **This React App**: Check this repository
- **AR Experience**: Contact 8th Wall support
- **AutoViz**: Contact AutoViz team

---

**Enjoy viewing your wheels in Augmented Reality!** 🚗✨
