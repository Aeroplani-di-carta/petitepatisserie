<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(`[product-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("product", route.params.uid as string)
);

useHead({
  title: page.value?.data.title,
  meta: [
    {
      name: "description",
      content: prismic.asText(page.value?.data.description),
    },
  ],
});
</script>

<template>
  <div class="">
    <div class="">
      <div class="h-[30vh] md:[70vh] overflow-hidden">
        <PrismicImage
          v-if="isFilled.image(page?.data.cover)"
          :field="page?.data.cover"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="prose mx-auto flex mt-12 gap-8">
        <div class="w-1/4">
          <PrismicImage
            v-if="isFilled.image(page?.data.image)"
            :field="page?.data.image"
            class="object-cover m-0"
          />
        </div>
        <div class="w-3/4">
          <h1>{{ page?.data.title }}</h1>
          <PrismicRichText :field="page?.data.description"></PrismicRichText>
        </div>
      </div>
    </div>
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
