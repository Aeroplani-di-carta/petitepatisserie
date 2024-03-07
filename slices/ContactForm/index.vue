<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ContactFormSlice>([
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
    class="bg-primary-500"
  >
    <div class="container grid grid-cols-2 py-6 gap-8">
      <div class="flex flex-col items-end">
        <h2 class="text-3xl font-bold">{{ slice.primary.title }}</h2>
        <PrismicText :field="slice.primary.body"></PrismicText>
      </div>
      <div class="">
        <form netlify class="flex flex-col gap-4">
          <input type="text" placeholder="Nome e cognome" />
          <input type="email" placeholder="email" />
          <textarea placeholder="Scrivici la tua richiesta"></textarea>
          <button>Invia</button>
        </form>
      </div>
    </div>
  </section>
</template>
