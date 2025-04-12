import type { Attribute, Schema } from '@strapi/strapi';

export interface CommonAccordionList extends Schema.Component {
  collectionName: 'components_common_accordion_lists';
  info: {
    displayName: 'Accordion List';
    icon: 'bulletList';
  };
  attributes: {
    accordions: Attribute.Component<'content.accordion-item', true>;
  };
}

export interface CommonBlockVideo extends Schema.Component {
  collectionName: 'components_common_block_videos';
  info: {
    description: '';
    displayName: 'Block Video';
    icon: 'play';
  };
  attributes: {
    video_url: Attribute.String & Attribute.Required;
  };
}

export interface CommonGallery extends Schema.Component {
  collectionName: 'components_common_galleries';
  info: {
    description: '';
    displayName: 'gallery';
    icon: 'picture';
  };
  attributes: {
    images: Attribute.Media<'images', true>;
  };
}

export interface CommonHtmlContent extends Schema.Component {
  collectionName: 'components_common_html_contents';
  info: {
    description: '';
    displayName: 'HTML Content';
    icon: 'code';
  };
  attributes: {
    code_html: Attribute.Blocks & Attribute.Required;
  };
}

export interface CommonLinkImageList extends Schema.Component {
  collectionName: 'components_common_link_image_lists';
  info: {
    displayName: 'Link Image List';
  };
  attributes: {
    link_images: Attribute.Component<'page.link-image', true>;
  };
}

export interface ContentAccordionItem extends Schema.Component {
  collectionName: 'components_content_accordion_items';
  info: {
    displayName: 'Accordion Item';
    icon: 'bulletList';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
  };
}

export interface ContentLinks extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    description: '';
    displayName: 'Links';
  };
  attributes: {
    external_link: Attribute.String;
    label: Attribute.String;
    medias: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    pages: Attribute.Relation<'content.links', 'oneToMany', 'api::page.page'>;
    posts: Attribute.Relation<'content.links', 'oneToMany', 'api::post.post'>;
  };
}

export interface PageCarousel extends Schema.Component {
  collectionName: 'components_common_carousels';
  info: {
    description: '';
    displayName: 'carousel';
    icon: 'picture';
  };
  attributes: {
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface PageHeroscreen extends Schema.Component {
  collectionName: 'components_common_heroscreens';
  info: {
    description: '';
    displayName: 'heroscreen';
    icon: 'picture';
  };
  attributes: {
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface PageLinkImage extends Schema.Component {
  collectionName: 'components_page_link_images';
  info: {
    description: '';
    displayName: 'Link Image';
  };
  attributes: {
    external_link: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
    page: Attribute.Relation<'page.link-image', 'oneToOne', 'api::page.page'>;
    title: Attribute.String;
  };
}

export interface PageParallax extends Schema.Component {
  collectionName: 'components_common_parallaxes';
  info: {
    description: '';
    displayName: 'parallax';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    speed: Attribute.Float & Attribute.DefaultTo<1.5>;
  };
}

export interface PageText extends Schema.Component {
  collectionName: 'components_common_texts';
  info: {
    description: '';
    displayName: 'Text';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageTextDoubleImage extends Schema.Component {
  collectionName: 'components_common_text_double_images';
  info: {
    description: '';
    displayName: 'text-double-image';
    icon: 'stack';
  };
  attributes: {
    accordions: Attribute.Component<'content.accordion-item', true>;
    image1: Attribute.Media<'images'> & Attribute.Required;
    image2: Attribute.Media<'images'>;
    links: Attribute.Component<'content.links', true>;
    text: Attribute.Blocks & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PageTextImage extends Schema.Component {
  collectionName: 'components_common_text_images';
  info: {
    description: '';
    displayName: 'text-image';
    icon: 'stack';
  };
  attributes: {
    accordions: Attribute.Component<'content.accordion-item', true>;
    image: Attribute.Media<'images'> & Attribute.Required;
    links: Attribute.Component<'content.links', true>;
    text: Attribute.Blocks;
    title: Attribute.String;
  };
}

export interface PageTextIntro extends Schema.Component {
  collectionName: 'components_common_text_intros';
  info: {
    description: '';
    displayName: 'Text-Intro';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PostImage extends Schema.Component {
  collectionName: 'components_post_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface PostText extends Schema.Component {
  collectionName: 'components_post_texts';
  info: {
    displayName: 'Text';
    icon: 'dashboard';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.accordion-list': CommonAccordionList;
      'common.block-video': CommonBlockVideo;
      'common.gallery': CommonGallery;
      'common.html-content': CommonHtmlContent;
      'common.link-image-list': CommonLinkImageList;
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
