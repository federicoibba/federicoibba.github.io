# My Personal Blog & Portfolio

This repository contains the source code for my personal blog and portfolio website, built with Nuxt.js and showcasing my projects and articles.

## Tech Stack

This project is built with the following technologies:

*   **Framework:** [Nuxt.js](https://nuxt.com/) - A powerful and versatile Vue.js framework.
*   **UI:** [Nuxt UI](https://ui.nuxt.com/) - A UI library for Nuxt.js applications.
*   **Content:** [Nuxt Content](https://content.nuxt.com/) - For a Git-based Headless CMS.
*   **Internationalization:** [Nuxt i18n](https://i18n.nuxtjs.org/) - For multi-language support.
*   **SEO:** [Nuxt SEO](https://nuxt.com/modules/seo) - For search engine optimization.
*   **Icons:** [Nuxt Icon](https://nuxt.com/modules/icon) - For a rich set of icons.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
*   **Linting:** [ESLint](https://eslint.org/) - For code quality and consistency.
*   **Deployment:** [GitHub Pages](https://pages.github.com/) - For hosting the static site.

## Architecture

The website is a statically generated site (SSG) built with Nuxt.js. This approach provides excellent performance, security, and SEO.

*   **Nuxt.js:** The core of the application is built with Nuxt.js, leveraging its powerful features for server-side rendering, file-based routing, and component auto-imports.
*   **Nuxt Content:** All the content, including blog posts and project descriptions, is written in Markdown and managed with `@nuxt/content`. This allows for a simple, Git-based workflow for creating and updating content.
*   **Nuxt UI:** The user interface is built with the official `@nuxt/ui` library, which provides a set of accessible and customizable Vue components.
*   **Internationalization (i18n):** The website is available in English and Italian, thanks to the `@nuxtjs/i18n` module. The language is determined by the URL prefix (e.g., `/en/` or `/it/`).
*   **SEO:** The `@nuxtjs/seo` module is used to automatically generate meta tags and other SEO-related configurations.
*   **Deployment:** The website is deployed to GitHub Pages as a static site. The `.github/workflows/deploy.yml` file defines the GitHub Actions workflow for building and deploying the site.

## Project Structure

The project follows the standard Nuxt.js directory structure:

*   `app/`: Contains the main application components, pages, and layouts.
*   `content/`: Contains the Markdown files for blog posts and projects, organized by language.
*   `i18n/`: Contains the translation files for the different languages.
*   `public/`: Contains static assets like images and fonts.
*   `nuxt.config.ts`: The main configuration file for the Nuxt.js application.

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or higher)
*   [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Development

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production

To build the application for production, run:

```bash
npm run build
```

This will generate a `dist/` directory with the static files that can be deployed to any static hosting service.

## License

This project is licensed under the [MIT License](LICENSE).