<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import HomePage from './pages/HomePage.vue';


export default defineComponent({
  name: 'App',
  components: {
    Header,
    HomePage
  },

  setup() {

    return {}
  }
});

</script>

<template>
  <Header />
  <HomePage />
</template>

<style></style>
