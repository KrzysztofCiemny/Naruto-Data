<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Card',
  components: {

  },

  setup() {
    return {}
  }
});

</script>

<template>
  <div class="bg-white shadow-md border border-gray-200 rounded-lg w-72 dark:bg-gray-800 dark:border-gray-700">
    <div class="p-5">
      <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-5 dark:text-white">
        <slot name="header"></slot>
      </h5>
      <slot></slot>
    </div>
  </div>
</template>

<style></style>