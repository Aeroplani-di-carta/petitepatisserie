<script setup lang="ts">
import { type Content } from "@prismicio/client";
const prismic = usePrismic();
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CategoryGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { data: categories } = useAsyncData("categories", () =>
  prismic.client.getAllByType("category", {
    orderings: [{ field: "my.category.uid", direction: "asc" }],
  })
);
console.log("Cats", categories.value);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="py-12 bg-gradient-to-tr from-primary-200 to-purple-100"
  >
    <div class="prose mx-auto text-center">
      <h1>{{ slice.primary.title }}</h1>
      <PrismicRichText :field="slice.primary.description" />
    </div>
    <div class="container">
      <ul>
        <li
          v-for="(category, c) in categories"
          :key="c"
          class="flex flex-col md:flex-row justify-between items-start gap-8 mb-4 md:mb-8"
        >
          <div
            class="flex-none flex-grow-0 md:w-48 p-3 md:p-0 bg-primary-700 md:bg-transparent w-full rounded-xl shadow-xl md:shadow-none"
          >
            <h2 class="font-medium text-2xl">{{ category.data.title }}</h2>
          </div>
          <div class="flex-grow prod_cat">
            <ProductsByCategory :id="category.id" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
