<script lang="ts" setup>
defineProps({
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
    class="py-12"
    :class="{
      container,
      'flex items-center justify-center text-center': center,
    }"
    :style="`backgroundImage:url(${bg}); backgroundSize:cover`"
  >
    <ContentDoc :path="`/${fetch}`" />
    <slot></slot>
  </div>
</template>

<style scoped></style>
