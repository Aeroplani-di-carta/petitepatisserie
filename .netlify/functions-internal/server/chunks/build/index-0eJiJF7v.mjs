import { defineAsyncComponent } from 'vue';
import { h as defineSliceZoneComponents } from './server.mjs';

const components = defineSliceZoneComponents({
  alternate_grid: defineAsyncComponent(
    () => import('./index--eWUqIFo.mjs')
  ),
  app_footer: defineAsyncComponent(() => import('./index-BtJqSY-q.mjs')),
  category_grid: defineAsyncComponent(() => import('./index-1z-pVTDn.mjs')),
  contact_form: defineAsyncComponent(() => import('./index-CCPslZpb.mjs')),
  gallery: defineAsyncComponent(() => import('./index-M0PqGwQG.mjs')),
  heading: defineAsyncComponent(() => import('./index-m-nxwpHK.mjs')),
  hero: defineAsyncComponent(() => import('./index-Da9nqGT7.mjs')),
  main_menu: defineAsyncComponent(() => import('./index-bAFC2k8V.mjs')),
  menu_item: defineAsyncComponent(() => import('./index-BL07rpmI.mjs')),
  multi_column: defineAsyncComponent(() => import('./index-Bk8splNw.mjs')),
  newsletter: defineAsyncComponent(() => import('./index-BIbK7CRW.mjs')),
  product_by_category: defineAsyncComponent(
    () => import('./index-D3oPfp2H.mjs')
  ),
  product_carousel: defineAsyncComponent(
    () => import('./index-DA3v8zmL.mjs')
  ),
  product_gallery: defineAsyncComponent(
    () => import('./index-wM_xHj2R.mjs')
  ),
  quotes: defineAsyncComponent(() => import('./index-DYeEzujy.mjs')),
  related_products: defineAsyncComponent(
    () => import('./index-rnA5_7YS.mjs')
  ),
  skew_hero: defineAsyncComponent(() => import('./index-Cc_7eXrH.mjs')),
  sticky_menu: defineAsyncComponent(() => import('./index-B5l7HNmh.mjs')),
  text: defineAsyncComponent(() => import('./index-BJxKcLXy.mjs')),
  video: defineAsyncComponent(() => import('./index-CjGHk-ty.mjs')),
  video_grid: defineAsyncComponent(() => import('./index-Cx3Iw2Ca.mjs')),
  warning: defineAsyncComponent(() => import('./index-CWqCmbDA.mjs'))
});

export { components as c };
//# sourceMappingURL=index-0eJiJF7v.mjs.map
