'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('optimize-images')
      .service('myService')
      .getWelcomeMessage();
  },
});
