<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {

    return {

    }
  }
})
</script>

<template>
  <nav class="flex flex-row text-left justify-between py-4 px-6 bg-white shadow items-center w-full">
    <div>
      <a href="/home"><img src="https://fontmeme.com/permalink/230511/2ef7c30d485568ca7a6c09112ebd4226.png"
          alt="naruto-font" class="mobileMax:w-2/3"></a>
    </div>
    <div class="mobileMax:mobile-navigation">
      <a href="/one" class="nav-link">Characters</a>
      <a href="/two" class="nav-link">Clans</a>
      <a href="/three" class="nav-link">Tailed
        Beasts</a>
    </div>
  </nav>
</template>

<style scoped></style>
