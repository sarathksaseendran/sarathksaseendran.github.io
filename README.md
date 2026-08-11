# Sarath K - 3D Portfolio

A highly polished, interactive 3D digital experience portfolio built for Sarath K, a Senior Mobile Developer with 10+ years of experience. The website features a fully 3D environment rendered with Three.js, synchronized to scroll events for a continuous, immersive experience.

## 🌟 Features

- **3D Interactive Environment:** A central glowing "mobile development core" that reacts to mouse movements and scrolls.
- **Orbital Tech Stack:** An impressive 3D orbital system representing the technology stack.
- **Scroll-Driven Animation:** The camera traverses through the 3D space seamlessly as the user scrolls, transitioning between 5 major scenes.
- **Glassmorphism UI:** Clean, futuristic HTML overlays layered on top of the 3D canvas, completely synchronized.
- **Performance Optimized:** Uses device pixel ratio scaling, limited shadow mapping, and efficient mesh instancing to ensure smooth 60fps performance across desktop and mobile.
- **Data-Driven Architecture:** Project details, experience timelines, and tech stacks are centralized in `src/data/portfolio.ts` for easy updates.

## 🛠️ Technology Stack

- **Core:** React, TypeScript, Vite
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Post-Processing:** @react-three/postprocessing (Bloom effects)
- **Animations:** Framer Motion (for UI overlays and micro-interactions)
- **State Management:** Zustand (for scroll synchronization)
- **Styling:** CSS Modules with custom variables

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

All user-facing text, projects, and experiences can be updated without modifying the 3D scene or component structure.

Simply edit the file at:
`src/data/portfolio.ts`

If you need to change the global color scheme, update the CSS variables inside `src/styles/globals.css`.

## 🏗️ Project Architecture & Deployment

This project uses a layered architecture to achieve a high-performance 3D web experience:
- **3D Canvas Layer (`src/components/3d/Scene.tsx`)**: Handles WebGL rendering, lighting, and camera animations. It leverages `@react-three/fiber` for React-based Three.js components and `@react-three/drei`'s `ScrollControls` to tie camera movement to the user's scroll.
- **HTML UI Layer (`src/components/3d/HTMLContent.tsx`)**: Standard React components overlaid on top of the 3D canvas. These sections (Hero, Experience, Projects) sync perfectly with the 3D scroll and use Framer Motion for micro-interactions (like 3D tilt effects on project cards).
- **Global Store (`src/store/useStore.ts`)**: A lightweight Zustand store that tracks the active scroll section to update the fixed navigation bar seamlessly.

### 📦 GitHub Pages Automation

This repository includes a fully automated **GitHub Actions** workflow (`.github/workflows/deploy.yml`) that will automatically build and deploy your portfolio to GitHub Pages whenever you push to the `main` branch.

### Setup Instructions:

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial 3D portfolio commit"
   git branch -M main
   git push -u origin main
   ```

2. Enable GitHub Pages via Actions:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.

3. That's it! GitHub will now automatically run the workflow and publish your site to `https://sarathksaseendran.github.io`.

---
*Designed and built to showcase production-grade mobile application architecture and modern web experiences.*
