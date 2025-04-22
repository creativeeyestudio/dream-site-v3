'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async find(ctx) {
    const entities = await strapi.db.query('api::page.page').findMany();

    if (!entities) {
      return ctx.notFound('Pages not found');
    }

    return ctx.body = entities;
  },
  
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    // Recherche l'entité par le slug
    const entity = await strapi.db.query('api::page.page').findOne({
      where: { slug },
    });

    if (!entity) {
      return ctx.notFound('Page not found');
    }

    const detailedEntity = await strapi.entityService.findOne('api::page.page', entity.id, {
      populate: {
        seo: {},
        content_page: {
          on: {
            'page.text-image': { populate: ['image'] },
            'page.text-double-image': { populate: ['image1', 'image2'] },
            'page.carousel': { populate: ['images'] },
            'page.parallax': { populate: ['image'] },
          },
        },
      },
    });

    // Renvoie directement l'objet de données sans le `data` wrapper
    // @ts-ignore
    return this.transformResponse(detailedEntity).data;
  },
}));
