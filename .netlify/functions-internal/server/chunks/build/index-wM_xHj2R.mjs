import { i as getSliceComponentProps, f as PrismicRichText } from './server.mjs';
import { _ as _sfc_main$1 } from './Product-BRIp_0Y4.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import '@prismicio/client';
import 'tailwind-merge';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

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
        class: ["py-12", [_ctx.slice.variation === "dark" ? "bg-primary-950" : "bg-primary-100"]]
      }, _attrs))}><div class="prose mx-auto text-balance text-center"><h2 class="${ssrRenderClass([
        _ctx.slice.variation == "dark" ? "text-slate-100" : "text-slate-500"
      ])}">${ssrInterpolate(_ctx.slice.primary.title)}</h2>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: _ctx.slice.primary.desxcription,
        class: [
          _ctx.slice.variation == "dark" ? "text-slate-100" : "text-slate-500"
        ]
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
                    _push3(`<div class="${ssrRenderClass([[
                      _ctx.slice.variation == "dark" ? "text-slate-100" : "text-slate-500"
                    ], "w-full"])}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_PrismicProduct, {
                      id: item.product.uid,
                      excerpt: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["w-full", [
                          _ctx.slice.variation == "dark" ? "text-slate-100" : "text-slate-500"
                        ]]
                      }, [
                        createVNode(_component_PrismicProduct, {
                          id: item.product.uid,
                          excerpt: ""
                        }, null, 8, ["id"])
                      ], 2)
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
                    createVNode("div", {
                      class: ["w-full", [
                        _ctx.slice.variation == "dark" ? "text-slate-100" : "text-slate-500"
                      ]]
                    }, [
                      createVNode(_component_PrismicProduct, {
                        id: item.product.uid,
                        excerpt: ""
                      }, null, 8, ["id"])
                    ], 2)
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
//# sourceMappingURL=index-wM_xHj2R.mjs.map
