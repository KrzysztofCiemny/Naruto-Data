<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";

export default defineComponent({
  name: 'MainLayout',
  components: { HeaderComponent, },

  setup() {

    return {

    }
  }
});
</script>
<template>
  <div>
    <header-component />
    <router-view v-slot="{ Component }">
      <suspense>
        <component :is="Component" />
      </suspense>
    </router-view>
  </div>
</template>

<style></style>