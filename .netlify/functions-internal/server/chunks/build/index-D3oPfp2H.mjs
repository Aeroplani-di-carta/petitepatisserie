import { _ as _sfc_main$1 } from './ProductsByCategory-DjREUzH6.mjs';
import { i as getSliceComponentProps, a as usePrismic, d as useRoute, e as useAsyncData } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './Product-BRIp_0Y4.mjs';
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
  setup(__props) {
    const { client } = usePrismic();
    const props = __props;
    const route = useRoute();
    const uid = route.params.uid || props.slice.primary.category;
    const { data: product } = useAsyncData(
      "product_id",
      () => client.getByUID("category", uid)
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ProductsByCategory = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "py-24 container"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ProductsByCategory, {
        id: (_a = unref(product)) == null ? void 0 : _a.id
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/ProductByCategory/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D3oPfp2H.mjs.map
