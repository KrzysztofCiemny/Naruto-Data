<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';


export default defineComponent({
  name: 'App',
  components: {
    Header
  },

  setup() {

    return {}
  }
});

</script>

<template>
  <Header />
</template>

<style></style>
