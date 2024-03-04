<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const props = defineProps({
  container: {
    type: Boolean,
    default: false,
  },
  fetch: {
    type: String,
    default: ""
  },
  column:{
    type:String,
    default: "1"
  }
});
const articles = await queryContent(`/${props.fetch}`).where({img:{$exists:true}}).find()
const custom_width=90/Number(props.column)
</script>
<template>

 <div :class="{container} " class="space-y-12">
  <div class="relative w-full flex snap-x snap-mandatory overflow-x-auto gap-12 py-12">
    <div :style="`width: ${custom_width}%`" class="aspect-square snap-start scroll-mx-6 shrink-0" v-for="article in articles" :key="article._path">
      <NuxtLink :to="article._path">
        <img :src="article.img" class="object-cover w-full h-full" />
      </NuxtLink>
    </div>
 </div>
  <slot></slot>
 </div>
</template>
<style lang="postcss" scoped>

.overlay{
  position:relative;
  /* z-index: -2; */
  &:after{
    content:'';
    position: absolute;
    background-color: white;
    inset:0;
    opacity: .5;
    z-index: -1;
  }
}
</style>