<script setup lang="ts">
import { type Content } from "@prismicio/client";
const { client } = usePrismic();
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.ProductByCategorySlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const route = useRoute();
const uid: string = (route.params.uid ||
  props.slice.primary.category) as string;
const { data: product } = useAsyncData("product_id", () =>
  client.getByUID("category", uid)
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="py-24 container"
  >
    <ProductsByCategory :id="product?.id!" />
  </section>
</template>
