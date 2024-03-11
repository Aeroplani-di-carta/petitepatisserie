<script setup lang="ts">
import { isFilled } from "@prismicio/client";
const props = defineProps<{
  id?: string;
  prod?: any;
  excerpt?: boolean;
  small?: boolean;
}>();

const prismic = usePrismic();
const product = ref();

// onMounted(async () => {
if (props.id) {
  const { data } = await useAsyncData(`[product_${props.id}]`, () =>
    prismic.client.getByUID("product", props.id!)
  );
  product.value = data.value;
} else {
  product.value = props.prod;
}

// });
</script>

<template>
  <NuxtLink
    :to="`/prodotti/${product?.uid}`"
    class="w-full text-left"
    :class="[small ? 'h-56' : 'h-96']"
  >
    <div
      class="overflow-hidden rounded-xl shadow-xl"
      :class="[small ? 'h-48' : 'h-72']"
    >
      <img
        v-if="isFilled.image(product?.data.image)"
        :src="product?.data.image.url"
        class="w-full h-full object-cover object-center"
      />
      <div
        v-else
        class="bg-primary flex items-center justify-center w-full h-full"
      >
        <!-- <Logo dark /> -->
        <img src="/img/logo.svg" />
      </div>
    </div>
    <h4 class="text-left text-xl font-bold py-3">{{ product?.data.title }}</h4>
    <div v-if="excerpt" class="">
      <PrismicRichText
        :field="product?.data.description"
        :class="{ 'text-excerpt': excerpt }"
      ></PrismicRichText>
    </div>
  </NuxtLink>
</template>
