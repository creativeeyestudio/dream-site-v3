'use strict';

/**
 * google-api-key service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::google-api-key.google-api-key');
