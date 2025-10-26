---
title: Blog
date: 2025-09-15
description: How I've implemented my personal blog and portfolio
image: /images/projects/blog.jpg
alt: Personal Federico Ibba blog
tags: ['javascript', 'typescript', 'nuxt', 'vue']
technologies: ['javascript', 'typescript', 'nuxt', 'vue', 'nuxt/ui', 'nuxt/content']
github: 'https://github.com/federicoibba/federicoibba.github.io'
locale: 'en'
---

## Description

Throughout my career as a frontend engineer, I have always wanted to create my own personal blog and portfolio: a place to showcase my projects and share my thoughts, ideas, and aspirations. My very first attempt at building my portfolio can be traced back to 2019, when I was exploring Static Site Generation in React using Gatsby.

## Nuxt ecosystem

In my last three years as a Software Engineer at TUI Musement, I've been using Nuxt as a framework in frontend projects, so it was an easy choice for my own project. The Nuxt ecosystem is full of libraries and solutions that often have integrations in place, which simplifies the developer experience.

### Nuxt Content
<a href="https://content.nuxt.com/" target="_blank">Nuxt Content</a> is a git-based headless Content Management System (CMS) that works as a module for the Nuxt framework. It enables users to build content-driven websites by managing content directly through files in a `content/` directory. In my case, I will be writing Markdown files for two types of content:

- **Projects**: like the page you're reading right now, this section introduces a project with its technical specifications;
- **Articles**: a blog article in which I discuss something I've implemented, including the thoughts, reasoning, and ideas that led me to certain decisions.

### Nuxt UI

<a href="https://nuxt.com/blog/nuxt-ui-v4" target="_blank">Nuxt UI v4</a> is an open-source component library. It integrates easily with **Nuxt Content**, and some components are designed for this purpose, like <a href="https://ui.nuxt.com/docs/components/content-toc" target="_blank">ContentToc</a>, the menu at the top of the page you're reading.

### Nuxt i18n

<a href="https://i18n.nuxtjs.org/" target="_blank">Nuxt i18n</a> helped me serve the website in two languages, Italian and English. It provides a simple solution for language prefix-based routing, avoiding the burden of handling the language parameter in the path.

### Nuxt SEO

<a href="https://nuxtseo.com/" target="_blank">Nuxt SEO</a> is a collection of modules that handles all aspects of organic traffic, helping to set up things like `robots.txt` and `sitemap.xml` files. It also offers a nice library, <a href="https://nuxtseo.com/docs/og-image/getting-started/introduction" target="_blank">OG Image</a>, which creates a dynamic Open Graph image that is displayed when a link is shared in messaging and social media applications. Try sharing this project page!

## Deploy

The website is published using <a href="https://docs.github.com/en/pages" target="_blank">Github Pages</a> with a CI/CD pipeline that runs when pushing to the **main** branch. Kudos to Nuxt for offering a lot of <a href="https://nuxt.com/deploy" target="_blank">presets</a> for building and releasing easily, depending on your favorite service.