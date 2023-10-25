<script setup lang="ts">
import * as prismic from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<prismic.Content.StickyMenuSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <!-- Placeholder component for sticky_menu (variation: {{ slice.variation }})
    Slices -->
  <div
    class="sticky top-0 z-50 w-full py-6 bg-primary-100"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <nav class="flex-grow hidden md:block container">
      <ul class="flex gap-6">
        <li v-for="(nav, n) in slice.items" :key="n">
          <!--
          <div v-if="nav.children" class="relative nested">
            <NuxtLink :to="nav._path" active-class="active">{{
              nav.title
            }}</NuxtLink>
            <ul class="absolute p-4 shadow-lg bg-primary-100">
              <li v-for="child in nav.children" :key="child._id">
                <NuxtLink
                  :to="child._path"
                  class="whitespace-nowrap hover:underline"
                  active-class="active"
                  >{{ child.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
   -->
          <PrismicLink :field="nav.route" active-class="active">
            {{ nav.label }}
          </PrismicLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
