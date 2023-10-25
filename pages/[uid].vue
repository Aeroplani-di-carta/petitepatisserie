<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[productpage-uid]", () =>
  prismic.client.getByUID("home", route.params.id as string)
);

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
  <div class="">
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
