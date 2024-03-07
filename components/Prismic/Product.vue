<script setup lang="ts">
import { isFilled } from "@prismicio/client";
const props = defineProps<{
  id: string;
  excerpt?: boolean;
}>();

const prismic = usePrismic();

const { data: product } = useAsyncData(`[product_${props.id}]`, () =>
  prismic.client.getByUID("product", props.id)
);
</script>

<template>
  <article class="w-full text-left h-96">
    <div class="h-72 overflow-hidden rounded-xl shadow-xl">
      <img
        v-if="isFilled.image(product?.data.image)"
        :src="product?.data.image.url"
        class="w-full h-full object-cover object-center"
      />
      <div
        v-else
        class="bg-primary flex items-center justify-center w-full h-full"
      >
        <Logo dark />
      </div>
    </div>
    <h4 class="text-left text-xl font-bold py-3">{{ product?.data.title }}</h4>
    <div v-if="excerpt" class="">
      <PrismicRichText
        :field="product?.data.description"
        :class="{ 'text-excerpt': excerpt }"
      ></PrismicRichText>
    </div>
  </article>
</template>
