export const navbarData = {
  homeTitle: `Federico Ibba's Blog`,
}

export const footerData = {
  author: 'Federico Ibba',
  aboutAuthor: 'Hi! I am Federico Ibba and I am a Software Engineer, currently working at TUI Musement.',
  authorInterest: `I have experiences on the Javascript word, from BE to FE. If you have some proposal, or you want just to chat, let's connect!`,
  aboutTheSite: 'This is my personal blog in which I will deep dive on technical topics regarding Web Development with TypeScript, Vue, Nuxt, Microservices, Nest.JS',
}

export const homePage = {
  title: `Federico Ibba's Blog`,
  description:
    'Insights and thoughts on technical topics regarding Web Development, from BE to FE, with: TypeScript, Vue, Nuxt, Microservices, NestJS.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Federico Ibba',
  description: 'Software Engineer',
  aboutMe: 'TBD',
}

export const seoData = {
  title: `Federico Ibba's Blog`,
  ogTitle: `Federico Ibba's Blog`,
  description: `Tutorials, guides and thoughs about Web Development: TypeScript, Vue, Nuxt, Microservices, NestJS.`,
  twitterDescription: `Tutorials, guides and thoughs about Web Development: TypeScript, Vue, Nuxt, Microservices, NestJS.`,
  image:
    'https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?q=80&w=2621&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  mySite: 'https://federicoibba.github.io/',
  twitterHandle: '@Ibba_F',
  mailAddress: 'federico.ibba9@gmail.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/federicoibba',
  linkedinLink: 'https://www.linkedin.com/in/federicoibba/',
  twitterLink: 'https://x.com/Ibba_F',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
