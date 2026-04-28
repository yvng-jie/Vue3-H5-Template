# Vue3-H5-Template

A high-performance, mobile-adaptive boilerplate built with **Vue 3**, **Vite 8**, and **Tailwind CSS 4**. Designed for rapid development of modern, multi-language H5 applications with seamless screen scaling.

## ✨ Key Features

- 🚀 **Next-Gen Performance**: Leveraging Vite 8 and Tailwind 4 for near-instant LCP (Largest Contentful Paint) and optimized runtime performance.
- 📱 **Adaptive Layout**: Integrated with `postcss-pxtorem` and `amfe-flexible` for automatic REM scaling, ensuring a consistent UI across all mobile viewports.
- 🌍 **Native i18n Support**: Pre-configured with `vue-i18n` (v11+) for seamless multi-regional deployment and global scalability.
- 📦 **Vant 4 Integration**: High-quality mobile UI components with automated tree-shaking and optimized asset loading.
- 🛠️ **Developer Experience**: Modern stack including Vue Router 5, Pinia, and Less, refined for professional outsourcing project delivery.

## 🛠️ Tech Stack

- **Framework**: Vue 3.5 (Composition API)
- **Build Tool**: Vite 8.0
- **Styling**: Tailwind CSS 4.2 + Less
- **UI Components**: Vant 4
- **Routing**: Vue Router 5
- **Internationalization**: Vue I18n 11
- **Adaptation**: PostCSS-pxtorem + Amfe-flexible

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## 📂 Project Structure

```text
src/
├── api/            # API request services (Axios)
├── components/     # Reusable UI components
├── i18n/           # Translation files (EN/ZH)
├── router/         # Routing configurations
├── views/          # Page-level components
├── styles/         # Global styles and Tailwind directives
└── assets/         # Static assets (Images, SVGs)
```

## 📝 Configuration Note

The default adaptation is based on a **375px** design draft (`rootValue: 37.5`). You can adjust the scaling logic in `postcss.config.js`.

## 📝 License

MIT License. Created by [Yvng-jie](https://github.com/yvng-jie).

