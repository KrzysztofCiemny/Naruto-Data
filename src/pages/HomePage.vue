<script lang="ts">
import { defineComponent } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue'
import BannerComponent from '../components/BannerComponent.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    ButtonComponent,
    BannerComponent
  },

  setup() {
    // const fiveCharacters = allCharacters ? allCharacters.value!.slice(0, 4) : [];
    // console.log(fiveCharacters);

    // const randomizeOffers = () => {
    //   const randomIndexes = [];
    //   const numberOfNeededOffers = 4;
    //   while (randomIndexes.length < numberOfNeededOffers) {
    //     const randomIndex = Math.floor(Math.random() * data.offers.length);
    //     if (!randomIndexes.includes(randomIndex)) {
    //       randomIndexes.push(randomIndex);
    //     }
    //   }
    //   const randomOffers = [];
    //   for (let i = 0; i < randomIndexes.length; i++) {
    //     randomOffers.push(data.offers[randomIndexes[i]]);
    //   }
    //   return randomOffers;
    // };

    return {
    }
  }
});

</script>

<template>
  <main class="mobileMax:px-4">
    <BannerComponent image="https://fontmeme.com/permalink/230511/36ce7075e9135b4b58847e6db9f62c88.png" />
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
    <nav class="flex flex-row justify-center items-center gap-x-4 md:gap-x-8 my-6 md:my-14 mobileMax:mb-24">
      <ButtonComponent @click="$router.push('/Characters')">Characters</ButtonComponent>
      <ButtonComponent @click="$router.push('/Clans')">Clans</ButtonComponent>
      <ButtonComponent @click="$router.push('/Tailed Beasts')">Tailed Beasts</ButtonComponent>
    </nav>
  </main>
</template>

<style></style>

