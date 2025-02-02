'use strict';

const optimizeImages = require('../services/optimize');

module.exports = {
  // Contrôleur pour l'upload et l'optimisation
  async upload(ctx) {
    const { files } = ctx.request;

    if (!files || !files.file) {
      return ctx.throw(400, 'Aucun fichier à uploader');
    }

    const file = files.file;

    // Optimise l'image en appelant le service
    const optimizedImage = await optimizeImages.optimizeImage(file);

    // Retourne l'image optimisée
    ctx.send({ optimizedImage });
  },
};
