<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.QuotesSlice>([
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
    class="p-12 bg-primary-100"
  >
    <div class="quote">
      <PrismicRichText
        :field="slice.primary.quote"
        class="max-w-2xl mx-auto text-2xl font-bold text-balance"
      ></PrismicRichText>
      <footer v-if="isFilled.keyText(slice.primary.author)">
        <em>{{ slice.primary.author }}</em>
      </footer>
    </div>
  </section>
</template>
<style lang="postcss" scoped>
.quote {
  @apply relative text-center p-4;
  &::before {
    font-family: serif;
    content: "\201C";
    @apply absolute left-0 top-0  opacity-5;
    font-size: 200px;
    line-height: 100px;
    font-style: italic;
  }
  &::after {
    font-family: serif;
    content: "\201E";
    @apply absolute right-0 bottom-0 opacity-5;
    font-size: 200px;
    line-height: 150px;
    font-style: italic;
  }
}
</style>
