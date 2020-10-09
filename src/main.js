import Vue from 'vue'
import Landing from './views/Landing.vue'

import "@fortawesome/fontawesome-free/css/all.min.css";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', Landing)

  head.link.push({
    rel: 'shortcut icon',
    type: 'image/png',
    href: 'favicon.png'
  })

  head.meta.push({
    key: 'description',
    name: 'description',
    content: 'Concrete Lifting and Repair and Soil Stabilization for Driveways Repair, Pool Deck Lifting with foam injection in Dallas & Fort Worth.'
})
}
