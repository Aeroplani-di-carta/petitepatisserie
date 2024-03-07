import { a as usePrismic, b as useAsyncData, u as useHead, S as SliceZone } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as components } from './index-IXgXMjUv.mjs';
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
  setup(__props) {
    var _a, _b;
    const prismic = usePrismic();
    const { data: page } = useAsyncData(
      "[home]",
      () => prismic.client.getSingle("home")
    );
    useHead({
      title: (_a = page.value) == null ? void 0 : _a.data.meta_title,
      meta: [
        {
          name: "description",
          content: (_b = page.value) == null ? void 0 : _b.data.meta_description
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a3;
      var _a2;
      const _component_SliceZone = SliceZone;
      _push(ssrRenderComponent(_component_SliceZone, mergeProps({
        wrapper: "main",
        slices: (_a3 = (_a2 = unref(page)) == null ? void 0 : _a2.data.slices) != null ? _a3 : [],
        components: unref(components)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B6KpWPxd.mjs.map
