import { a as usePrismic, e as useAsyncData, l as PrismicLink } from './server.mjs';
import __nuxt_component_0 from './Icon-B_Ch9MOY.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><ul class="${ssrRenderClass([{ "flex-col": __props.vertical }, "flex flex-wrap gap-4 text-sm"])}"><!--[-->`);
      ssrRenderList((_a = unref(socials)) == null ? void 0 : _a.data.items, (social, s) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: social.link,
          class: "flex items-center gap-2 hover:underline hover:brightness-75 group isolate cursor-pointer"
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SocialLinks-Ck-N_CRt.mjs.map
