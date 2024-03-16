import { _ as _sfc_main$1 } from './Product-BRIp_0Y4.mjs';
import { a as usePrismic, e as useAsyncData } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductsByCategory",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const prismic = usePrismic();
    const { data: products } = useAsyncData(
      `[products_${props.id}]`,
      () => prismic.client.getAllByType("product", {
        filters: [prismic.filter.at("my.product.category", props.id)],
        orderings: [{ field: "my.product.uid", direction: "asc" }]
      })
    );
    console.log("DATA PRODS", props.id, products.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicProduct = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><ul class="grid grid-cols-2 md:grid-cols-4 gap-8 flex-wrap"><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_PrismicProduct, {
          prod: product,
          small: ""
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductsByCategory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProductsByCategory-DjREUzH6.mjs.map
