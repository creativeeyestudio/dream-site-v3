import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('optimize-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
