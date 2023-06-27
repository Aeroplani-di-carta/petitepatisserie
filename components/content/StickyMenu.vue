<script lang="ts" setup>
const { navigation } = useContent();
</script>

<template>
  <div class="sticky top-0 z-50 w-full py-6 bg-primary-100">
    <nav class="flex-grow hidden md:block container">
      <ul class="flex gap-6">
        <li v-for="nav in navigation" :key="nav._path">
          <div v-if="nav.children" class="relative nested">
            <NuxtLink :to="nav._path" active-class="active">{{
              nav.title
            }}</NuxtLink>
            <ul class="absolute p-4 shadow-lg bg-primary-100">
              <li v-for="child in nav.children" :key="child._id">
                <NuxtLink
                  :to="child._path"
                  class="whitespace-nowrap hover:underline"
                  active-class="active"
                  >{{ child.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <NuxtLink v-else :to="nav._path" active-class="active">{{
            nav.title
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="postcss">
.link_page {
  @apply relative;
  &::after {
    content: "";
    @apply w-0 absolute transition-all duration-300 bottom-0 left-0 -mb-3 h-full border-red-500 border-b-2 origin-center;
  }
  &:hover {
    &::after {
      @apply w-full right-0;
    }
  }
}

.nested {
  transition: visibility 0s, opacity 2s ease-in-out;
  ul {
    transition: visibility 0s, opacity 0.2s ease-in-out, transform 0.3s ease-out;

    /* display: none; */
    visibility: visible;
    opacity: 0;
    transform: translateY(20px);
    min-width: theme("spacing.48");
    li {
      @apply py-1;
    }
  }
  &:hover ul {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }
}
.active {
  @apply font-bold text-primary-700;
}
</style>
