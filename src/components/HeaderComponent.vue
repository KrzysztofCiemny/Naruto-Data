<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    return {
    }
  }
})
</script>

<template>
  <header class="shadow-inner shadow-black border-b">
    <nav class="flex flex-row text-left justify-between py-4 px-6 bg-white items-center w-full">
      <div>
        <a @click="$router.push('/')"><img
            src="https://fontmeme.com/permalink/230511/2ef7c30d485568ca7a6c09112ebd4226.png" alt="naruto-font"
            class="w-2/3 cursor-pointer"></a>
      </div>
      <div class="mobileMax:mobile-navigation">
        <a @click="$router.push('/Characters')" class="nav-link">Characters</a>
        <a @click="$router.push('/Clans')" class="nav-link">Clans</a>
        <a @click="$router.push('/TailedBeasts')" class="nav-link">Tailed Beasts</a>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
