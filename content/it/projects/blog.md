---
title: Blog
date: 2025-09-15
description: Come ho implementato il mio blog e portfolio personale
image: /images/projects/blog.jpg
alt: Blog personale di Federico Ibba
tags: ['Javascript', 'Typescript', 'Nuxt', 'Vue']
technologies: ['Javascript', 'Typescript', 'Nuxt', 'Vue', 'Tailwind CSS']
github: 'https://github.com/federicoibba/federicoibba.github.io'
locale: 'it'
---

## Descrizione

Durante la mia carriera come frontender, ho sempre desiderato creare il mio blog e portfolio personale: un posto dove mostrare i miei progetti e condividere i miei pensieri, idee e aspirazioni. Il mio primissimo tentativo di costruire il mio portfolio risale al 2019, quando stavo esplorando la generazione di siti statici in React usando Gatsby.

## Ecosistema Nuxt

Nei miei ultimi tre anni presso TUI Musement, ho utilizzato Nuxt come framework principale per costruire nuovi progetti frontend, quindi è stata una scelta facile per il mio stesso progetto. L'ecosistema Nuxt è ricco di librerie e soluzioni che spesso hanno integrazioni già pronte anche tra di loro, il che semplifica l'esperienza di sviluppo.

### Nuxt Content
<a href="https://content.nuxt.com/" target="_blank">Nuxt Content</a> è un Content Management System (CMS) headless basato su git che funziona come un modulo per il framework Nuxt. Consente agli utenti di creare siti Web basati sui contenuti gestendoli direttamente tramite file in una cartella `content/`. Nel mio caso, scriverò file Markdown per due tipi di contenuto:

- **Progetti**: come la pagina che stai leggendo in questo momento, è una sezione che introduce un progetto con le sue specifiche tecniche;
- **Articoli**: un articolo di blog in cui discuto di qualcosa che ho implementato, inclusi i pensieri, i ragionamenti e le idee che mi hanno portato a determinate decisioni.

### Nuxt UI

<a href="https://nuxt.com/blog/nuxt-ui-v4" target="_blank">Nuxt UI v4</a> è una libreria di componenti open source. Si integra facilmente con **Nuxt Content** e alcuni componenti sono progettati per questo scopo, come ad esempio <a href="https://ui.nuxt.com/docs/components/content-toc" target="_blank">ContentToc</a>, il menu nella parte superiore della pagina che stai leggendo.

### Nuxt i18n

<a href="https://i18n.nuxtjs.org/" target="_blank">Nuxt i18n</a> mi ha aiutato a servire il sito web in due lingue, italiano e inglese. Fornisce una soluzione semplice per integrare il routing prefix basato sulla lingua.

### Nuxt SEO

<a href="https://nuxtseo.com/" target="_blank">Nuxt SEO</a> è una raccolta di moduli che gestisce tutti gli aspetti del traffico organico, aiutando ad esempio nell'impostazione automatica di file come `robots.txt` e `sitemap.xml`. Offre anche una bella libreria, <a href="https://nuxtseo.com/docs/og-image/getting-started/introduction" target="_blank">OG Image</a>, che crea un'immagine Open Graph dinamica che viene visualizzata quando un link viene condiviso nelle applicazioni di messaggistica e social media. Prova a condividere questa pagina del progetto!

## Deploy

Il sito web è pubblicato utilizzando <a href="https://docs.github.com/en/pages" target="_blank">Github Pages</a> con una pipeline CI/CD che viene eseguita al momento del push sul branch **main**. Grazie a Nuxt per aver offerto molti <a href="https://nuxt.com/deploy" target="_blank">preset</a> per la creazione e il rilascio dell'applicazione in maniera semplice a seconda del proprio servizio preferito.