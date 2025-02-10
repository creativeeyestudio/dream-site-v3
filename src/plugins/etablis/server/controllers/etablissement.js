'use strict';

module.exports = {
    async find(ctx) {
        ctx.body = await strapi
            .plugin('etablis')
            .service('etablissement')
            .find();
    },

    async update(ctx) {
        ctx.body = await strapi
            .plugin('etablis')
            .service('etablissement')
            .update();
    },
};
  