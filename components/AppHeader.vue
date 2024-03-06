<script lang="ts" setup></script>

<template>
  <header
    class="w-full h-20 text-white flex items-center justify-center fixed z-50"
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
