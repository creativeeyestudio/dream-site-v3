import type { Schema, Struct } from '@strapi/strapi';

export interface CommonAccordionList extends Struct.ComponentSchema {
  collectionName: 'components_common_accordion_lists';
  info: {
    displayName: 'Accordion List';
    icon: 'bulletList';
  };
  attributes: {
    accordions: Schema.Attribute.Component<'content.accordion-item', true>;
  };
}

export interface CommonBlockVideo extends Struct.ComponentSchema {
  collectionName: 'components_common_block_videos';
  info: {
    description: '';
    displayName: 'Block Video';
    icon: 'play';
  };
  attributes: {
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonGallery extends Struct.ComponentSchema {
  collectionName: 'components_common_galleries';
  info: {
    description: '';
    displayName: "Galerie d'images";
    icon: 'picture';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface CommonHtmlContent extends Struct.ComponentSchema {
  collectionName: 'components_common_html_contents';
  info: {
    description: '';
    displayName: 'Contenu HTML';
    icon: 'code';
  };
  attributes: {
    code_html: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface CommonLinkImageList extends Struct.ComponentSchema {
  collectionName: 'components_common_link_image_lists';
  info: {
    displayName: 'Liste de liens avec image';
  };
  attributes: {
    link_images: Schema.Attribute.Component<'page.link-image', true>;
  };
}

export interface CommonSeoBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_seo_blocks';
  info: {
    description: '';
    displayName: 'Block SEO';
  };
  attributes: {
    meta_desc: Schema.Attribute.Text & Schema.Attribute.Required;
    meta_title: Schema.Attribute.String & Schema.Attribute.Required;
    og_desc: Schema.Attribute.Text;
    og_title: Schema.Attribute.String;
    social_image: Schema.Attribute.Media<'images'>;
    twitter_desc: Schema.Attribute.Text;
    twitter_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    twitter_title: Schema.Attribute.String;
  };
}

export interface ContentAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_content_accordion_items';
  info: {
    displayName: 'Accordion Item';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentLinks extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    description: '';
    displayName: 'Lien';
  };
  attributes: {
    external_link: Schema.Attribute.String;
    label: Schema.Attribute.String;
    medias: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    pages: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
  };
}

export interface PageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_common_carousels';
  info: {
    description: '';
    displayName: 'Carousel';
    icon: 'picture';
  };
  attributes: {
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PageHeroscreen extends Struct.ComponentSchema {
  collectionName: 'components_common_heroscreens';
  info: {
    description: '';
    displayName: "Bloc d'introduction";
    icon: 'picture';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface PageLinkImage extends Struct.ComponentSchema {
  collectionName: 'components_page_link_images';
  info: {
    description: '';
    displayName: 'Lien avec Image';
  };
  attributes: {
    external_link: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    title: Schema.Attribute.String;
  };
}

export interface PageParallax extends Struct.ComponentSchema {
  collectionName: 'components_common_parallaxes';
  info: {
    description: '';
    displayName: 'Parallax';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    speed: Schema.Attribute.Float & Schema.Attribute.DefaultTo<1.5>;
  };
}

export interface PageText extends Struct.ComponentSchema {
  collectionName: 'components_common_texts';
  info: {
    description: '';
    displayName: 'Texte standard';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageTextDoubleImage extends Struct.ComponentSchema {
  collectionName: 'components_common_text_double_images';
  info: {
    description: '';
    displayName: 'Texte Double Image';
    icon: 'stack';
  };
  attributes: {
    accordions: Schema.Attribute.Component<'content.accordion-item', true>;
    image1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images'>;
    links: Schema.Attribute.Component<'content.links', true>;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageTextImage extends Struct.ComponentSchema {
  collectionName: 'components_common_text_images';
  info: {
    description: '';
    displayName: 'Texte Image';
    icon: 'stack';
  };
  attributes: {
    accordions: Schema.Attribute.Component<'content.accordion-item', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'content.links', true>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface PageTextIntro extends Struct.ComponentSchema {
  collectionName: 'components_common_text_intros';
  info: {
    description: '';
    displayName: "texte d'introduction";
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PostImage extends Struct.ComponentSchema {
  collectionName: 'components_post_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface PostText extends Struct.ComponentSchema {
  collectionName: 'components_post_texts';
  info: {
    displayName: 'Text';
    icon: 'dashboard';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.accordion-list': CommonAccordionList;
      'common.block-video': CommonBlockVideo;
      'common.gallery': CommonGallery;
      'common.html-content': CommonHtmlContent;
      'common.link-image-list': CommonLinkImageList;
      'common.seo-block': CommonSeoBlock;
      'content.accordion-item': ContentAccordionItem;
      'content.links': ContentLinks;
      'page.carousel': PageCarousel;
      'page.heroscreen': PageHeroscreen;
      'page.link-image': PageLinkImage;
      'page.parallax': PageParallax;
      'page.text': PageText;
      'page.text-double-image': PageTextDoubleImage;
      'page.text-image': PageTextImage;
      'page.text-intro': PageTextIntro;
      'post.image': PostImage;
      'post.text': PostText;
    }
  }
}
