<script setup lang="ts">
defineProps({
  img:{
    type:String,
    default:''
  },
  fetch:{
    type:String,
    default:''
  },
  reverse:{
    type:Boolean,
    default:false
  }
})
</script>
<template>
   <div
      class="grid gap-4 py-12 my-20 text-white md:grid-cols-2 bg-primary-950" 
    >
      <div class="" :class="{'order-last':reverse}">
        <img
          :src="img"
          alt=""
          class="object-cover shadow-2xl max-w-[20rem] aspect-square rounded-xl scale-150 translate-x-20 "
          :class="[reverse?'rotate-12':'-rotate-12']"
        />
      </div>
      <div class="flex flex-col justify-center w-2/3 prose text-white" :class="{container:reverse}">
      <slot>
        <ContentDoc :path="fetch" v-if="fetch"></ContentDoc>
      </slot>
        <!-- <h3 class="text-primary-500">Pippo</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          consectetur repellendus suscipit quam dolore inventore debitis
          laudantium tempore facilis omnis, id nostrum, cumque incidunt libero
          voluptas labore doloribus ab molestiae?
        </p> -->
      </div>
    </div>
</template>