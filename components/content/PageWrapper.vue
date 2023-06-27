<script setup lang="ts">
const props = defineProps({
  container: {
    type: Boolean,
    default: false,
  },
  fetch: {
    type: String,
    default: "",
  },
  bg: {
    type: String,
    default: "",
  },
  center: {
    type: Boolean,
    default: false,
  },
});

</script>

<template>
  <div
    class="py-12 grid grid-cols-2 gap-12 place-items-center"
    :class="{
      container,
      'flex items-center justify-center text-center': center,
      'overlay':bg
    }"
    :style="`backgroundImage:url(${bg}); backgroundSize:cover`"
  >
  <!-- <ContentRenderer :value="content" /> -->
    <ContentDoc :path="`/${fetch}`" v-if="fetch" class="prose" />
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.overlay{
  position:relative;
  z-index: -2;
  &:after{
    content:'';
    position: absolute;
    background-color: white;
    inset:0;
    opacity: .5;
    z-index: -1;
  }
}
</style>
