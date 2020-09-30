// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/base.postcss'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased font-body font-serif' }

  // Styles
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Great+Vibes|Libre+Baskerville&display=swap',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@700&family=Montserrat:wght@500&display=swap',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap',
  })
  
  head.link.push({
    rel: 'preload',
    href: '/css/page.css',
    as: 'script'
  })
  
  head.link.push({
    rel: 'preload',
    href: '/js/zenscroll.min.js',
    as: 'script'
  })
  
  head.link.push({
    rel: 'preconnect',
    href: 'https://unpkg.com/popper.js@1',
    as: 'script'
  })
  
  head.link.push({
    rel: 'preconnect',
    href: 'https://unpkg.com/tippy.js@4',
    as: 'script'
  })

  // Basic meta tags
  head.meta.push({
    name: 'title',
    content: 'Pride Concrete Lifting',
  })

  head.meta.push({
    name: 'keywords',
    content: 'Concrete Lifting, Concrete Repair, Asphalt Lifting, Pavement Lifting, Concrete Lifting Fort Worth, Road Repair, Road Lifting',
  })

  head.meta.push({
    name: 'description',
    content: 'Concrete Lifting and Stabilization on Roads, Sidewalks, and Driveways Done Right with Over 50 Years Combined Experience Raising Concrete and Pavement.',
  })

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  })
}