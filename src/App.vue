<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import useApi from './api/useApi';

export default defineComponent({
  name: 'App',
  components: {

  },

  setup() {
    const { getAllCharacters, getAllClans, getAllTailedBeasts } = useApi();

    onMounted(getAllCharacters)
    onMounted(getAllClans)
    onMounted(getAllTailedBeasts)
    return {}
  }
});

</script>

<template>
  <RouterView />
</template>

<style></style>
