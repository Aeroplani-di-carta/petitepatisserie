<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client"

defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
)
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="h-[50vh] lg:h-[70vh]"
  >
    <div class="grid h-full grid-cols-2 grid-rows-1 gap-6">
      <div :class="{ 'col-start-1 col-end-3 row-start-1 row-end-2 bg-white': slice.variation === 'center' }">
        <PrismicImage
          :field="slice.primary.image"
          class="object-cover object-center w-full h-full "
        />
      </div>
      <div class="bg-[radial-gradient(ellipse_at_center,_#0003_0%,#000_90%)] bg-opacity-40 bg-blend-multiply" :class="{ 'hidden': slice.variation !== 'center', 'col-start-1 col-end-3 row-start-1 row-end-2': slice.variation === 'center' }" />
      <div class="flex flex-col justify-center max-w-xl mx-auto" :class="{ 'col-start-1 col-end-3 row-start-1 row-end-2 items-center': slice.variation === 'center' }">
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
          <!-- <Ubutton
            v-if="isFilled.link(slice.primary.callToActionLink)"

            active-class="active"
          >
            {{ slice.primary.callToActionLabel || "Scopri" }}
          </Ubutton> -->
        </div>
      </div>
    </div>
    <!-- <div class="grid h-full grid-cols-2 grid-rows-3">
      <div
        v-if="isFilled.image(slice.primary.image)"
        class="col-start-1 col-end-3 row-start-1 row-end-4 "
      >
        <PrismicImage
          :field="slice.primary.image"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div class=" row-start-1 row-end-4  from-white from-50%" :class="[slice.variation === 'imageRight' ? 'col-start-2 bg-gradient-to-l' : 'col-start-1 bg-gradient-to-r']" />
      <div class="container row-start-2 " :class="[slice.variation === 'imageRight' ? 'col-start-2 place-self-end' : 'col-start-1 col-end-3 place-self-start']">
        <div class="flex flex-col justify-end max-w-md " :class="{ 'text-right pr-12 ': slice.variation === 'imageRight' }">
          <p
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            v-motion-slide-visible-top
            class="text-sm lg:text-base text-neutral-500"
          >
            {{ slice.primary.eyebrowHeadline }}
          </p>
          {{ slice.variation }}
          <h1
            v-if="isFilled.richText(slice.primary.title)"
            class="mb-4 text-3xl font-medium uppercase md:text-4xl lg:text-7xl text-primary-400"
          >
            <PrismicRichText
              v-motion-slide-visible-top
              :field="slice.primary.title"
              :delay="200"
            />
          </h1>
          <div
            v-if="isFilled.richText(slice.primary.description)"
            class="text-base text-neutral-500 lg:text-2xl"
          >
            <PrismicRichText
              v-motion-slide-visible-top
              :field="slice.primary.description"
              :delay="400"
            />
          </div>
          <div class="flex mt-6 text-center md:mt-12">
            <PrismicLink
              v-if="isFilled.link(slice.primary.callToActionLink)"
              v-motion-slide-visible-top
              :delay="600"
              class="btn cta"
              :field="slice.primary.callToActionLink"
            >
              {{ slice.primary.callToActionLabel || "Scopri" }}
            </PrismicLink>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<style></style>
