<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    isDisabled: {
      required: false,
      type: Boolean,
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
  <button :class="$props.isDisabled === true ? 'opacity-60 cursor-default' : 'opacity-100'"
    class="group relative h-7 w-24 md:h-10 md:w-36 overflow-hidden rounded-lg bg-white text-xs md:text-lg shadow">
    <div :class="$props.isDisabled === true ? '' : 'group-hover:w-full'"
      class="absolute inset-0 w-3 bg-amber-500 transition-all duration-[250ms] ease-out "></div>
    <span :class="$props.isDisabled === true ? '' : 'group-hover:text-white'" class="relative text-black">
      <slot></slot>
    </span>
  </button>
</template>

<style></style>