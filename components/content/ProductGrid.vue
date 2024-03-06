<script setup lang="ts">
const props = defineProps({
  category:{
    type: String,
    default:""
  }
})
const { data } = await useAsyncData(`prodotti_${props.category}`, () => queryContent(`prodotti`).where({"category":props.category}).find())
</script>

<template>
<div class="container py-12">
  
    <h1>La categoria {{ category }}</h1>
    <ul>
      <li v-for="(product, p) in data" :key="p">{{ product.title }}</li>
    </ul>
</div>
</template>