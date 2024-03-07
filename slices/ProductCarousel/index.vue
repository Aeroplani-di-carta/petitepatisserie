<script setup lang="ts">
import * as prismic from "@prismicio/client";
const { client } = usePrismic();
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<prismic.Content.ProductCarouselSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const products: any = ref([]);
products.value = await Promise.all(
  props.slice.items.map((slice) => {
    if (
      prismic.isFilled.contentRelationship(slice.product) &&
      slice.product.uid
    ) {
      return client.getByUID(slice.product.type, slice.product.uid);
    } else {
      return { msg: "test" };
    }
  })
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    {{ slice.primary.heading }}

    <!-- <PrismicText :field="slice.primary"></PrismicText> -->
    <pre>
  {{ slice.items.length }}
</pre
    >
    <ul>
      <li v-for="(card, c) in products" :key="c">
        <ProductCard :product="card"></ProductCard>
      </li>
    </ul>
  </section>
</template>
<style lang="postcss">
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16ch, 1fr));
}
</style>
