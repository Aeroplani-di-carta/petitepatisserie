import { defineAsyncComponent } from 'vue';
import { e as defineSliceZoneComponents } from './server.mjs';

const components = defineSliceZoneComponents({
  alternate_grid: defineAsyncComponent(
    () => import('./index-BBcLTo7-.mjs')
  ),
  app_footer: defineAsyncComponent(() => import('./index-DMK02Mwg.mjs')),
  contact_form: defineAsyncComponent(() => import('./index-Da9etbAY.mjs')),
  gallery: defineAsyncComponent(() => import('./index-t4EqQEq4.mjs')),
  heading: defineAsyncComponent(() => import('./index-C9Mc8FHi.mjs')),
  hero: defineAsyncComponent(() => import('./index-BhuNBOPe.mjs')),
  main_menu: defineAsyncComponent(() => import('./index-D9OmwrGV.mjs')),
  menu_item: defineAsyncComponent(() => import('./index-igW1GLQC.mjs')),
  multi_column: defineAsyncComponent(() => import('./index-CbW5hNfY.mjs')),
  newsletter: defineAsyncComponent(() => import('./index-Ewf2Axyj.mjs')),
  product_carousel: defineAsyncComponent(
    () => import('./index-UVnWqgoJ.mjs')
  ),
  product_gallery: defineAsyncComponent(
    () => import('./index-vtV-Epzy.mjs')
  ),
  quotes: defineAsyncComponent(() => import('./index-d8O_SIOk.mjs')),
  related_products: defineAsyncComponent(
    () => import('./index-BFxb60tB.mjs')
  ),
  skew_hero: defineAsyncComponent(() => import('./index-CbOUnnm3.mjs')),
  sticky_menu: defineAsyncComponent(() => import('./index-DBC-GIB3.mjs')),
  text: defineAsyncComponent(() => import('./index-C41wg2LE.mjs')),
  video: defineAsyncComponent(() => import('./index-VhKCvwMZ.mjs')),
  video_grid: defineAsyncComponent(() => import('./index-B-Vo2ZCb.mjs')),
  warning: defineAsyncComponent(() => import('./index-DSqT94Xt.mjs'))
});

export { components as c };
//# sourceMappingURL=index-IXgXMjUv.mjs.map
