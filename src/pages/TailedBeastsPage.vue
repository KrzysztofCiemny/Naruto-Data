<script lang="ts">
import { defineComponent } from 'vue';
import BannerComponent from '../components/BannerComponent.vue';
import Card from '../components/Card.vue';
import useApi from '../api/useApi';

export default defineComponent({
  name: 'TailedBeastsPage',
  components: {
    BannerComponent,
    Card
  },

  setup() {
    const { allTailedBeasts } = useApi()
    return {
      allTailedBeasts
    }
  }
});

</script>

<template>
  <BannerComponent image="https://fontmeme.com/permalink/230516/af888ddc474a114be7afec93863bc847.png" />
  <main class="flex flex-col justify-center py-6 px-4 md:p-10 mb-5 md:mb-10  mobileMax:mb-24">
    <section class="flex flex-row justify-center flex-wrap gap-5">
      <div v-if="!allTailedBeasts">Loading...</div>
      <Card v-else v-for="beast in allTailedBeasts" :key="beast.id">
        <template #header>{{ beast.name }}</template>
        <ul>
          <p class="font-medium mb-2">Jinchuriki: </p>
          <li v-for="it in beast.jinchuriki" :key="it.id" class="font-medium text-sm text-gray-700 mb-2">{{
            it.name }}
          </li>
        </ul>
      </Card>
    </section>
  </main>
</template>

<style></style>