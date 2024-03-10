<script setup lang="ts">
defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
  horizontal: { type: Boolean, default: false },
});
defineEmits(["close"]);
const prismic = usePrismic();
const { data: socials } = useAsyncData("social", () =>
  // prismic.client.getSingle("social_links")
  prismic.client.getSingle("social_links")
);
</script>

<template>
  <div class="w-full">
    <ul class="flex flex-wrap gap-4 text-sm" :class="{ 'flex-col': vertical }">
      <li v-for="(social, s) in socials?.data.items" :key="s">
        <PrismicLink
          :field="social.link"
          class="flex items-center gap-2 hover:underline hover:brightness-75 group isolate cursor-pointer"
        >
          <Icon :name="social.icon!" size="16" />

          {{ social.label }}
        </PrismicLink>
      </li>
    </ul>
  </div>
</template>
