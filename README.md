# My Developer Blog

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Repository Description

This repository hosts a portfolio and project documentation built with Docusaurus. It includes tools and scripts for creating, managing, and deploying static web content. The software supports rapid local development, customizable theming, and seamless deployment to platforms like GitHub Pages.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Usage](#usage)
   - [Environment Variables](#environment-variables)
   - [Development Server](#development-server)
   - [Build](#build)
- [Repository Structure](#repository-structure)
- [Deployment](#deployment)
   - [Deploy to GitHub Pages](#deploy-to-github-pages)
  
## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20 or later recommended)

## Quickstart

1. Clone the repository

```sh
git clone git@github.com:dpsec26/dso-blog.git
cd dso-blog
```

2. Set environment

```sh
cp example.env .env
```

3. Install dependencies

```sh
npm install
```

4. Start local server

```sh
npm start
```

You can access the page with `http://localhost:3000/dso-blog/` in your browser.

## Usage

### Environment Variables

| Variable | Example Value | Description |
| --- | --- | --- |
| DEPLOYMENT_URL | https://dpsec26.github.io | The URL you want to deploy on |
| DEPLOYMENT_BRANCH | main | The branch used when deploying via deploy command |
| BASE_URL | /dso-blog/ | The URL path prefix |
| GITHUB_ORG | dpsec26 | Your GitHub accountname |
| GITHUB_PROJECT | dso-blog | The name of the repository |
| GIT_REPOSITORY_URL | https://github.com/dpsec26/dso-blog | The GitHub repository URL |

> [!NOTE]
> Make sure you change these values fitting your needs in case of a real deployment.

### Development Server

You can start a local development server with

```sh
npm start
```

> [!NOTE]
> This starts a **development server**. It's not optimized for production. Files are only built in memory.

### Build

Create a proper production build with

```sh
npm build
```

This gives you actual static files. It also makes sure some things are getting optimized (e.g. minified or bundled).

## Repository Structure

The repository is organized as follows:

- `blog/`: Contains markdown files for blog posts. Blog-related metadata is automatically picked up by the Docusaurus configuration.
- `docs/`: Contains markdown files for documentation. These files are referenced in `sidebars.ts` to define the sidebar structure.
- `src/`: Contains custom React components, CSS, and JavaScript for additional functionality or theming.
- `static/`: Stores static assets (e.g., images, icons) served directly without processing.
- `sidebars.ts`: Configures the structure of sidebars in the documentation section.
- `docusaurus.config.ts`: Main configuration file for customizing and managing Docusaurus behavior.
- `build/`: Generated after running the `npm build` command. Contains the static website files ready for deployment.

New content can be added as follows:

- Add new documentation files to the `docs/` folder.
- Add new blog posts to the `blog/` folder.

For further information, check out the [Docusaurus Documentation](https://docusaurus.io/docs)

> [!NOTE]
> Right now the blog is disabled. You need to set the environment variable `BLOG_ENABLED=true` to enable it.

## Deployment

### Deploy to GitHub Pages

The repository contains a GitHub [workflow](./.github/workflows/deploy.yaml) that automatically deploys changes to GitHub Pages. It is triggered when changes are committed to the main branch.