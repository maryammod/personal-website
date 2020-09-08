// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// theme style css
import '~/assets/css/style.css';

// prism
import VuePrism from 'vue-prism'
import 'prismjs/themes/prism.css'
import '~/assets/css/prism-nord.css'

// import disqus
import VueDisqus from 'vue-disqus'

export default function (Vue, { router, head, isClient }) {
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
  })

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, maximum-scale=1'
  })

  Vue.use(VueDisqus)

  Vue.use(VuePrism)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
