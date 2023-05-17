<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import useApi from '../api/useApi';
import BannerComponent from '../components/BannerComponent.vue';
import Card from '../components/Card.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'CharactersPage',
  components: {
    BannerComponent,
    Card,
    ButtonComponent
  },

  setup() {
    const { allCharacters, getAllCharacters } = useApi();
    const store = useStore();
    const selectedAffiliation = ref('');
    const filteredCharacters = computed(() => {
      if (selectedAffiliation.value === '') {
        return allCharacters.value;
      } else {
        return allCharacters.value?.filter((character) => character.personal.affiliation.toLowerCase().includes(selectedAffiliation.value.toLowerCase())
        );
      }
    })
    const firstPage = 1;
    const lastPage = 71;
    const pageNumber = computed(() => store.state.pageNumber);
    const loadAnotherCharacters = (direction: string) => {
      switch (direction) {
        case 'next':
          if (pageNumber.value >= lastPage) {
            break;
          }
          store.commit('setPageNumber', pageNumber.value + 1);
          break;
        case 'prev':
          if (pageNumber.value <= firstPage) {
            break;
          }
          store.commit('setPageNumber', pageNumber.value - 1);
          break;
      }
      getAllCharacters(pageNumber.value);
    }
    return {
      allCharacters,
      selectedAffiliation,
      filteredCharacters,
      loadAnotherCharacters,
      firstPage,
      lastPage,
      pageNumber
    }
  }
});

</script>

<template>
  <BannerComponent image="https://fontmeme.com/permalink/230516/33ce00286c1bb5943cc75f8fc2db80b4.png" />
  <main class="flex flex-col justify-center py-6 px-4 md:p-10 mb-5 md:mb-10  mobileMax:mb-24">
    <div class="flex flex-col gap-6 md:flex-row md:justify-evenly mb-6">
      <div class="flex justify-center gap-5">
        <ButtonComponent @click="loadAnotherCharacters('prev')" :is-disabled="pageNumber === firstPage ? true : false">
          Load prev
          20</ButtonComponent>
        <ButtonComponent @click="loadAnotherCharacters('next')" :is-disabled="pageNumber === lastPage ? true : false">Load
          next
          20</ButtonComponent>
      </div>
      <div class="flex flex-row justify-center">
        <div class="flex flex-col justify-center">
          <label class="mr-2">Choose Affiliation</label>
        </div>
        <select v-model="selectedAffiliation" class="border border-black rounded-md p-1 cursor-pointer">
          <option value="">All</option>
          <option value="Konohagakure">Konoha</option>
          <option value="Kumogakure">Kumo</option>
          <option value="Sunagakure">Suna</option>
          <option value="Takigakure">Taki</option>
          <option value="Otogakure">Oto</option>
        </select>
      </div>
    </div>
    <section class="flex flex-row justify-center flex-wrap gap-5">
      <div v-if="!allCharacters">Loading...</div>
      <div v-if="filteredCharacters?.length! <= 0">No characters. Choose different affiliation</div>
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