# Docusaurus Blog

This blog is based on a [template](https://github.com/Developer-Akademie-DevSecOpsKurs/dev-blog-template) provided by the Developer Akademie.

## Table of contents

- [Setup](#setup)
    - [Environment](#environment)
    - [Projects](#projects)
    - [Personalization](#personalization)
- [Deployment](#deployment)

## Setup

The template used for this project already contains most of the general setup needed.

### Environment

A new environment variable `GIT_REPOSITORY_URL` was added in the `example.env` for convenience.
It allows easy changes to the GitHub URL without the need to edit any files.

The variable is used in the `docusaurus.config.ts`
```ts title="docusaurus.config.ts"
...
const gitRepositoryUrl = process.env.GIT_REPOSITORY_URL
...
```

### Projects

The `example-project.md` was removed, since it's not needed anymore.

### Personalization

:::note
Docusaurus can be personalized easily via the `docusaurus.config.ts`.
:::

Title and tagline of the landing page are changed to to match personal data.
```ts title="docusaurus.config.ts"
const config: Config = {
  title: 'Diary of Daniel',
  tagline: 'My journey into the fascinating world of DevSecOps',
  ...
};
```

Changes to various URLs were made to ensure automatic deployment.
```ts title="docusaurus.config.ts"
...
url: process.env.DEPLOYMENT_URL ?? "https://dpsec26.github.io",
baseUrl: process.env.BASE_URL ?? "/dso-blog/",
...
```

The `editUrl` now uses the new variable `GIT_REPOSITORY_URL` from the `example.env`.
```ts title="docusaurus.config.ts"
...
editUrl:
    gitRepositoryUrl,
...
```

The `navbar` was also personalized.
```ts title="docusaurus.config.ts"
...
    navbar: {
      title: 'DSO Blog',
      logo: {
        alt: 'Cool Dinosaur Logo',
        src: 'img/logo.svg',
      },
      ...
        {
          href: 'https://github.com/dpsec26/dso-blog',
          label: 'Github',
          position: 'right',
        },
      ...
    },
...
```

Various links in the footer were also removed, changed or added to match the requirements. The copyright section was changed to match personal data.
```ts title="docusaurus.config.ts"
...
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/guides/intro',
            },
            {
              label: 'Projects',
              to: '/docs/projects/overview',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dpsec26/dso-blog',
            },
            {
              label: 'Template',
              href: 'https://github.com/Developer-Akademie-DevSecOpsKurs/dev-blog-template',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Pagel (dpsec26). Built with Docusaurus and 💚, extended from the developer-akademie-starter template.`,
    },
```

## Deployment

A GitHub [workflow](https://github.com/dpsec26/dso-blog/blob/main/.github/workflows/deploy.yaml) for automatic deployment to GitHub Pages was provided. 