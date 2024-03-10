<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.HeroSlice>([
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
    class="lg:h-[70vh] z-0"
    :class="[slice.variation === 'imageRight' ? 'h-[65vh]' : 'h-[50vh]']"
  >
    <div class="grid h-full grid-cols-2 grid-rows-1 gap-6">
      <div
        :class="{
          'col-start-1 col-end-3 row-start-1 row-end-2 bg-white':
            slice.variation === 'center',
          'col-start-2 col-end-3 row-start-1 row-end-2 py-12 flex items-center justify-center':
            slice.variation === 'imageRight',
        }"
      >
        <PrismicImage
          :field="slice.primary.image"
          class="object-center h-full"
          :class="[
            slice.variation === 'imageRight'
              ? 'aspect-3/4 rounded-xl object-contain'
              : 'w-full object-cover',
          ]"
        />
      </div>
      <div
        v-if="slice.variation === 'center'"
        class="bg-[radial-gradient(ellipse_at_center,_#0003_0%,#000_90%)] bg-opacity-40 bg-blend-multiply"
        :class="{
          'col-start-1 col-end-3 row-start-1 row-end-2':
            slice.variation === 'center',
        }"
      />
      <div
        class="flex flex-col justify-center max-w-xl mx-auto"
        :class="{
          'col-start-1 col-end-3 row-start-1 row-end-2 items-center':
            slice.variation === 'center',
          'cols-start-1 col-end-2': slice.variation === 'imageRight',
        }"
      >
        <p
          v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
          v-motion-slide-visible-top
          class="text-sm lg:text-base"
          :class="{ 'text-white': slice.variation === 'center' }"
        >
          {{ slice.primary.eyebrowHeadline }}
        </p>

        <h1
          v-if="isFilled.richText(slice.primary.title)"
          class="mb-4 text-3xl font-medium uppercase md:text-4xl lg:text-7xl text-primary-400 text-balance"
          :class="{ 'text-center': slice.variation === 'center' }"
        >
          <PrismicRichText
            v-motion-slide-visible-top
            :field="slice.primary.title"
            :delay="200"
          />
        </h1>
        <div
          v-if="isFilled.richText(slice.primary.description)"
          class="text-base lg:text-2xl"
          :class="{ 'text-center text-white': slice.variation === 'center' }"
        >
          <PrismicRichText
            v-motion-slide-visible-top
            :field="slice.primary.description"
            :delay="400"
          />
        </div>
        <div class="flex mt-6 text-center md:mt-12">
          <UButton
            v-if="isFilled.link(slice.primary.callToActionLink)"
            size="xl"
            :to="slice.primary.callToActionLink.url"
          >
            {{ slice.primary.callToActionLabel || "Scopri" }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
