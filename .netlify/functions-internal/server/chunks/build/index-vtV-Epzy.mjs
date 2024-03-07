import { g as getSliceComponentProps, a as usePrismic, b as useAsyncData, h as PrismicRichText } from './server.mjs';
import { _ as __nuxt_component_0 } from './Logo-DW0ZSvjy.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { isFilled } from '@prismicio/client';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const prismic = usePrismic();
    const { data: product } = useAsyncData(
      `[product_${props.id}]`,
      () => prismic.client.getByUID("product", props.id)
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Logo = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}><div class="w-full aspect-3/4 overflow-hidden rounded-xl shadow-xl">`);
      if (unref(isFilled).image((_a = unref(product)) == null ? void 0 : _a.data.image)) {
        _push(`<img${ssrRenderAttr("src", (_b = unref(product)) == null ? void 0 : _b.data.image.url)} class="w-full h-full object-cover">`);
      } else {
        _push(`<div class="bg-primary flex items-center justify-center w-full h-full aspect-3/4">`);
        _push(ssrRenderComponent(_component_Logo, { dark: "" }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><h4 class="text-left text-xl font-bold py-3">${ssrInterpolate((_c = unref(product)) == null ? void 0 : _c.data.title)}</h4></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Prismic/Product.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const breakpoints = {
      320: {
        itemsToShow: 1.2
      },
      700: {
        itemsToShow: 3.2
      },
      1024: {
        itemsToShow: 4.5
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicRichText = PrismicRichText;
      const _component_PrismicProduct = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "py-12 bg-primary-100"
      }, _attrs))}><div class="prose mx-auto text-center text-balance"><h2 class="text-black">${ssrInterpolate(_ctx.slice.primary.title)}</h2>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: _ctx.slice.primary.desxcription
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Carousel), {
        "items-to-show": 3,
        "wrap-around": "",
        "pause-autoplay-on-hover": "",
        autoplay: 3500,
        transition: 500,
        breakpoints
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Pagination), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Navigation)),
              createVNode(unref(Pagination))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.slice.items, (item, i) => {
              _push2(ssrRenderComponent(unref(Slide), {
                key: i,
                class: "px-4 w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-slate-500 w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_PrismicProduct, {
                      id: item.product.uid
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-slate-500 w-full" }, [
                        createVNode(_component_PrismicProduct, {
                          id: item.product.uid
                        }, null, 8, ["id"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.slice.items, (item, i) => {
                return openBlock(), createBlock(unref(Slide), {
                  key: i,
                  class: "px-4 w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-slate-500 w-full" }, [
                      createVNode(_component_PrismicProduct, {
                        id: item.product.uid
                      }, null, 8, ["id"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/ProductGallery/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-vtV-Epzy.mjs.map
