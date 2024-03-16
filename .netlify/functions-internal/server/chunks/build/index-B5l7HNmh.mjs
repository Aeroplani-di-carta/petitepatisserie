import { i as getSliceComponentProps, l as PrismicLink } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "sticky top-0 z-50 w-full py-6 bg-primary-100",
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation
      }, _attrs))}><nav class="flex-grow hidden md:block container"><ul class="flex gap-6"><!--[-->`);
      ssrRenderList(_ctx.slice.items, (nav, n) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: nav.route,
          "active-class": "active"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(nav.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(nav.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/StickyMenu/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B5l7HNmh.mjs.map
