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
    displayName: 'block-video';
    icon: 'play';
  };
  attributes: {
    video_url: Attribute.String & Attribute.Required;
  };
}

export interface CommonCarousel extends Schema.Component {
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

export interface CommonHeroscreen extends Schema.Component {
  collectionName: 'components_common_heroscreens';
  info: {
    description: '';
    displayName: 'heroscreen';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface CommonHtmlContent extends Schema.Component {
  collectionName: 'components_common_html_contents';
  info: {
    displayName: 'html-content';
    icon: 'code';
  };
  attributes: {
    code_html: Attribute.Blocks & Attribute.Required;
  };
}

export interface CommonMap extends Schema.Component {
  collectionName: 'components_content_maps';
  info: {
    description: '';
    displayName: 'Map';
    icon: 'pinMap';
  };
  attributes: {
    Leaflet: Attribute.JSON &
      Attribute.CustomField<'plugin::strapi-leaflet-geoman.geojson'>;
  };
}

export interface CommonParallax extends Schema.Component {
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

export interface CommonText extends Schema.Component {
  collectionName: 'components_common_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface CommonTextDoubleImage extends Schema.Component {
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

export interface CommonTextImage extends Schema.Component {
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

export interface CommonTextIntro extends Schema.Component {
  collectionName: 'components_common_text_intros';
  info: {
    displayName: 'Text-Intro';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentAccordionItem extends Schema.Component {
  collectionName: 'components_content_accordion_items';
  info: {
    displayName: 'Accordion Item';
    icon: 'bulletList';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.accordion-list': CommonAccordionList;
      'common.block-video': CommonBlockVideo;
      'common.carousel': CommonCarousel;
      'common.gallery': CommonGallery;
      'common.heroscreen': CommonHeroscreen;
      'common.html-content': CommonHtmlContent;
      'common.map': CommonMap;
      'common.parallax': CommonParallax;
      'common.text': CommonText;
      'common.text-double-image': CommonTextDoubleImage;
      'common.text-image': CommonTextImage;
      'common.text-intro': CommonTextIntro;
      'content.accordion-item': ContentAccordionItem;
      'content.links': ContentLinks;
    }
  }
}
