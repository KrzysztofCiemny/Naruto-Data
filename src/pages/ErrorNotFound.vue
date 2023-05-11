<script lang="ts">
import { defineComponent } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue';

export default defineComponent({
  name: 'ErrorNotFound',
  components: {
    ButtonComponent
  },

  setup() {

    return {}
  }
});

</script>

<template>
  <div class="flex flex-col justify-center items-center mt-8 gap-y-5">
    <p class="font-bold text-2xl">Error: Not found</p>
    <ButtonComponent @click="$router.push('/')">Home page</ButtonComponent>
  </div>
</template>

<style></style>
