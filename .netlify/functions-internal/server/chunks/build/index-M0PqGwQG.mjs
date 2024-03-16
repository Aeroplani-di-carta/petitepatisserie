import { i as getSliceComponentProps, f as PrismicRichText, l as PrismicLink } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const props = __props;
    const breakpoints = {
      320: {
        itemsToShow: 1.2
      },
      700: {
        itemsToShow: 3.2
      },
      1024: {
        itemsToShow: props.slice.primary.per_page
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicRichText = PrismicRichText;
      const _component_PrismicLink = PrismicLink;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "h-full py-24"
      }, _attrs))}><div class="py-6 text-center"><h2 class="py-4 text-3xl">${ssrInterpolate(_ctx.slice.primary.title)}</h2>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: _ctx.slice.primary.description,
        class: "highlight"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Carousel), {
        "items-to-show": _ctx.slice.primary.per_page || 3,
        "wrap-around": "",
        "pause-autoplay-on-hover": "",
        autoplay: 2500,
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
                class: "w-screen px-4 h-64"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative w-full h-full bg-center rounded-md bg-no-repeat" style="${ssrRenderStyle({
                      backgroundImage: "url(" + item.image.url + ")",
                      backgroundSize: _ctx.slice.primary.image_contain ? "contain" : "cover"
                    })}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_PrismicLink, {
                      field: item.link,
                      class: "absolute max-w-sm px-8 py-3 text-left bottom-10 left-10 balance"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="highlight"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "highlight" }, toDisplayString(item.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "relative w-full h-full bg-center rounded-md bg-no-repeat",
                        style: {
                          backgroundImage: "url(" + item.image.url + ")",
                          backgroundSize: _ctx.slice.primary.image_contain ? "contain" : "cover"
                        }
                      }, [
                        createVNode(_component_PrismicLink, {
                          field: item.link,
                          class: "absolute max-w-sm px-8 py-3 text-left bottom-10 left-10 balance"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "highlight" }, toDisplayString(item.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["field"])
                      ], 4)
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
                  class: "w-screen px-4 h-64"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "relative w-full h-full bg-center rounded-md bg-no-repeat",
                      style: {
                        backgroundImage: "url(" + item.image.url + ")",
                        backgroundSize: _ctx.slice.primary.image_contain ? "contain" : "cover"
                      }
                    }, [
                      createVNode(_component_PrismicLink, {
                        field: item.link,
                        class: "absolute max-w-sm px-8 py-3 text-left bottom-10 left-10 balance"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "highlight" }, toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["field"])
                    ], 4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Gallery/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-M0PqGwQG.mjs.map
