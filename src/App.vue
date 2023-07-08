<template>
  <navbar
      title="Cubix"
      :pages="pages"
      :active-page="activePage"
      :nav-link-click=" (index) => activePage = index"
  >
  </navbar>
  <router-view></router-view>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'


  import PageContent from './components/PageContent.vue';
  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      PageContent,
      Navbar,
      Swiper,
      SwiperSlide
    },
    data() {
          return {
            activePage: 0,
            navTitle: "Cubix",
            theme: 'light',
            imgs: [
              '01.png',
              '02.jpg',
              '03.png',
              '04.png',
              '05.jpg'
            ],
            pages: [
              {
                  link: {text: 'Home', url: 'home'},
                  pageTitle: 'SNext Vue Proto',
                  content: 'Snext will be using vue!'
              },
              {
                  link: {text: 'About', url: 'details'},
                  pageTitle: 'SNext Vue About',
                  content: 'Snext will be using vue!'
              },
              {
                  link: {text: 'Discover', url: 'discover'},
                  pageTitle: 'SNext Vue Discovery',
                  content: 'Snext will be using vue!'
              }
            ]
          };
        }
  }
</script>