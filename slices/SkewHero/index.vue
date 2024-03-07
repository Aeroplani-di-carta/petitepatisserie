<script setup lang="ts">
import * as prismic from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<prismic.Content.SkewHeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="grid gap-4 py-12 my-20 text-white md:grid-cols-2 bg-primary-950"
  >
    <div class="" :class="{ 'order-last': slice.primary.reverse }">
      <PrismicImage
        :field="slice.primary.image"
        class="object-cover shadow-2xl max-w-[20rem] aspect-square rounded-xl scale-150 translate-x-20"
        :class="[slice.primary.reverse ? 'rotate-12' : '-rotate-12']"
      />
    </div>
    <div
      class="flex flex-col justify-center w-2/3 prose text-white"
      :class="{ container: slice.primary.reverse }"
    >
      <!-- <PrismicText :field="body"></PrismicText> -->

      <h1 class="text-primary-500">{{ slice.primary.title }}</h1>
      <PrismicRichText :field="slice.primary.body" />
    </div>
  </div>
</template>
