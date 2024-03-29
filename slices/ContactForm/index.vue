<script setup lang="ts">
import type * as prismic from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<prismic.Content.ContactFormSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const route = useRoute();
const isSending = ref(false);
const messageSend = ref();
const form = ref({
  formName: route.params.uid || "contacts",
  name: "",
  surname: "",
  email: "",
  phone: "",
  // reason: "",
  message: "",

  customization: false,
});
async function send(event: Event) {
  event.preventDefault();

  // const myForm = event.target as HTMLFormElement;
  try {
    isSending.value = true;
    const formData = await $fetch("https://usebasin.com/f/0d8424e7bf30", {
      method: "POST",
      body: form.value,
    });

    console.log("Form submited", formData);
    messageSend.value = true;
  } catch (error) {
    console.log("Errore FORM", error);
    messageSend.value = false;
  } finally {
    isSending.value = false;
  }
}

function composeMessage() {
  //   form.value.message = `Ciao Don Cactus,
  // Mi chiamo ${form.value.name} ${form.value.surname} e sto organizzando un evento per il prossimo ${formatDate(new Date(form.value.date), "DD MMMM YYYY")}.
  // Mi piacerebbe ricevere un preventivo per l'acquisto di ${form.value.quantity} "${form.value.articles}" ${form.value.customization ? "da personalizzare" : ""}.
  // Potresti gentilmente inviarmi tutte le informazioni necessarie, inclusi i prezzi e le modalità di consegna?`
}
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container px-8 py-24"
  >
    <div id="contact_form" class="max-w-4xl mx-auto">
      <div class="prose-xl text-center">
        <h3 class="">
          {{ slice.primary.title }}
        </h3>
        <!-- <PrismicRichText :field="slice.primary.description" /> -->
      </div>

      <form netlify method="post" name="contact-form" @submit.prevent="send">
        <input type="hidden" name="form-name" value="contact-form" />
        <div v-if="messageSend" class="flex items-center gap-8">
          <Icon name="ci:chat-check" size="96" class="text-green-400" />
          <div class="">
            <h4 class="text-3xl font-bold">La tua richiesta è arrivata!</h4>
            <p>Controlla la tua mail nelle prossime ore! 💚</p>
          </div>
        </div>
        <div v-if="messageSend === false" class="flex items-center gap-8">
          <Icon name="ci:chat-check" size="96" class="text-red-400" />
          <div class="">
            <h4 class="text-3xl font-bold">Oh no! 😵</h4>
            <p>
              La tua richiesta non è andata a buon fine.<br />
              Riprova tra qualche minuto
            </p>
          </div>
        </div>
        <fieldset
          :disabled="messageSend"
          :class="{ 'opacity-20': messageSend }"
        >
          <legend>Informazioni di contatto</legend>
          <p class="mb-4 -mt-4 text-sm text-neutral-400">
            i campi contrassegnati con <strong>*</strong> sono obbligatori
          </p>
          <div class="grid grid-cols-2 gap-4">
            <input
              v-model="form.name"
              type="text"
              placeholder="Nome *"
              required
              name="nome"
            />
            <input
              v-model="form.surname"
              type="text"
              placeholder="Cognome *"
              required
              name="cognome"
            />
            <input
              v-model="form.email"
              type="email"
              placeholder="Email *"
              required
              inputmode="email"
              name="email"
              autocomplete="email"
            />
            <input
              v-model="form.phone"
              type="tel"
              placeholder="Telefono *"
              required
              inputmode="tel"
              name="telefono"
            />
          </div>

          <!-- <div v-if="slice.variation === 'default'" class="">
            <legend class="mt-6">
              Di cosa hai bisogno? *
            </legend>
            <select v-model="form.reason" required name="reason">
              <option
                v-for="val in ['informazioni', 'preventivi']"
                :key="val"
                :value="val"
                class="capitalize"
              >
                {{ val }}
              </option>
            </select>
          </div> -->

          <legend class="mt-6">Il tuo messaggio</legend>

          <div class="relative">
            <div
              v-if="slice.variation === 'flat'"
              class="absolute p-1 cursor-pointer top-2 right-2 text-primary-300"
            >
              <button class="sparkle" @click.prevent="composeMessage">
                <Icon name="ph:sparkle-light" size="24" />
              </button>
            </div>
            <textarea v-model="form.message" name="messaggio" />
          </div>
          <div class="flex items-baseline justify-between">
            <SocialLinks />

            <UButton
              aria-label="Send contact form"
              type="submit"
              class="flex px-12 py-2 mt-6 text-white rounded bg-primary-600 hover:bg-primary-700"
            >
              Invia
              <Icon
                :name="
                  isSending ? 'line-md:loading-twotone-loop' : 'prime:send'
                "
                size="24"
              />
            </UButton>
          </div>
        </fieldset>
      </form>
    </div>
  </section>
</template>

<style scoped lang="postcss">
form {
  width: 100% !important;
  fieldset:not(:first-child) {
    @apply mt-6;
  }
  fieldset {
    legend {
      @apply font-bold text-lg mb-2;
    }
  }
  input,
  textarea,
  select {
    @apply w-full p-2 border rounded focus:outline-none border-primary-300;
  }
  textarea {
    @apply min-h-[15ch] lg:min-h-[20ch];
  }
  &:invalid button.sparkle {
    @apply opacity-20 cursor-not-allowed;
  }
  &:invalid button[type="submit"] {
    @apply bg-neutral-300 cursor-not-allowed;
  }
}
</style>
