<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client"
import { Carousel, Slide } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"

defineProps(
  getSliceComponentProps<Content.AlternateGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
)
const currentSlide = ref(0)
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container py-12 my-12 border-y-2 border-primary-300"
  >
    <div
      v-if="slice.variation === 'gallery'"
      class="grid items-center gap-12 lg:grid-cols-2"
    >
      <div>
        <Carousel
          v-model="currentSlide"
          :items-to-show="1"
          wrap-around
          pause-autoplay-on-hover
          :autoplay="2500"
          :transition="500"
        >
          <Slide v-for="(item, i) in slice.items" :key="i">
            <PrismicImage
              :field="item.image"
              class="object-cover h-full overflow-hidden rounded-lg aspect-square"
            />
          </Slide>
          <!-- <template #addons>
            <Pagination />
          </template> -->
        </Carousel>
        <div class="flex items-center">
          <ul class="flex gap-2 mx-auto mt-4">
            <li v-for="(page, p) in slice.items" :key="p">
              <button
                class="w-3 h-3 transition-all duration-700 rounded-full bg-primary-100"
                :class="{ active: currentSlide === p }"
                aria-label="Call to action"
                @click.prevent="currentSlide = p"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="px-8">
        <div class="prose text-balance max-w-none">
          <div
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            class="text-brown"
          >
            {{ slice.primary.eyebrowHeadline }}
          </div>
          <PrismicRichText
            v-if="isFilled.richText(slice.primary.title)"
            :field="slice.primary.title"
            class="font-bold text-olive"
          />
          <PrismicRichText
            v-if="isFilled.richText(slice.primary.description)"
            :field="slice.primary.description"
            class="max-w-md text-lg"
          />
        </div>
      </div>
    </div>
    <div v-else class="max-w-4xl mx-auto">
      <div v-for="(item, i) in slice.items" :key="i" class="grid items-center justify-center grid-cols-3 gap-12 my-8">
        <div class="" :class="[i % 2 === 0 ? 'order-first' : '-order-first']">
          <PrismicImage v-if="isFilled.image(item.image)" v-motion-slide-visible-bottom :field="item.image" :delay="i * 100" />
        </div>
        <div class="col-span-2 text-balance" :class="[i % 2 === 0 ? '-order-first' : 'order-first text-right']">
          <PrismicRichText
            v-if="isFilled.richText(item.title)"
            v-motion-slide-visible-top
            :delay="i * 100"
            :field="item.title"
            class="mb-6 text-lg font-medium md:text-5xl"
          />
          <PrismicRichText
            v-if="isFilled.richText(item.description)"
            v-motion-slide-visible-top
            :delay="i * 100 + 100"
            :field="item.description"
            class="text-sm md:text-base text-neutral-500"
          />
        </div>
      </div>

      <!-- <div class="px-8">
        <div class="my-6">
          <div
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            class="text-brown"
          >
            {{ slice.primary.eyebrowHeadline }}
          </div>
          <PrismicRichText
            v-if="isFilled.richText(slice.primary.title)"
            :field="slice.primary.title"
            class="text-4xl font-bold text-olive"
          />
          <PrismicRichText
            v-if="isFilled.richText(slice.primary.description)"
            :field="slice.primary.description"
            class="max-w-md text-lg"
          />
        </div>
        <div
          v-if="slice.items && slice.items.length"
          class="flex flex-col gap-6"
        >
          <div v-for="(item, i) in slice.items" :key="i">
            <PrismicRichText
              v-if="isFilled.richText(item.title)"
              :field="item.title"
              class="text-lg font-bold md:text-xl"
            />
            <PrismicRichText
              v-if="isFilled.richText(item.description)"
              :field="item.description"
              class="text-sm md:text-base text-neutral-500"
            />
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style lang="postcss">
.active {
  @apply bg-primary-500 w-16;
}
</style>
