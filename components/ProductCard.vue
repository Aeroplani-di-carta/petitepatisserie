<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <article class="max-w-sm w-full">
    <PrismicImage
      :field="product.data.image"
      class="rounded-full w-full aspect-square"
    />
    {{ product.data.title }}
    <PrismicRichText :field="product.data.description" />
  </article>
</template>
