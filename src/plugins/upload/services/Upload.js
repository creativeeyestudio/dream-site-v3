const optimizeImages = require('../../optimize-images/services/optimize'); // Import du service d'optimisation

async upload(ctx) {
  const files = ctx.request.files;

  if (!files || !files.file) {
    throw new Error('Aucun fichier à uploader');
  }

  const file = files.file;

  // Appel du service d'optimisation avant l'upload classique
  const optimizedImage = await optimizeImages.optimizeImage(file);

  // Crée un nouvel objet avec l'image optimisée
  const newFile = {
    ...file,
    buffer: optimizedImage.buffer,
    optimized: true,  // Ajouter un flag pour signaler que l'image a été optimisée
  };

  // Appel du service d'upload classique de Strapi pour continuer l'upload
  const result = await strapi.plugins['upload'].services.upload.uploadFiles({ files: [newFile] }, ctx);

  return result;
}
