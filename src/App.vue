<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import useApi from './api/useApi';

export default defineComponent({
  name: 'App',
  components: {

  },

  setup() {
    const { getAllCharacters } = useApi();

    onMounted(getAllCharacters)
    return {}
  }
});

</script>

<template>
  <RouterView />
</template>

<style></style>
