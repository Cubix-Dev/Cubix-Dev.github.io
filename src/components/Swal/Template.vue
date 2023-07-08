<template>
  <button @click="simple" class="btn btn-outline-primary col s12 m3" type="button">simple</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      msg: 'Welcome to Vue-Sweetalert2 example',
      description: 'This is TypeScript component in Vue 3',
    };
  },

  methods: {
    simple() {
      this.$swal('Hello world!');
    },

    success() {
      this.$swal({
        icon: 'success',
        title: 'Hello',
        text: 'Hello brave new world!',
      });
    },

    error() {
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    },

    toastTopEnd() {
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,

        icon: 'success',
        title: 'Hi man',
        text: 'is a good day!',
      });
    },
  },
});
</script>