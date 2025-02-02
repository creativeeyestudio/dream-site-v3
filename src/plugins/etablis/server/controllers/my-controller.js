'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('etablis')
      .service('myService')
      .getWelcomeMessage();
  },
});
