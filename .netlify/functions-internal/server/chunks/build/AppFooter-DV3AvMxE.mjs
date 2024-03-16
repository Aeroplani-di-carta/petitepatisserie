import { _ as __nuxt_component_0$1 } from './Logo-DW0ZSvjy.mjs';
import { a as usePrismic, e as useAsyncData, S as SliceZone } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { c as components } from './index-0eJiJF7v.mjs';
import { _ as _sfc_main$3 } from './SocialLinks-Ck-N_CRt.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MainMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const prismic = usePrismic();
    const { data: navigation } = useAsyncData(
      "navigation",
      () => prismic.client.getSingle("navigation")
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_SliceZone = SliceZone;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex-col hidden w-full gap-8 md:flex lg:flex-row" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SliceZone, {
        wrapper: "li",
        slices: (_a2 = (_a = unref(navigation)) == null ? void 0 : _a.data.slices) != null ? _a2 : [],
        components: unref(components)
      }, null, _parent));
      _push(`</ul>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Logo = __nuxt_component_0$1;
  const _component_MainMenu = _sfc_main$2;
  const _component_SocialLinks = _sfc_main$3;
  _push(`<header${ssrRenderAttrs(mergeProps({
    ref: "mainMenu",
    class: "w-full h-20 text-white flex items-center justify-center fixed z-50 transition-colors bg-black bg-opacity-70 backdrop-blur-md"
  }, _attrs))}><div class="container gap-4 flex items-center justify-between"><div class="flex-none">`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(`</div><div class="flex-grow">`);
  _push(ssrRenderComponent(_component_MainMenu, null, null, _parent));
  _push(`</div><div class="flex-grow-0">`);
  _push(ssrRenderComponent(_component_SocialLinks, { class: "flex-grow-0" }, null, _parent));
  _push(`</div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Logo = __nuxt_component_0$1;
  const _component_SocialLinks = _sfc_main$3;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-12 bg-neutral-100" }, _attrs))}><div class="container flex gap-8"><div class="">`);
  _push(ssrRenderComponent(_component_Logo, { dark: "" }, null, _parent));
  _push(`<div class="text-sm mt-6 text-slate-500"><p>Vico 1&#39; Eroi di Cefalonia</p><p>70037 Ruvo di Puglia</p><p>Puglia, Italia</p></div></div><div class="self-end text-slate-500">`);
  _push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=AppFooter-DV3AvMxE.mjs.map
