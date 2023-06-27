<script setup lang="ts">
defineProps({
  title: { type: String, default: "", required: true },
  description: { type: String, default: "" },
  cta: { type: String, default: "" },
  img: { type: String, default: "" },
});
</script>
<template>
  <article class="w-full h-full min-h-[30rem] grid grid-cols-2 bg-slate-100">
    <div class="container flex flex-col items-start justify-center prose">
      <h1 class="max-w-sm text-primary-700">{{ title }}</h1>
      <p class="text-slate-500">
        {{ description }}
      </p>
      <NuxtLink :to="cta">Scopri</NuxtLink>
    </div>
    <div class="max-h-[30rem]">
      <img :src="img" class="object-cover w-full h-full" />
    </div>
  </article>
</template>
