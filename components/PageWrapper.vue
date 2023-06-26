<script lang="ts" setup>
defineProps({
  container: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="py-12" :class="{ container }">
    <slot></slot>
  </div>
</template>

<style scoped></style>
