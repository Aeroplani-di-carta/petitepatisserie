<script lang="ts" setup>
// import { useScroll } from "@vueuse/core";

onMounted(() => {
  // const body = document.querySelector("body");
  // const { y } = useScroll(body);
  if (process.client) {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("wheel", onScroll);
  }
});
onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener("scroll", onScroll);
  }
});
const isOver = ref(false);
const onScroll = () => {
  isOver.value = document.body.scrollTop > 120;
};

// const mainMenu = ref<HTMLElement | null>();
</script>

<template>
  <header
    ref="mainMenu"
    class="w-full h-20 text-white flex items-center justify-center fixed z-50 transition-colors"
    :class="{ 'bg-black bg-opacity-70 backdrop-blur-md': isOver }"
  >
    <div class="container gap-4 flex items-center justify-between">
      <div class="flex-none">
        <Logo />
      </div>
      <div class="flex-grow">
        <MainMenu />
      </div>
      <div class="flex-grow-0">
        <SocialLinks class="flex-grow-0" />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
