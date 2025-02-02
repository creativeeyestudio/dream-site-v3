const axios = require('axios');
const FormData = require('form-data');

module.exports = {
  // Fonction pour optimiser une image
  async optimizeImage(file) {
    const formData = new FormData();
    formData.append('file', file.buffer, file.originalname);

    try {
      // Appel au microservice d'optimisation
      const response = await axios.post('http://localhost:3002/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.optimizedImage) {
        return response.data.optimizedImage; // Retourne l'image optimisée
      }
    } catch (error) {
      console.error('Erreur d\'optimisation d\'image :', error);
      throw new Error('Optimisation échouée');
    }
  }
};
