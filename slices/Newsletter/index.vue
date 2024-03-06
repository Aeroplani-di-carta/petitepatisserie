<script setup lang="ts">
import type { Content } from "@prismicio/client"

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.NewsletterSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
)
const isLoading = ref(false)
const isRegistered = ref(false)
const error: Ref<string | null> = ref(null)
const email = ref("")
async function addTonNewsletter() {
  console.log("Adding to newsletter ", email.value)
  try {
    isLoading.value = true
    const data: any = await $fetch(`/api/mail/mailchimp`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: email.value,
      },
      method: "POST",
    })
    console.log("Added to newsletter", data)
    if (data.error)
      error.value = "Utente già registrato"

    isRegistered.value = true
  }
  catch (error) {
    isRegistered.value = false
    console.log("errore mailchimps", error)
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="">
    <section
      id="newsletter"
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      class="w-full px-4 py-12 bg-gradient-to-tr from-primary-300 to-primary-500"
    >
      <form
        class="container flex flex-col items-center max-w-lg gap-4"
        name="newsletter"
        :disabled="isRegistered"
        @submit.prevent="addTonNewsletter"
      >
        <h4 class="text-3xl font-bold text-center text-fallow-100">
          {{ slice.primary.title }}
        </h4>
        <div class="max-w-2xl text-center text-neutral-100 balance">
          <PrismicRichText :field="slice.primary.description" />
        </div>
        <div v-if="isRegistered" class="flex flex-col items-center">
          <div v-if="error" class="">
            {{ error }}
          </div>
          <div
            v-else
            class="px-6 py-2 bg-white border-4 rounded-md border-primary-500"
          >
            Grazie per esserti iscritto
            <Icon
              name="ci:chat-check"
              size="64"
              class="text-primary-400"
            />
          </div>
        </div>
        <!-- <label v-else for="email" class="flex w-full"> -->
        <UButtonGroup size="lg" orientation="horizontal">
          <UInput />
          <UButton icon="i-heroicons-envelope" color="gray" type="submit" @click="addTonNewsletter" />
        </UButtonGroup>
        <!-- <input
            id="email"
            v-model="email"
            type="email"
            class="w-full p-2 border border-r-0 rounded rounded-r-none focus:outline-none border-primary-600"
            placeholder="mario.rossi@esempio.com"
            autocomplete="email"
          >
          <button
            type="submit"
            name="submitNewsletter"
            aria-label="Subscribe to newsletter"
            class="px-4 text-white border border-l-0 rounded-r border-primary-600 bg-primary-600"
          >
            <Icon
              :name="isLoading ? 'line-md:loading-loop' : 'mdi:email-outline'"
              size="24"
            />
          </button> -->
        <!-- </label> -->
        <div class="max-w-lg text-[10px] text-center text-neutral-100">
          <PrismicRichText :field="slice.primary.disclaimer" />
        </div>
      </form>
    </section>
  </div>
</template>
