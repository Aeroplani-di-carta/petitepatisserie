import { a as usePrismic, d as useRoute, e as useAsyncData, u as useHead, P as PrismicImage, f as PrismicRichText, S as SliceZone } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { isFilled } from '@prismicio/client';
import { c as components } from './index-0eJiJF7v.mjs';
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
  __name: "[uid]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const prismic = usePrismic();
    const route = useRoute();
    const { data: page } = useAsyncData(
      `[product-uid-${route.params.uid}]`,
      () => prismic.client.getByUID("product", route.params.uid)
    );
    useHead({
      title: (_a = page.value) == null ? void 0 : _a.data.title,
      meta: [
        {
          name: "description",
          content: prismic.asText((_b = page.value) == null ? void 0 : _b.data.description)
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a3;
      var _a2, _b2, _c, _d, _e, _f, _g;
      const _component_PrismicImage = PrismicImage;
      const _component_PrismicRichText = PrismicRichText;
      const _component_SliceZone = SliceZone;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class=""><div class="h-[30vh] md:[70vh] overflow-hidden">`);
      if (unref(isFilled).image((_a2 = unref(page)) == null ? void 0 : _a2.data.cover)) {
        _push(ssrRenderComponent(_component_PrismicImage, {
          field: (_b2 = unref(page)) == null ? void 0 : _b2.data.cover,
          class: "w-full h-full object-cover"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="prose mx-auto flex mt-12 gap-8"><div class="w-1/4">`);
      if (unref(isFilled).image((_c = unref(page)) == null ? void 0 : _c.data.image)) {
        _push(ssrRenderComponent(_component_PrismicImage, {
          field: (_d = unref(page)) == null ? void 0 : _d.data.image,
          class: "object-cover m-0"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-3/4"><h1>${ssrInterpolate((_e = unref(page)) == null ? void 0 : _e.data.title)}</h1>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: (_f = unref(page)) == null ? void 0 : _f.data.description
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_SliceZone, {
        wrapper: "main",
        slices: (_a3 = (_g = unref(page)) == null ? void 0 : _g.data.slices) != null ? _a3 : [],
        components: unref(components)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prodotti/[uid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_uid_-aXBAmlSX.mjs.map
