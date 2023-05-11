<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../components/Button.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Button
  },

  setup() {

    return {}
  }
});

</script>

<template>
  <main class="mobileMax:px-4">
    <section
      class="flex flex-row items-center justify-center min-h-[11rem] lg:min-h-[18.75rem] bg-[url('NarutoImg.jpg')] bg-center bg-cover bg-gray-500 bg-blend-screen">
      <img class="mobileMax:w-2/3" src="https://fontmeme.com/permalink/230511/36ce7075e9135b4b58847e6db9f62c88.png"
        alt="naruto-font" />
    </section>
    <section class="flex flex-row items-center justify-center my-8 md:my-12">
      <img src="pngegg.png" class="mobileMax:w-20 mobileMax:h-20" />
    </section>
    <section class="flex flex-col justify-center items-center text-center md:px-16">
      <h1 class="font-semibold text-3xl md:text-5xl mb-6 md:mb-10">Explore the World of Naruto Characters with Naruto Data
      </h1>
      <p class="text-xl">
        Naruto Data is a site where you can find information about characters, clans, and
        tailed beasts from the anime Naruto. Here you will find information such as character names, clan names, and the
        techniques they use. I invite you to browse the content. Choose one of the options below.</p>
    </section>
    <section class="flex flex-row justify-center items-center gap-x-4 md:gap-x-8 my-6 md:my-14 mobileMax:mb-24">
      <Button>Characters</Button>
      <Button>Clans</Button>
      <Button>Tailed Beasts</Button>
    </section>
  </main>
</template>

<style></style>