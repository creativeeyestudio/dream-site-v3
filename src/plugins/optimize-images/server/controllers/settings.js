'use strict';

module.exports = {
  async getSettings(ctx) {
    // Récupère la configuration depuis les settings de Strapi
    const config = await strapi.plugin('optimize-images').config.get();
    ctx.send({ data: { microserviceUrl: config.microserviceUrl } });
  },

  async saveSettings(ctx) {
    const { microserviceUrl } = ctx.request.body;

    // Enregistre l'URL dans la configuration de Strapi
    await strapi.plugin('optimize-images').config.set({ microserviceUrl });

    ctx.send({ data: { microserviceUrl } });
  },
};
