<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";

import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProductGallerySlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const breakpoints = {
  320: {
    itemsToShow: 1.2,
  },
  700: {
    itemsToShow: 3.2,
  },
  1024: {
    itemsToShow: 4.5,
  },
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="py-12 bg-primary-100"
  >
    <div class="prose mx-auto text-balance text-center">
      <h2 class="text-black">{{ slice.primary.title }}</h2>
      <PrismicRichText :field="slice.primary.desxcription"></PrismicRichText>
    </div>
    <Carousel
      :items-to-show="3"
      wrap-around
      pause-autoplay-on-hover
      :autoplay="3500"
      :transition="500"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(item, i) in slice.items" :key="i" class="px-4 w-full">
        <div class="text-slate-500 w-full">
          <PrismicProduct :id="item.product.uid" excerpt />
        </div>
      </Slide>
      <template #addons>
        <navigation />

        <pagination />
      </template>
    </Carousel>
  </section>
</template>
