<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  components: {

  },

  setup() {

    return {}
  }
});

</script>

<template>
  <button class="group relative h-7 w-24 md:h-10 md:w-36 overflow-hidden rounded-lg bg-white text-xs md:text-lg shadow">
    <div class="absolute inset-0 w-3 bg-amber-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">
      <slot></slot>
    </span>
  </button>
</template>

<style></style>