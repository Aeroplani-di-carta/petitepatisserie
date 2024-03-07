import { g as getSliceComponentProps, f as PrismicImage, h as PrismicRichText } from './server.mjs';
import { defineComponent, ref, resolveDirective, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { isFilled } from '@prismicio/client';
import { Carousel, Slide } from 'vue3-carousel';
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
  setup(__props) {
    const currentSlide = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicImage = PrismicImage;
      const _component_PrismicRichText = PrismicRichText;
      const _directive_motion_slide_visible_bottom = resolveDirective("motion-slide-visible-bottom");
      const _directive_motion_slide_visible_top = resolveDirective("motion-slide-visible-top");
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "container py-12 my-12 border-y-2 border-primary-300"
      }, _attrs))}>`);
      if (_ctx.slice.variation === "gallery") {
        _push(`<div class="grid items-center gap-12 lg:grid-cols-2"><div>`);
        _push(ssrRenderComponent(unref(Carousel), {
          modelValue: unref(currentSlide),
          "onUpdate:modelValue": ($event) => isRef(currentSlide) ? currentSlide.value = $event : null,
          "items-to-show": 1,
          "wrap-around": "",
          "pause-autoplay-on-hover": "",
          autoplay: 2500,
          transition: 500
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.slice.items, (item, i) => {
                _push2(ssrRenderComponent(unref(Slide), { key: i }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_PrismicImage, {
                        field: item.image,
                        class: "object-cover h-full overflow-hidden rounded-lg aspect-square"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_PrismicImage, {
                          field: item.image,
                          class: "object-cover h-full overflow-hidden rounded-lg aspect-square"
                        }, null, 8, ["field"])
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
                  return openBlock(), createBlock(unref(Slide), { key: i }, {
                    default: withCtx(() => [
                      createVNode(_component_PrismicImage, {
                        field: item.image,
                        class: "object-cover h-full overflow-hidden rounded-lg aspect-square"
                      }, null, 8, ["field"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center"><ul class="flex gap-2 mx-auto mt-4"><!--[-->`);
        ssrRenderList(_ctx.slice.items, (page, p) => {
          _push(`<li><button class="${ssrRenderClass([{ active: unref(currentSlide) === p }, "w-3 h-3 transition-all duration-700 rounded-full bg-primary-100"])}" aria-label="Call to action"></button></li>`);
        });
        _push(`<!--]--></ul></div></div><div class="px-8"><div class="prose text-balance max-w-none">`);
        if (unref(isFilled).keyText(_ctx.slice.primary.eyebrowHeadline)) {
          _push(`<div class="text-brown">${ssrInterpolate(_ctx.slice.primary.eyebrowHeadline)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isFilled).richText(_ctx.slice.primary.title)) {
          _push(ssrRenderComponent(_component_PrismicRichText, {
            field: _ctx.slice.primary.title,
            class: "font-bold text-olive"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(isFilled).richText(_ctx.slice.primary.description)) {
          _push(ssrRenderComponent(_component_PrismicRichText, {
            field: _ctx.slice.primary.description,
            class: "max-w-md text-lg"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<div class="max-w-4xl mx-auto"><!--[-->`);
        ssrRenderList(_ctx.slice.items, (item, i) => {
          _push(`<div class="grid items-center justify-center grid-cols-3 gap-12 my-8"><div class="" class="${ssrRenderClass([[i % 2 === 0 ? "order-first" : "-order-first"], ""])}">`);
          if (unref(isFilled).image(item.image)) {
            _push(ssrRenderComponent(_component_PrismicImage, mergeProps({
              field: item.image,
              delay: i * 100
            }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom)), null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="${ssrRenderClass([[i % 2 === 0 ? "-order-first" : "order-first text-right"], "col-span-2 text-balance"])}">`);
          if (unref(isFilled).richText(item.title)) {
            _push(ssrRenderComponent(_component_PrismicRichText, mergeProps({
              delay: i * 100,
              field: item.title,
              class: "mb-6 text-lg font-medium md:text-5xl"
            }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_top)), null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(isFilled).richText(item.description)) {
            _push(ssrRenderComponent(_component_PrismicRichText, mergeProps({
              delay: i * 100 + 100,
              field: item.description,
              class: "text-sm md:text-base text-neutral-500"
            }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_top)), null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/AlternateGrid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BBcLTo7-.mjs.map
