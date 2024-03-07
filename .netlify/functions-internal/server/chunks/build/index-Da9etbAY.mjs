import { g as getSliceComponentProps, i as PrismicText } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicText = PrismicText;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "bg-primary-500"
      }, _attrs))}><div class="container grid grid-cols-2 py-6 gap-8"><div class="flex flex-col items-end"><h2 class="text-3xl font-bold">${ssrInterpolate(_ctx.slice.primary.title)}</h2>`);
      _push(ssrRenderComponent(_component_PrismicText, {
        field: _ctx.slice.primary.body
      }, null, _parent));
      _push(`</div><div class=""><form netlify class="flex flex-col gap-4"><input type="text" placeholder="Nome e cognome"><input type="email" placeholder="email"><textarea placeholder="Scrivici la tua richiesta"></textarea><button>Invia</button></form></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/ContactForm/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Da9etbAY.mjs.map
