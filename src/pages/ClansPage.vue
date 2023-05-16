<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import BannerComponent from '../components/BannerComponent.vue';
import useApi from '../api/useApi';
import Card from '../components/Card.vue';

export default defineComponent({
  name: 'ClansPage',
  components: {
    BannerComponent,
    Card,
  },

  setup() {
    const { allClans } = useApi();
    const sortOption = ref('Descending')
    const sortedClans = computed(() => {
      switch (sortOption.value) {
        case 'Descending':
          return allClans.value?.slice().sort();
          break;
        case 'Ascending':
          return allClans.value?.slice().sort().reverse();
          break;
      }
    })

    return {
      allClans,
      sortOption,
      sortedClans,
    }
  }
});

</script>

<template>
  <BannerComponent image="https://fontmeme.com/permalink/230516/9b67a2003bc218b86015b02fcf0f6c31.png" />
  <main class="flex flex-col justify-center py-6 px-4 md:p-10 mb-5 md:mb-10  mobileMax:mb-24">
    <div class="flex justify-center mb-6">
      <label class="mr-2">Sort Alfabeticaly</label>
      <select v-model="sortOption" class="border border-black rounded-md p-1 cursor-pointer">
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
    <section class="flex flex-row justify-center flex-wrap gap-5">
      <div v-if="!allClans">Loading...</div>
      <Card v-else v-for="clan in sortedClans" :key="clan.id">
        <template #header>{{ clan.name }}</template>
        <ul>
          <p class="font-medium mb-2">Members: </p>
          <li v-for="member in clan.members" :key="member.id" class="font-medium text-sm text-gray-700 mb-2">{{
            member.name }}
          </li>
        </ul>
      </Card>
    </section>
  </main>
</template>

<style></style>