import { i as getSliceComponentProps, a as usePrismic, e as useAsyncData, f as PrismicRichText } from './server.mjs';
import { _ as _sfc_main$1 } from './ProductsByCategory-DjREUzH6.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import './Product-BRIp_0Y4.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const prismic = usePrismic();
    const { data: categories } = useAsyncData(
      "categories",
      () => prismic.client.getAllByType("category", {
        orderings: [{ field: "my.category.uid", direction: "asc" }]
      })
    );
    console.log("Cats", categories.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicRichText = PrismicRichText;
      const _component_ProductsByCategory = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "py-12 bg-gradient-to-tr from-primary-200 to-purple-100"
      }, _attrs))}><div class="prose mx-auto text-center"><h1>${ssrInterpolate(_ctx.slice.primary.title)}</h1>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: _ctx.slice.primary.description
      }, null, _parent));
      _push(`</div><div class="container"><ul><!--[-->`);
      ssrRenderList(unref(categories), (category, c) => {
        _push(`<li class="flex flex-col md:flex-row justify-between items-start gap-8 mb-4 md:mb-8"><div class="flex-none flex-grow-0 md:w-48 p-3 md:p-0 bg-primary-700 md:bg-transparent w-full rounded-xl shadow-xl md:shadow-none"><h2 class="font-medium text-2xl">${ssrInterpolate(category.data.title)}</h2></div><div class="flex-grow prod_cat">`);
        _push(ssrRenderComponent(_component_ProductsByCategory, {
          id: category.id
        }, null, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/CategoryGrid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-1z-pVTDn.mjs.map
