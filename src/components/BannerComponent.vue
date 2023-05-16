<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BannerComponent',
  props: {
    image: {
      type: String,
      required: true,
    }
  },
  components: {

  },

  setup() {
    return {
    }
  }
});

</script>

<template>
  <section
    class="flex flex-row items-center justify-center min-h-[11rem] lg:min-h-[18.75rem] bg-[url('NarutoImg.jpg')] bg-center bg-cover bg-gray-500 bg-blend-screen">
    <img class="mobileMax:w-2/3" :src="$props.image" alt="naruto-font" />
  </section>
</template>

<style></style>