import { g as getSliceComponentProps, P as PrismicLink } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
      const _component_PrismicLink = PrismicLink;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "relative mx-2 mt-4 lg:inline-block group lg:mt-0 z-50"
      }, _attrs))}>`);
      if (_ctx.slice.variation === "withSubMenu") {
        _push(`<div class="z-50"><div class="cursor-default lg:py-6 hover:text-primary">${ssrInterpolate(_ctx.slice.primary.label)}</div><ul class="lg:absolute z-50 lg:hidden rounded-xl flex-col gap-2 lg:bg-slate-700 lg:shadow-lg lg:group-hover:flex whitespace-nowrap min-w-[16rem] overflow-hidden"><!--[-->`);
        ssrRenderList(_ctx.slice.items, (item, i) => {
          _push(`<li class="w-full px-4 py-2 first:pt-4 last:pb-4 hover:text-slate-500 hover:bg-white cursor-pointer">`);
          _push(ssrRenderComponent(_component_PrismicLink, {
            field: item.child_link,
            class: "inline-block w-full py-1",
            "active-class": "underline text-primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.child_label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.child_label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: _ctx.slice.primary.link,
          class: "py-5 hover:text-primary",
          "active-class": "font-medium text-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.slice.primary.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.slice.primary.label), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/MenuItem/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-igW1GLQC.mjs.map
