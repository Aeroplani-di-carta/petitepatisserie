// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | ContactFormSlice
  | MainMenuSlice
  | ProductCarouselSlice
  | HeroSlice
  | StickyMenuSlice
  | SkewHeroSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Content for Product documents
 */
interface ProductDocumentData {
  /**
   * title field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * image field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * description field in *Product*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Product document from Prismic
 *
 * - **API ID**: `product`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductDocumentData>,
    "product",
    Lang
  >;

export type AllDocumentTypes = HomeDocument | ProductDocument;

/**
 * Primary content in *AppFooter → Primary*
 */
export interface AppFooterSliceDefaultPrimary {
  /**
   * logo field in *AppFooter → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: app_footer.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * info field in *AppFooter → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: app_footer.primary.info
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  info: prismic.RichTextField;
}

/**
 * Default variation for AppFooter Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AppFooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AppFooterSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AppFooter*
 */
type AppFooterSliceVariation = AppFooterSliceDefault;

/**
 * AppFooter Shared Slice
 *
 * - **API ID**: `app_footer`
 * - **Description**: AppFooter
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AppFooterSlice = prismic.SharedSlice<
  "app_footer",
  AppFooterSliceVariation
>;

/**
 * Primary content in *ContactForm → Primary*
 */
export interface ContactFormSliceDefaultPrimary {
  /**
   * title field in *ContactForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * body field in *ContactForm → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactFormSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactForm*
 */
type ContactFormSliceVariation = ContactFormSliceDefault;

/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSlice = prismic.SharedSlice<
  "contact_form",
  ContactFormSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * body field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * cta field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta: prismic.KeyTextField;

  /**
   * link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: /
   * - **API ID Path**: hero.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * reverse field in *Hero → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: hero.primary.reverse
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  reverse: prismic.BooleanField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *MainMenu → Items*
 */
export interface MainMenuSliceDefaultItem {
  /**
   * route field in *MainMenu → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: /
   * - **API ID Path**: main_menu.items[].route
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  route: prismic.LinkField;

  /**
   * label field in *MainMenu → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_menu.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * icon field in *MainMenu → Items*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: main_menu.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  icon: prismic.LinkToMediaField;
}

/**
 * Default variation for MainMenu Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainMenuSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<MainMenuSliceDefaultItem>
>;

/**
 * Slice variation for *MainMenu*
 */
type MainMenuSliceVariation = MainMenuSliceDefault;

/**
 * MainMenu Shared Slice
 *
 * - **API ID**: `main_menu`
 * - **Description**: MainMenu
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainMenuSlice = prismic.SharedSlice<
  "main_menu",
  MainMenuSliceVariation
>;

/**
 * Default variation for MultiColumn Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MultiColumnSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *MultiColumn*
 */
type MultiColumnSliceVariation = MultiColumnSliceDefault;

/**
 * MultiColumn Shared Slice
 *
 * - **API ID**: `multi_column`
 * - **Description**: MultiColumn
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MultiColumnSlice = prismic.SharedSlice<
  "multi_column",
  MultiColumnSliceVariation
>;

/**
 * Primary content in *ProductCarousel → Primary*
 */
export interface ProductCarouselSliceDefaultPrimary {
  /**
   * Heading field in *ProductCarousel → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Primary content in *ProductCarousel → Items*
 */
export interface ProductCarouselSliceDefaultItem {
  /**
   * Product field in *ProductCarousel → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: product_carousel.items[].product
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  product: prismic.ContentRelationshipField<"product">;
}

/**
 * Default variation for ProductCarousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductCarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductCarouselSliceDefaultPrimary>,
  Simplify<ProductCarouselSliceDefaultItem>
>;

/**
 * Slice variation for *ProductCarousel*
 */
type ProductCarouselSliceVariation = ProductCarouselSliceDefault;

/**
 * ProductCarousel Shared Slice
 *
 * - **API ID**: `product_carousel`
 * - **Description**: ProductCarousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductCarouselSlice = prismic.SharedSlice<
  "product_carousel",
  ProductCarouselSliceVariation
>;

/**
 * Default variation for RelatedProducts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RelatedProductsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *RelatedProducts*
 */
type RelatedProductsSliceVariation = RelatedProductsSliceDefault;

/**
 * RelatedProducts Shared Slice
 *
 * - **API ID**: `related_products`
 * - **Description**: RelatedProducts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RelatedProductsSlice = prismic.SharedSlice<
  "related_products",
  RelatedProductsSliceVariation
>;

/**
 * Primary content in *SkewHero → Primary*
 */
export interface SkewHeroSliceDefaultPrimary {
  /**
   * Title field in *SkewHero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skew_hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Body field in *SkewHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skew_hero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *SkewHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skew_hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Reverse field in *SkewHero → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: skew_hero.primary.reverse
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  reverse: prismic.BooleanField;
}

/**
 * Default variation for SkewHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkewHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SkewHeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *SkewHero → Primary*
 */
export interface SkewHeroSliceLightBackgroundPrimary {
  /**
   * Title field in *SkewHero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skew_hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Body field in *SkewHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skew_hero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *SkewHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skew_hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Reverse field in *SkewHero → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: skew_hero.primary.reverse
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  reverse: prismic.BooleanField;
}

/**
 * LightBackground variation for SkewHero Slice
 *
 * - **API ID**: `lightBackground`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkewHeroSliceLightBackground = prismic.SharedSliceVariation<
  "lightBackground",
  Simplify<SkewHeroSliceLightBackgroundPrimary>,
  never
>;

/**
 * Slice variation for *SkewHero*
 */
type SkewHeroSliceVariation =
  | SkewHeroSliceDefault
  | SkewHeroSliceLightBackground;

/**
 * SkewHero Shared Slice
 *
 * - **API ID**: `skew_hero`
 * - **Description**: SkewHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkewHeroSlice = prismic.SharedSlice<
  "skew_hero",
  SkewHeroSliceVariation
>;

/**
 * Primary content in *StickyMenu → Items*
 */
export interface StickyMenuSliceDefaultItem {
  /**
   * label field in *StickyMenu → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sticky_menu.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * route field in *StickyMenu → Items*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: sticky_menu.items[].route
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  route: prismic.LinkToMediaField;
}

/**
 * Default variation for StickyMenu Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StickyMenuSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<StickyMenuSliceDefaultItem>
>;

/**
 * Slice variation for *StickyMenu*
 */
type StickyMenuSliceVariation = StickyMenuSliceDefault;

/**
 * StickyMenu Shared Slice
 *
 * - **API ID**: `sticky_menu`
 * - **Description**: StickyMenu
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StickyMenuSlice = prismic.SharedSlice<
  "sticky_menu",
  StickyMenuSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      ProductDocument,
      ProductDocumentData,
      AllDocumentTypes,
      AppFooterSlice,
      AppFooterSliceDefaultPrimary,
      AppFooterSliceVariation,
      AppFooterSliceDefault,
      ContactFormSlice,
      ContactFormSliceDefaultPrimary,
      ContactFormSliceVariation,
      ContactFormSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      MainMenuSlice,
      MainMenuSliceDefaultItem,
      MainMenuSliceVariation,
      MainMenuSliceDefault,
      MultiColumnSlice,
      MultiColumnSliceVariation,
      MultiColumnSliceDefault,
      ProductCarouselSlice,
      ProductCarouselSliceDefaultPrimary,
      ProductCarouselSliceDefaultItem,
      ProductCarouselSliceVariation,
      ProductCarouselSliceDefault,
      RelatedProductsSlice,
      RelatedProductsSliceVariation,
      RelatedProductsSliceDefault,
      SkewHeroSlice,
      SkewHeroSliceDefaultPrimary,
      SkewHeroSliceLightBackgroundPrimary,
      SkewHeroSliceVariation,
      SkewHeroSliceDefault,
      SkewHeroSliceLightBackground,
      StickyMenuSlice,
      StickyMenuSliceDefaultItem,
      StickyMenuSliceVariation,
      StickyMenuSliceDefault,
    };
  }
}
