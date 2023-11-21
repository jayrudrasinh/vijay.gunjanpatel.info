export default defineAppConfig({
  docus: {
    title: 'Vijay Brahmbhatt',
    description: 'The best place to start your documentation.',
    image: '',
    // socials: {
    //   twitter: 'nuxt_js',
    //   github: 'nuxt-themes/docus',
    //   nuxt: {
    //     label: 'Nuxt',
    //     icon: 'simple-icons:nuxtdotjs',
    //     href: 'https://nuxt.com'
    //   }
    // },
    // github: {
    //   dir: '.starters/default/content',
    //   branch: 'main',
    //   repo: 'docus',
    //   owner: 'nuxt-themes',
    //   edit: true
    // },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
