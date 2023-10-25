<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("[productpage]", () =>
  prismic.client.getSingle("productpage")
);
console.log("Home", page.value);
useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description as string,
    },
  ],
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
