# Barry Chung Portfolio

Personal portfolio website built with React, Vite, Tailwind CSS, and interactive Three.js scenes.

## Live Demo

[Barry Chung's Portfolio](https://barrychung1112.github.io/personal-page/)

## Features

- Responsive portfolio layout for desktop and mobile screens
- Interactive 3D hero, technology icons, Earth model, and animated star field
- Project, work experience, and contact sections
- EmailJS-powered contact form
- Motion and scroll animations with Framer Motion

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Three.js with React Three Fiber and Drei
- Framer Motion
- EmailJS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint checks. |
| `npm run deploy` | Build and deploy with `gh-pages`. |

## Project Structure

```text
src/
  assets/       Static images, icons, and model references
  components/   Page sections and canvas components
  constants/    Portfolio content and configuration
  hoc/          Higher-order layout helpers
  hooks/        Reusable React hooks
  utils/        Motion utilities
```

## Credits

This project is based on the [ThreeJS 3D Developer Portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio) by JavaScript Mastery.
