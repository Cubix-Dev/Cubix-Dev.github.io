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
  import PageContent from './components/PageContent.vue';
  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      PageContent,
      Navbar
    },
    data() {
          return {
            activePage: 0,
            navTitle: "Cubix",
            theme: 'light',
            pages: [
              {
                  link: {text: 'Home', url: 'home'},
                  pageTitle: 'SNext Vue Proto',
                  content: 'Snext will be using vue!'
              },
              {
                  link: {text: 'Create', url: '/develop'},
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
<style> 
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
</style>
