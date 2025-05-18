'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const api = 'api::page.page';

module.exports = createCoreController(api, ({ strapi }) => ({
  async find(ctx) {
    const entities = await initQuery(strapi).findMany();

    return !entities  
      ? ctx.notFound('Pages not found')
      : ctx.body = entities;
  },

  async findByHomepage(ctx) {
    const entity = await initEntity(strapi, { homepage: true })

    if (!entity) return ctx.notFound('Page not found');

    const detailedEntity = await strapi.entityService.findOne(api, entity.id, {
      populate: populate(),
    });

    return this.transformResponse(detailedEntity).data;
  },
  
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const entity = await initEntity(strapi, { slug });

    if (!entity) return ctx.notFound('Page not found');

    const detailedEntity = await strapi.entityService.findOne(api, entity.id, {
      populate: populate(),
    });

    // @ts-ignore
    return this.transformResponse(detailedEntity).data;
  },
}));

function initQuery(strapi) {
  return strapi.db.query(api);
}

function initEntity(strapi, where) {
  return initQuery(strapi).findOne({
    where: where,
  })
}

function populate() {
  return {
    seo: {},
    content_page: {
      on: {
        'page.text-image': { populate: ['image'] },
        'page.text-double-image': { populate: ['image1', 'image2'] },
        'page.carousel': { populate: ['images'] },
        'page.parallax': { populate: ['image'] },
      },
    },
  }
}