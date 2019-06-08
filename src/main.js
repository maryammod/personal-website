// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// bootstrap js
import 'bootstrap';

// bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// theme style css
import '~/assets/css/style.css';

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

// import '~/assets/js/main.js'

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
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
