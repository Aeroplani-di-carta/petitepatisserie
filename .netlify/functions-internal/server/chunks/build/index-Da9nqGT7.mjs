import { i as getSliceComponentProps, P as PrismicImage, f as PrismicRichText } from './server.mjs';
import { _ as __nuxt_component_4 } from './Button-DBtoH579.mjs';
import { defineComponent, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import { isFilled } from '@prismicio/client';
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
import 'tailwind-merge';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Icon-B_Ch9MOY.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C91WxrSi.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicImage = PrismicImage;
      const _component_PrismicRichText = PrismicRichText;
      const _component_UButton = __nuxt_component_4;
      const _directive_motion_slide_visible_top = resolveDirective("motion-slide-visible-top");
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: ["lg:h-[70vh] z-0", [_ctx.slice.variation === "imageRight" ? "h-[65vh]" : "h-[50vh]"]]
      }, _attrs))}><div class="grid h-full grid-cols-2 grid-rows-1 gap-6"><div class="${ssrRenderClass({
        "col-start-1 col-end-3 row-start-1 row-end-2 bg-white": _ctx.slice.variation === "center",
        "col-start-2 col-end-3 row-start-1 row-end-2 py-12 flex items-center justify-center": _ctx.slice.variation === "imageRight"
      })}">`);
      _push(ssrRenderComponent(_component_PrismicImage, {
        field: _ctx.slice.primary.image,
        class: ["object-center h-full", [
          _ctx.slice.variation === "imageRight" ? "aspect-3/4 rounded-xl object-contain" : "w-full object-cover"
        ]]
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.slice.variation === "center") {
        _push(`<div class="${ssrRenderClass([{
          "col-start-1 col-end-3 row-start-1 row-end-2": _ctx.slice.variation === "center"
        }, "bg-[radial-gradient(ellipse_at_center,_#0003_0%,#000_90%)] bg-opacity-40 bg-blend-multiply"])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{
        "col-start-1 col-end-3 row-start-1 row-end-2 items-center": _ctx.slice.variation === "center",
        "cols-start-1 col-end-2": _ctx.slice.variation === "imageRight"
      }, "flex flex-col justify-center max-w-xl mx-auto"])}">`);
      if (unref(isFilled).keyText(_ctx.slice.primary.eyebrowHeadline)) {
        _push(`<p${ssrRenderAttrs(mergeProps({
          class: ["text-sm lg:text-base", { "text-white": _ctx.slice.variation === "center" }]
        }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_top)))}>${ssrInterpolate(_ctx.slice.primary.eyebrowHeadline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isFilled).richText(_ctx.slice.primary.title)) {
        _push(`<h1 class="${ssrRenderClass([{ "text-center": _ctx.slice.variation === "center" }, "mb-4 text-3xl font-medium uppercase md:text-4xl lg:text-7xl text-primary-400 text-balance"])}">`);
        _push(ssrRenderComponent(_component_PrismicRichText, mergeProps({
          field: _ctx.slice.primary.title,
          delay: 200
        }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_top)), null, _parent));
        _push(`</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isFilled).richText(_ctx.slice.primary.description)) {
        _push(`<div class="${ssrRenderClass([{ "text-center text-white": _ctx.slice.variation === "center" }, "text-base lg:text-2xl"])}">`);
        _push(ssrRenderComponent(_component_PrismicRichText, mergeProps({
          field: _ctx.slice.primary.description,
          delay: 400
        }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_top)), null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex mt-6 text-center md:mt-12">`);
      if (unref(isFilled).link(_ctx.slice.primary.callToActionLink)) {
        _push(ssrRenderComponent(_component_UButton, {
          size: "xl",
          to: _ctx.slice.primary.callToActionLink.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.slice.primary.callToActionLabel || "Scopri")}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.slice.primary.callToActionLabel || "Scopri"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Hero/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Da9nqGT7.mjs.map
