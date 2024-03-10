<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AppFooterSlice>([
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
  >
    Placeholder component for app_footer (variation: {{ slice.variation }})
    Slices
    <footer class="py-12 bg-neutral-100">
      <div class="container">
        <Logo />
        <div class="text-sm mt-6 text-slate-500">
          {{ slice.primary.info }}
          <p>Vico 1' Eroi di Cefalonia</p>
          <p>70037 Ruvo di Puglia</p>
          <p>Puglia, Italia</p>
        </div>
      </div>
    </footer>
  </section>
</template>
