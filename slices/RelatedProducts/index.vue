<script setup lang="ts">
import type { Content } from "@prismicio/client";
const prismic = usePrismic();
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.RelatedProductsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const route = useRoute();
const { id } = await prismic.client.getByUID(
  "product",
  route.params.uid as string
);
console.log("PROPS", props.context, props.index, props.slice, id);
const { data: similar } = await useAsyncData(
  `similar_product_${route.params.uid}`,
  () =>
    prismic.client.getByType("product", {
      filters: [prismic.filter.similar(id as string, 3)],
    })
);
console.log("Similar", similar.value);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="bg-primary py-12"
  >
    <div class="prose text-center mx-auto my-6">
      <h2>Correlati</h2>
    </div>
    <ul class="container grid md:grid-cols-3 gap-8">
      <li v-for="(prod, p) in similar?.results" :key="p">
        <PrismicProduct :prod="prod" />
        <!-- <div class="w-full aspect-square">
          <PrismicImage :field="prod.data.image" />
        </div>
        {{ prod.data.title }} -->
      </li>
    </ul>
  </section>
</template>
