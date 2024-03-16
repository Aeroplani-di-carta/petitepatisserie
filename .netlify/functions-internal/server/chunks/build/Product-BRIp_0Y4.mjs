import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { a as usePrismic, e as useAsyncData, _ as __nuxt_component_0$1, f as PrismicRichText } from './server.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { isFilled } from '@prismicio/client';

const _imports_0 = "" + publicAssetsURL("img/logo.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    id: {},
    prod: {},
    excerpt: { type: Boolean },
    small: { type: Boolean }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const prismic = usePrismic();
    const product = ref();
    if (props.id) {
      const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
        `[product_${props.id}]`,
        () => prismic.client.getByUID("product", props.id)
      )), __temp = await __temp, __restore(), __temp);
      product.value = data.value;
    } else {
      product.value = props.prod;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_PrismicRichText = PrismicRichText;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/prodotti/${(_a = unref(product)) == null ? void 0 : _a.uid}`,
        class: ["w-full text-left", [_ctx.small ? "h-56" : "h-96"]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([[_ctx.small ? "h-48" : "h-72"], "overflow-hidden rounded-xl shadow-xl"])}"${_scopeId}>`);
            if (unref(isFilled).image((_a2 = unref(product)) == null ? void 0 : _a2.data.image)) {
              _push2(`<img${ssrRenderAttr("src", (_b = unref(product)) == null ? void 0 : _b.data.image.url)} class="w-full h-full object-cover object-center"${_scopeId}>`);
            } else {
              _push2(`<div class="bg-primary flex items-center justify-center w-full h-full"${_scopeId}><img${ssrRenderAttr("src", _imports_0)}${_scopeId}></div>`);
            }
            _push2(`</div><h4 class="text-left text-xl font-bold py-3"${_scopeId}>${ssrInterpolate((_c = unref(product)) == null ? void 0 : _c.data.title)}</h4>`);
            if (_ctx.excerpt) {
              _push2(`<div class=""${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PrismicRichText, {
                field: (_d = unref(product)) == null ? void 0 : _d.data.description,
                class: { "text-excerpt": _ctx.excerpt }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ["overflow-hidden rounded-xl shadow-xl", [_ctx.small ? "h-48" : "h-72"]]
              }, [
                unref(isFilled).image((_e = unref(product)) == null ? void 0 : _e.data.image) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: (_f = unref(product)) == null ? void 0 : _f.data.image.url,
                  class: "w-full h-full object-cover object-center"
                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "bg-primary flex items-center justify-center w-full h-full"
                }, [
                  createVNode("img", { src: _imports_0 })
                ]))
              ], 2),
              createVNode("h4", { class: "text-left text-xl font-bold py-3" }, toDisplayString((_g = unref(product)) == null ? void 0 : _g.data.title), 1),
              _ctx.excerpt ? (openBlock(), createBlock("div", {
                key: 0,
                class: ""
              }, [
                createVNode(_component_PrismicRichText, {
                  field: (_h = unref(product)) == null ? void 0 : _h.data.description,
                  class: { "text-excerpt": _ctx.excerpt }
                }, null, 8, ["field", "class"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Prismic/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Product-BRIp_0Y4.mjs.map
