# Sarath K - Professional Portfolio

A highly polished, minimalist, and high-performance digital portfolio built for Sarath K, a Senior Software Engineer specializing in Mobile, Web, and AI/LLM technologies.

## 🌟 Features

- **Clean & Minimalist Design:** A professional 2D layout prioritizing readability, structure, and visual hierarchy.
- **Responsive Architecture:** Fully responsive across all devices with a mobile-optimized sticky navigation menu.
- **High Performance:** Extremely lightweight React architecture without heavy dependencies. Fast load times and tiny bundle size.
- **Dynamic Data Source:** Centralized data structure (`src/data/portfolio.ts`) makes updating experiences, projects, and skills effortless without touching component logic.
- **Visual Flourishes:** Integrated standard SVG icons via `react-icons` for technical skills and footer social links, plus a sleek generated 3D Chibi avatar.
- **Dark & Light Mode Support:** Fully integrated dark and light mode themes with a manual toggle and automatic system preference detection. Built using CSS variables and React state.

## 🛠️ Technology Stack

- **Core:** React, TypeScript, Vite
- **Styling:** CSS Modules with clean global utility variables
- **Icons:** `react-icons`
- **Typography:** Google Fonts (Inter)
- **Deployment:** GitHub Actions & GitHub Pages

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sarathksaseendran/sarathksaseendran.github.io.git
   cd sarathksaseendran.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📝 Customizing Content

Your portfolio's text and timeline content is fully decoupled from the UI code. 

**To update your Experiences, Projects, or Skills:**
Simply edit the data objects inside `src/data/portfolio.ts`. The UI will automatically map and render your updates.

**To update your Resume/Avatar:**
- Resume: Replace `src/assets/resume.pdf` with your new PDF.
- Avatar: Replace `src/assets/chibi_avatar.jpg` with a new image.

If you need to change the global color scheme, typography, or spacing, update the CSS variables inside `src/styles/globals.css`.

## 🏗️ Project Architecture & Deployment

This project uses a standard, high-performance React component architecture:
- **`src/data/`**: Centralized content management.
- **`src/sections/`**: Contains all individual page sections (Header, Hero, About, Experience, etc.) and their scoped CSS modules.
- **`src/styles/`**: Contains global resets, spacing utilities, and CSS variables for theming.

### 📦 GitHub Pages Automation

This repository includes a fully automated **GitHub Actions** workflow (`.github/workflows/deploy.yml`) that will automatically build and deploy your portfolio to GitHub Pages whenever you push to the `main` branch.

### Setup Instructions:

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio architecture to minimalist 2D layout"
   git branch -M main
   git push -u origin main
   ```

2. Enable GitHub Pages via Actions:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.

3. That's it! GitHub will now automatically run the workflow and publish your site to `https://sarathksaseendran.github.io`.

---
*Designed and built to showcase production-grade software architecture, cross-platform mobile expertise, and modern AI integrations.*
