'use strict';

/**
 * page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

const baseRoutes = createCoreRouter('api::page.page');

module.exports = baseRoutes;

// module.exports = {
//   routes: [
//     {
//       method: 'GET',
//       path: '/pages/slug/:slug',
//       handler: 'page.findBySlug',
//       config: {
//         auth: false,
//       },
//     },
//     {
//       method: 'GET',
//       path: '/pages/home',
//       handler: 'page.findByHomepage',
//       config: {
//         auth: false,
//       },
//     },
//     {
//       method: 'GET',
//       path: '/pages',
//       handler: 'page.find',
//       config: {
//         auth: false,
//       },
//     }
//   ]
// }