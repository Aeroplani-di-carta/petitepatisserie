<script setup lang="ts">
useHead({
  titleTemplate: (title) => `${title} | Petite patisserie`,
});
</script>

<template>
  <div class="h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- <CookieControl locale="it" /> -->
  </div>
</template>

<style lang="postcss">
body {
  @apply font-body font-light;
}
/* 
*/
html,
body {
  @apply h-screen w-screen overflow-x-hidden;
}
</style>
