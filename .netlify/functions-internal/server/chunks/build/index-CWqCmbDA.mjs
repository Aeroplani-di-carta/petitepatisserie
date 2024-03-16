import __nuxt_component_0 from './Icon-B_Ch9MOY.mjs';
import { i as getSliceComponentProps, f as PrismicRichText, l as PrismicLink } from './server.mjs';
import { defineComponent, ref, unref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { isFilled } from '@prismicio/client';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-C91WxrSi.mjs';
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
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const hideWarning = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_0;
      const _component_PrismicRichText = PrismicRichText;
      const _component_PrismicLink = PrismicLink;
      if (!unref(hideWarning)) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          "data-slice-type": _ctx.slice.slice_type,
          "data-slice-variation": _ctx.slice.variation,
          style: {
            backgroundColor: _ctx.slice.primary.color,
            backgroundImage: "url(" + ((_a = _ctx.slice.primary.image) == null ? void 0 : _a.url) + ")"
          },
          class: "relative p-4 bg-cover md:p-12"
        }, _attrs))}><button class="absolute w-8 h-8 text-white bg-black border-2 rounded-full right-4 top-4 bg-opacity-20" aria-label="Close warning">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ci:close-md",
          size: "24"
        }, null, _parent));
        _push(`</button><div class="flex flex-col items-center justify-center max-w-4xl px-4 py-4 mx-auto text-center bg-white rounded-lg shadow-2xl md:px-24 md:py-12 bg-opacity-70 backdrop-blur-md md:rounded-3xl">`);
        if (unref(isFilled).keyText(_ctx.slice.primary.title)) {
          _push(`<h2 class="mb-6 text-xl font-bold md:text-2xl brightness-50" style="${ssrRenderStyle({ color: _ctx.slice.primary.color })}">${ssrInterpolate(_ctx.slice.primary.title)}</h2>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isFilled).richText(_ctx.slice.primary.body)) {
          _push(ssrRenderComponent(_component_PrismicRichText, {
            field: _ctx.slice.primary.body,
            class: "mx-auto text-sm md:max-w-2xl md:text-md text-balance"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(isFilled).keyText(_ctx.slice.primary.hash)) {
          _push(`<a${ssrRenderAttr("href", _ctx.slice.primary.hash)} class="mt-6 btn cta">${ssrInterpolate(_ctx.slice.primary.cta_label)}</a>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isFilled).link(_ctx.slice.primary.cta_link)) {
          _push(ssrRenderComponent(_component_PrismicLink, {
            field: _ctx.slice.primary.cta_link,
            class: "mt-6 btn cta"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.slice.primary.cta_label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.slice.primary.cta_label), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Warning/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CWqCmbDA.mjs.map
