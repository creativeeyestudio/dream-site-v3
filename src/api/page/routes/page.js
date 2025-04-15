'use strict';

/**
 * page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::page.page');


module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/pages/slug/:slug',
        handler: 'page.findBySlug',
        config: {
            auth: false, // ou true selon si tu veux que ce soit public
        },
      },
      {
        method: 'GET',
        path: '/pages',
        handler: 'page.find',
      }
    ]
  }