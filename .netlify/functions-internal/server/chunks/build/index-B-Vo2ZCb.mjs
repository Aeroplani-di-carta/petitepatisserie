import { g as getSliceComponentProps, h as PrismicRichText, r as PrismicEmbed } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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
      const _component_PrismicRichText = PrismicRichText;
      const _component_PrismicEmbed = PrismicEmbed;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "px-2 py-16 text-white md:px-8 bg-gradient-to-tr from-primary-500 to-primary-700 max-w-none"
      }, _attrs))}><div class="container"><div class="prose text-center text-white max-w-none balance"><h2 class="text-3xl text-white">${ssrInterpolate(_ctx.slice.primary.title)}</h2>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: _ctx.slice.primary.description,
        class: ""
      }, null, _parent));
      _push(`</div><ul class="flex flex-col gap-4 md:grid md:gap-12" style="${ssrRenderStyle(`grid-template-columns:repeat(${_ctx.slice.primary.columns}, minmax(0,1fr)`)}"><!--[-->`);
      ssrRenderList(_ctx.slice.items, (item, i) => {
        _push(`<li><h3 class="mb-4 text-sm md:text-xl">${ssrInterpolate(item.title)}</h3>`);
        _push(ssrRenderComponent(_component_PrismicEmbed, {
          field: item.embed,
          class: "w-full aspect-video"
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/VideoGrid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B-Vo2ZCb.mjs.map
