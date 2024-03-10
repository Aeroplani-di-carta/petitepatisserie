<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(`[category-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("category", route.params.uid as string)
);

useHead({
  title: page.value?.data.title,
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
