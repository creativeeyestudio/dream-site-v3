'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    // Recherche l'entité par le slug
    const entity = await strapi.db.query('api::page.page').findOne({
      where: { slug },
    });

    if (!entity) {
      return ctx.notFound('Page not found');
    }

    // Re-fetch avec les images et composants, et on renvoie directement les données sans `data`
    const detailedEntity = await strapi.entityService.findOne('api::page.page', entity.id, {
      populate: {
        content_page: {
          on: {
            'page.text-image': {
              populate: ['image'],
            },
            'page.text-double-image': {
              populate: ['image1', 'image2'],
            },
          },
        },
      },
    });

    // Renvoie directement l'objet de données sans le `data` wrapper
    return this.transformResponse(detailedEntity).data;
  },
}));
