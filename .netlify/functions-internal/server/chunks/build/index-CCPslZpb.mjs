import __nuxt_component_0 from './Icon-B_Ch9MOY.mjs';
import { _ as _sfc_main$1 } from './SocialLinks-Ck-N_CRt.mjs';
import { _ as __nuxt_component_4 } from './Button-DBtoH579.mjs';
import { i as getSliceComponentProps, d as useRoute } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C91WxrSi.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import '@prismicio/client';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
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
      customization: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_SocialLinks = _sfc_main$1;
      const _component_UButton = __nuxt_component_4;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "container px-8 py-24"
      }, _attrs))} data-v-9537465a><div id="contact_form" class="max-w-4xl mx-auto" data-v-9537465a><div class="prose-xl text-center" data-v-9537465a><h3 class="" data-v-9537465a>${ssrInterpolate(_ctx.slice.primary.title)}</h3></div><form netlify method="post" name="contact-form" data-v-9537465a><input type="hidden" name="form-name" value="contact-form" data-v-9537465a>`);
      if (unref(messageSend)) {
        _push(`<div class="flex items-center gap-8" data-v-9537465a>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ci:chat-check",
          size: "96",
          class: "text-green-400"
        }, null, _parent));
        _push(`<div class="" data-v-9537465a><h4 class="text-3xl font-bold" data-v-9537465a>La tua richiesta \xE8 arrivata!</h4><p data-v-9537465a>Controlla la tua mail nelle prossime ore! \u{1F49A}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(messageSend) === false) {
        _push(`<div class="flex items-center gap-8" data-v-9537465a>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ci:chat-check",
          size: "96",
          class: "text-red-400"
        }, null, _parent));
        _push(`<div class="" data-v-9537465a><h4 class="text-3xl font-bold" data-v-9537465a>Oh no! \u{1F635}</h4><p data-v-9537465a> La tua richiesta non \xE8 andata a buon fine.<br data-v-9537465a> Riprova tra qualche minuto </p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<fieldset${ssrIncludeBooleanAttr(unref(messageSend)) ? " disabled" : ""} class="${ssrRenderClass({ "opacity-20": unref(messageSend) })}" data-v-9537465a><legend data-v-9537465a>Informazioni di contatto</legend><p class="mb-4 -mt-4 text-sm text-neutral-400" data-v-9537465a> i campi contrassegnati con <strong data-v-9537465a>*</strong> sono obbligatori </p><div class="grid grid-cols-2 gap-4" data-v-9537465a><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Nome *" required name="nome" data-v-9537465a><input${ssrRenderAttr("value", unref(form).surname)} type="text" placeholder="Cognome *" required name="cognome" data-v-9537465a><input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="Email *" required inputmode="email" name="email" autocomplete="email" data-v-9537465a><input${ssrRenderAttr("value", unref(form).phone)} type="tel" placeholder="Telefono *" required inputmode="tel" name="telefono" data-v-9537465a></div><legend class="mt-6" data-v-9537465a>Il tuo messaggio</legend><div class="relative" data-v-9537465a>`);
      if (_ctx.slice.variation === "flat") {
        _push(`<div class="absolute p-1 cursor-pointer top-2 right-2 text-primary-300" data-v-9537465a><button class="sparkle" data-v-9537465a>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:sparkle-light",
          size: "24"
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea name="messaggio" data-v-9537465a>${ssrInterpolate(unref(form).message)}</textarea></div><div class="flex items-baseline justify-between" data-v-9537465a>`);
      _push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        "aria-label": "Send contact form",
        type: "submit",
        class: "flex px-12 py-2 mt-6 text-white rounded bg-primary-600 hover:bg-primary-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Invia `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: unref(isSending) ? "line-md:loading-twotone-loop" : "prime:send",
              size: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Invia "),
              createVNode(_component_Icon, {
                name: unref(isSending) ? "line-md:loading-twotone-loop" : "prime:send",
                size: "24"
              }, null, 8, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></fieldset></form></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/ContactForm/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9537465a"]]);

export { index as default };
//# sourceMappingURL=index-CCPslZpb.mjs.map
