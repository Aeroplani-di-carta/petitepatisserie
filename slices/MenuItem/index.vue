<script setup lang="ts">
import type { Content } from "@prismicio/client";
import { onClickOutside } from "@vueuse/core";
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
const isOpen = ref(false);
const menuItem = ref();
onClickOutside(menuItem, () => {
  isOpen.value = false;
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="relative mx-2 mt-4 lg:inline-block group lg:mt-0 z-50"
  >
    <div v-if="slice.variation === 'withSubMenu'" ref="menuItem" class="z-50">
      <button
        class="cursor-pointer lg:py-6 hover:text-primary"
        @click="isOpen = !isOpen"
        @mouseover="isOpen = true"
      >
        {{ slice.primary.label }}
      </button>
      <Transition name="slide">
        <ul
          v-if="isOpen"
          class="lg:absolute z-50 rounded-sm flex-col gap-2 bg-black lg:bg-opacity-70 backdrop-blur-lg lg:shadow-lg whitespace-nowrap min-w-[16rem] overflow-hidden"
        >
          <li
            v-for="(item, i) in slice.items"
            :key="i"
            class="w-full px-4 py-2 first:pt-4 last:pb-4 hover:text-primary-200 hover:bg-slate-900 cursor-pointer"
          >
            <PrismicLink
              :field="item.child_link"
              class="inline-block w-full py-1"
              active-class="text-primary font-bold"
              @click="isOpen = false"
            >
              {{ item.child_label }}
            </PrismicLink>
          </li>
        </ul>
      </Transition>
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
