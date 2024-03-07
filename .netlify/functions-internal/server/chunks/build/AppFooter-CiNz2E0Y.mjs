import { _ as __nuxt_component_0 } from './Logo-DW0ZSvjy.mjs';
import { a as usePrismic, b as useAsyncData, S as SliceZone, P as PrismicLink } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as components } from './index-IXgXMjUv.mjs';
import __nuxt_component_0$1 from './Icon-BL837Ujo.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SocialLinks",
  __ssrInlineRender: true,
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    horizontal: { type: Boolean, default: false }
  },
  emits: ["close"],
  setup(__props) {
    const prismic = usePrismic();
    const { data: socials } = useAsyncData(
      "social",
      () => (
        // prismic.client.getSingle("social_links")
        prismic.client.getSingle("social_links")
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PrismicLink = PrismicLink;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><ul class="${ssrRenderClass([{ "flex-col": __props.vertical }, "flex flex-wrap gap-4 text-sm"])}"><!--[-->`);
      ssrRenderList((_a = unref(socials)) == null ? void 0 : _a.data.items, (social, s) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: social.link,
          class: "flex items-center gap-2 hover:underline hover:brightness-75 group isolate"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: social.icon,
                size: "16"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(social.label)}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: social.icon,
                  size: "16"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(social.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLinks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const isOver = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = __nuxt_component_0;
      const _component_MainMenu = _sfc_main$3;
      const _component_SocialLinks = _sfc_main$2;
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref: "mainMenu",
        class: ["w-full h-20 text-white flex items-center justify-center fixed z-50 transition-colors", { "bg-black bg-opacity-70 backdrop-blur-md": unref(isOver) }]
      }, _attrs))}><div class="container gap-4 flex items-center justify-between"><div class="flex-none">`);
      _push(ssrRenderComponent(_component_Logo, null, null, _parent));
      _push(`</div><div class="flex-grow">`);
      _push(ssrRenderComponent(_component_MainMenu, null, null, _parent));
      _push(`</div><div class="flex-grow-0">`);
      _push(ssrRenderComponent(_component_SocialLinks, { class: "flex-grow-0" }, null, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Logo = __nuxt_component_0;
  const _component_SocialLinks = _sfc_main$2;
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

export { _sfc_main$1 as _, __nuxt_component_1 as a };
//# sourceMappingURL=AppFooter-CiNz2E0Y.mjs.map
