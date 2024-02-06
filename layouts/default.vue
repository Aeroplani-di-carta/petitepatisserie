<template>
  <div class="h-screen flex flex-col justify-between">
    <StickyMenu />
    <div class="">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
