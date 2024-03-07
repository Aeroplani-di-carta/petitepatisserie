<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.MenuItemSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="relative mx-2 mt-4 lg:inline-block group lg:mt-0 z-50"
  >
    <div v-if="slice.variation === 'withSubMenu'" class="z-50">
      <div class="cursor-default lg:py-6 hover:text-primary">
        {{ slice.primary.label }}
      </div>
      <ul
        class="lg:absolute z-50 lg:hidden rounded-xl flex-col gap-2 lg:bg-slate-700 lg:shadow-lg lg:group-hover:flex whitespace-nowrap min-w-[16rem] overflow-hidden"
      >
        <li
          v-for="(item, i) in slice.items"
          :key="i"
          class="w-full px-4 py-2 first:pt-4 last:pb-4 hover:text-slate-500 hover:bg-white cursor-pointer"
        >
          <PrismicLink
            :field="item.child_link"
            class="inline-block w-full py-1"
            active-class="underline text-primary"
          >
            {{ item.child_label }}
          </PrismicLink>
        </li>
      </ul>
    </div>
    <div v-else>
      <PrismicLink
        :field="slice.primary.link"
        class="py-5 hover:text-primary"
        active-class="font-medium text-primary"
      >
        {{ slice.primary.label }}
      </PrismicLink>
    </div>
  </section>
</template>
