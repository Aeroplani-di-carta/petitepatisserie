<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const props = defineProps({
  container: {
    type: Boolean,
    default: false,
  },
  fetch:{
    type:String,
    default:"",
  },
  items:{
    type: Array,
    default: ()=>[]
  },
  column:{
    type:Number,
    default: 1
  }
});

const currentSlide = ref(0)
const breakpoints = {
  320: {
    itemsToShow: 1.2,
  },
  700: {
    itemsToShow: 3.2,
  },
  1024: {
    itemsToShow: props.column,
  },
};
const articles = await queryContent(`/${props.fetch}`).where({img:{$exists:true}}).find()
console.log("Articles",articles)
</script>

<template>
  <section class="py-12">
    <Carousel
    v-model="currentSlide"
          :items-to-show="column"
          wrap-around
          pause-autoplay-on-hover
          :autoplay="2500"
          :transition="500"
          :breakpoints="breakpoints"
    >
      <Slide v-for="(item, i) in articles" :key="i">
      {{ item }}
      </Slide>
    </Carousel>
  </section>
</template>