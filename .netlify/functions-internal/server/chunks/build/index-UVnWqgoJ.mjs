import { g as getSliceComponentProps, a as usePrismic } from './server.mjs';
import { defineComponent, ref, withAsyncContext, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import * as prismic from '@prismicio/client';
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
  async setup(__props) {
    let __temp, __restore;
    const { client } = usePrismic();
    const props = __props;
    const products = ref([]);
    products.value = ([__temp, __restore] = withAsyncContext(() => Promise.all(
      props.slice.items.map((slice) => {
        if (prismic.isFilled.contentRelationship(slice.product) && slice.product.uid) {
          return client.getByUID(slice.product.type, slice.product.uid);
        } else {
          return { msg: "test" };
        }
      })
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = resolveComponent("ProductCard");
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation
      }, _attrs))}>${ssrInterpolate(_ctx.slice.primary.heading)} <pre>  ${ssrInterpolate(_ctx.slice.items.length)}
</pre><ul><!--[-->`);
      ssrRenderList(unref(products), (card, c) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_ProductCard, { product: card }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/ProductCarousel/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-UVnWqgoJ.mjs.map
