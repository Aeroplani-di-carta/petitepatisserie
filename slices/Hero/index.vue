<script setup lang="ts">
import * as prismic from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.

defineProps(
  getSliceComponentProps<prismic.Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <article
    class="w-full h-full min-h-[30rem] grid grid-cols-2 bg-slate-100"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="container flex flex-col items-start justify-center prose">
      <h1 class="max-w-sm text-primary-700">{{ slice.primary.title }}</h1>
      <PrismicRichText :field="slice.primary.body" class="text-slate-500" />

      <PrismicLink :field="slice.primary.link">{{
        slice.primary.cta
      }}</PrismicLink>
      {{ slice.primary.link }}
      <NuxtLink :to="$prismic.asLink(slice.primary.link)">
        Example Link
      </NuxtLink>
    </div>
    <div class="max-h-[30rem]">
      <PrismicImage
        :field="slice.primary.image"
        class="w-full h-full object-cover"
      />
    </div>
  </article>
</template>
