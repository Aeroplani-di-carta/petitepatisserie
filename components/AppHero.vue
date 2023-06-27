<script setup lang="ts">
defineProps({
  title: { type: String, default: "", required: true },
  description: { type: String, default: "", required: true },
  cta: { type: String, default: "", required: true },
});
</script>
<template>
  <article class="w-full h-full min-h-[30rem] grid grid-cols-2">
    <div class="container flex flex-col items-start justify-center prose">
      <h1 class="">{{ title }}</h1>
      <p>
        {{ description }}
      </p>
      <button>{{ cta }}</button>
    </div>
    <div class="">
      <img
        src="https://dummyimage.com/640x360/fff/aaa"
        class="object-cover w-full h-full"
      />
    </div>
  </article>
</template>
