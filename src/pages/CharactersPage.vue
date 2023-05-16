<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import useApi from '../api/useApi';
import BannerComponent from '../components/BannerComponent.vue';
import Card from '../components/Card.vue';

export default defineComponent({
  name: 'CharactersPage',
  components: {
    BannerComponent,
    Card
  },

  setup() {
    const { allCharacters } = useApi();
    const selectedAffiliation = ref('');
    const filteredCharacters = computed(() => {
      if (selectedAffiliation.value === '') {
        return allCharacters.value;
      } else {
        return allCharacters.value?.filter((character) => character.personal.affiliation.toLowerCase().includes(selectedAffiliation.value.toLowerCase())
        );
      }
    })
    return {
      allCharacters,
      selectedAffiliation,
      filteredCharacters,
    }
  }
});

</script>

<template>
  <BannerComponent image="https://fontmeme.com/permalink/230516/33ce00286c1bb5943cc75f8fc2db80b4.png" />
  <main class="flex flex-col justify-center py-6 px-4 md:p-10 mb-5 md:mb-10  mobileMax:mb-24">
    <div class="flex justify-center mb-6">
      <label class="mr-2">Choose Affiliation</label>
      <select v-model="selectedAffiliation" class="border border-black rounded-md p-1 cursor-pointer">
        <option value="">All</option>
        <option value="Konohagakure">Konoha</option>
        <option value="Kumogakure">Kumo</option>
        <option value="Sunagakure">Suna</option>
        <option value="Takigakure">Taki</option>
        <option value="Otogakure">Oto</option>
      </select>
    </div>
    <section class="flex flex-row justify-center flex-wrap gap-5">
      <div v-if="!allCharacters">Loading...</div>
      <Card v-else v-for="character in filteredCharacters" :key="character.id">
        <template #header>{{ character.name }}</template>
        <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Affiliation: {{ character.personal.affiliation }}
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Sex: {{ character.personal.sex }}</p>
      </Card>
    </section>
  </main>
</template>

<style></style>