# Personal Portfolio Website

A modern, responsive personal portfolio website featuring Home, About, Contact, and Photos pages.

## Features

- 🏠 **Home Page** - Welcome section with hero content and feature highlights
- 👤 **About Page** - Personal information, skills, and expertise
- 📧 **Contact Page** - Contact information and message form
- 📸 **Photos Page** - Interactive photo gallery with modal view

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla JS)
- Responsive Design

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Customization

Before deploying, make sure to customize:

1. **Personal Information:**
   - Replace "Your Name" with your actual name in all HTML files
   - Update contact information in `contact.html`
   - Add your social media links (LinkedIn, GitHub, etc.)

2. **Photos:**
   - Edit the `photos` array in `script.js` to add your own photos
   - Replace placeholder URLs with your actual image URLs
   - Update captions for each photo

3. **Content:**
   - Update the About page with your personal story
   - Modify the skills section with your expertise
   - Customize the feature cards on the Home page

4. **Styling:**
   - Adjust colors in `styles.css` by modifying CSS variables in the `:root` selector
   - Change fonts, spacing, or layout as needed

## How to Push to GitHub and Deploy

### Step 1: Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Sign up for a free account

### Step 2: Create a New Repository

1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name your repository (e.g., `portfolio` or `yourname-portfolio`)
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (since we already have files)
6. Click "Create repository"

### Step 3: Initialize Git and Push Your Code

Open your terminal/command prompt in the project folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You'll be prompted to enter your GitHub username and password (or personal access token).

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 5: Access Your Live Website

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example, if your username is `johndoe` and repository is `portfolio`:
```
https://johndoe.github.io/portfolio/
```

## Updating Your Portfolio

Whenever you make changes:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

Your GitHub Pages site will automatically update within a few minutes!

## Troubleshooting

### GitHub Pages not showing?
- Make sure your repository is **Public**
- Check that you selected the correct branch (`main`) in Settings > Pages
- Wait 5-10 minutes for changes to propagate
- Clear your browser cache

### Can't push to GitHub?
- Make sure you have Git installed: `git --version`
- Verify your remote URL: `git remote -v`
- Check that you're authenticated with GitHub (you may need a Personal Access Token)

### Images not loading?
- Make sure image URLs are correct
- For local images, add them to a folder (e.g., `images/`) and reference them properly
- GitHub Pages only serves files that are in your repository

## File Structure

```
portfolio/
│
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── photos.html         # Photos gallery page
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Tips for a Great Portfolio

1. **Use High-Quality Images:** Replace placeholder images with your best work
2. **Keep It Updated:** Regularly update your projects and skills
3. **Mobile-Friendly:** Test on different devices (already responsive!)
4. **Fast Loading:** Optimize images before uploading
5. **SEO:** Add meta descriptions and proper alt text for images

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [HTML/CSS/JS Tutorials](https://developer.mozilla.org/)

---

**Happy coding! 🚀**

