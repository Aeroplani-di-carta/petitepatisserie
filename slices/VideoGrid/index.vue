<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.VideoGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="px-2 py-16 text-white md:px-8 bg-gradient-to-tr from-primary-500 to-primary-700 max-w-none"
  >
    <div class="container">
      <div class="prose text-center text-white max-w-none balance">
        <h2 class="text-3xl text-white">{{ slice.primary.title }}</h2>
        <PrismicRichText :field="slice.primary.description" class="" />
      </div>

      <ul
        class="flex flex-col gap-4 md:grid md:gap-12"
        :style="`grid-template-columns:repeat(${slice.primary.columns}, minmax(0,1fr)`"
      >
        <li v-for="(item, i) in slice.items" :key="i">
          <h3 class="mb-4 text-sm md:text-xl">{{ item.title }}</h3>
          <PrismicEmbed :field="item.embed" class="w-full aspect-video" />
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="postcss">
iframe {
  @apply w-full h-full;
}
</style>
