<script setup lang="ts">
const props = defineProps({
  container: {
    type: Boolean,
    default: false,
  },
  fetch: {
    type: String,
    default: ""
  },
  column: {
    type: String,
    default: "0"
  }
});
const articles = await queryContent(`/${props.fetch}`).where({ img: { $exists: true } }).find()
</script>
<template>
  
  <div :class="{ container }" class="space-y-12">
    <ContentDoc :path="`/${fetch}`" v-if="fetch" class="prose" />
    <div class="grid grid-cols-custom gap-12" :style="`grid-template-columns: repeat(${column}, minmax(0, 1fr))`">
      <div class="w-full aspect-square" v-for="article in articles" :key="article._path">
        <NuxtLink :to="article._path" class="hover:opacity-60">
          <img :src="article.img" class="object-cover w-full h-full" />
        </NuxtLink>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<style lang="postcss" scoped>
.overlay {
  position: relative;

  /* z-index: -2; */
  &:after {
    content: '';
    position: absolute;
    background-color: white;
    inset: 0;
    opacity: .5;
    z-index: -1;
  }
}
</style>