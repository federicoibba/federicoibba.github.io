export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'stone',
    },
    pageHero: {
      slots: {
        container:
          'flex flex-col lg:grid py-8 sm:py-4 lg:py-8 gap-4 sm:gap-y-4 sm:py-8',
      },
    },
    pageSection: {
      slots: {
        container: 'py-10 sm:py-10 lg:py-10',
      },
    },
    icons: {
      folder: 'lucide:book',
      folderOpen: 'lucide:book-open',
    },
    navigationMenu: {
      slots: {
        link: 'text-lg lg:ml-4 mb-2 lg:mb-0',
      },
    },
  },
})
