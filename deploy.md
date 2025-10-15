# Deployment Instructions

## Quick Deploy to GitHub Pages

1. **Create a new repository on GitHub** (e.g., `autoviz-iframe-app`)

2. **Initialize git and push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AutoViz AR React App"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/autoviz-iframe-app.git
   git push -u origin main
   ```

3. **Install gh-pages and deploy**:
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Update package.json** with homepage and deploy scripts:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/autoviz-iframe-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

6. **Your app will be live at**: `https://YOUR_USERNAME.github.io/autoviz-iframe-app`

## Alternative: Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Drag and drop the `build` folder** to [Netlify Drop](https://app.netlify.com/drop)

3. **Or connect your GitHub repo** to Netlify for automatic deployments

## Alternative: Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to complete deployment

## Important Notes for AR Deployment

- **HTTPS Required**: AR experiences require HTTPS in production
- **Mobile Testing**: Test on actual mobile devices for AR functionality
- **Camera Permissions**: Ensure proper permissions are granted
- **8th Wall Project**: Make sure your 8th Wall project is publicly accessible
