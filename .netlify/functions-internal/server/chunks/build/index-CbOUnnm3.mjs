import { g as getSliceComponentProps, f as PrismicImage, h as PrismicRichText } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
      const _component_PrismicImage = PrismicImage;
      const _component_PrismicRichText = PrismicRichText;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "grid gap-4 py-12 my-20 text-white md:grid-cols-2 bg-primary-950"
      }, _attrs))}><div class="" class="${ssrRenderClass([{ "order-last": _ctx.slice.primary.reverse }, ""])}">`);
      _push(ssrRenderComponent(_component_PrismicImage, {
        field: _ctx.slice.primary.image,
        class: ["object-cover shadow-2xl max-w-[20rem] aspect-square rounded-xl scale-150 translate-x-20", [_ctx.slice.primary.reverse ? "rotate-12" : "-rotate-12"]]
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ container: _ctx.slice.primary.reverse }, "flex flex-col justify-center w-2/3 prose text-white"])}"><h1 class="text-primary-500">${ssrInterpolate(_ctx.slice.primary.title)}</h1>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: _ctx.slice.primary.body
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/SkewHero/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CbOUnnm3.mjs.map
