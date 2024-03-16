<script setup lang="ts">
const props = defineProps<{
  id: string;
}>();

const prismic = usePrismic();

const { data: products } = useAsyncData(`[products_${props.id}]`, () =>
  prismic.client.getAllByType("product", {
    filters: [prismic.filter.at("my.product.category", props.id)],
    orderings: [{ field: "my.product.uid", direction: "asc" }],
  })
);
console.log("DATA PRODS", props.id, products.value);
</script>

<template>
  <div class="">
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-8 flex-wrap">
      <li v-for="product in products" :key="product.id">
        <PrismicProduct :prod="product" small></PrismicProduct>
      </li>
    </ul>
  </div>
</template>
