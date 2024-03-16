import { _ as _sfc_main$1 } from './Product-BRIp_0Y4.mjs';
import { i as getSliceComponentProps, a as usePrismic, d as useRoute, e as useAsyncData } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@prismicio/client';
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
  async setup(__props) {
    let __temp, __restore;
    const prismic = usePrismic();
    const props = __props;
    const route = useRoute();
    const { id } = ([__temp, __restore] = withAsyncContext(() => prismic.client.getByUID(
      "product",
      route.params.uid
    )), __temp = await __temp, __restore(), __temp);
    console.log("PROPS", props.context, props.index, props.slice, id);
    const { data: similar } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `similar_product_${route.params.uid}`,
      () => prismic.client.getByType("product", {
        filters: [prismic.filter.similar(id, 3)]
      })
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PrismicProduct = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "bg-primary py-12"
      }, _attrs))}><div class="prose text-center mx-auto my-6"><h2>Correlati</h2></div><ul class="container grid md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList((_a = unref(similar)) == null ? void 0 : _a.results, (prod, p) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_PrismicProduct, { prod }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/RelatedProducts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-rnA5_7YS.mjs.map
