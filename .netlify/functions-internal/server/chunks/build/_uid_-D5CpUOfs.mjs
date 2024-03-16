import { a as usePrismic, d as useRoute, e as useAsyncData, u as useHead, S as SliceZone } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import '@prismicio/client';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[uid]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const prismic = usePrismic();
    const route = useRoute();
    const { data: page } = useAsyncData(
      `[category-uid-${route.params.uid}]`,
      () => prismic.client.getByUID("category", route.params.uid)
    );
    useHead({
      title: (_a = page.value) == null ? void 0 : _a.data.title
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categorie/[uid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_uid_-D5CpUOfs.mjs.map
