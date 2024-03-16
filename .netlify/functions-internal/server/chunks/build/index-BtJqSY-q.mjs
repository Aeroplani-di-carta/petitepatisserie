import { _ as __nuxt_component_0 } from './Logo-DW0ZSvjy.mjs';
import { i as getSliceComponentProps } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
      const _component_Logo = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation
      }, _attrs))}> Placeholder component for app_footer (variation: ${ssrInterpolate(_ctx.slice.variation)}) Slices <footer class="py-12 bg-neutral-100"><div class="container">`);
      _push(ssrRenderComponent(_component_Logo, null, null, _parent));
      _push(`<div class="text-sm mt-6 text-slate-500">${ssrInterpolate(_ctx.slice.primary.info)} <p>Vico 1&#39; Eroi di Cefalonia</p><p>70037 Ruvo di Puglia</p><p>Puglia, Italia</p></div></div></footer></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/AppFooter/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BtJqSY-q.mjs.map
