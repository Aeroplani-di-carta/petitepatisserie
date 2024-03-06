<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();

const { data: navigation } = useAsyncData("navigation", () =>
  prismic.client.getSingle("navigation")
);
</script>

<template>
  <ul class="flex-col hidden w-full gap-8 md:flex lg:flex-row">
    <SliceZone
      wrapper="li"
      :slices="navigation?.data.slices ?? []"
      :components="components"
    />
  </ul>
</template>
