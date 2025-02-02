const axios = require('axios');
const FormData = require('form-data');

module.exports = {
    async uploadAndOptimize(ctx) {
        const { files } = ctx.request.body;

        if (!files || !files.file) {
            return ctx.throw(400, 'Aucun fichier fourni')
        }

        try {
            const file = files.file;

            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post('http://localhost:3002/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',  // Envoi le fichier en multipart
                },
            });

            if (response.data) {
                const optimizedImage = response.data.optimizedImage;

                const uploadedFile = await strapi.plugins['upload'].services.upload.upload({
                    data: {
                        filename: file.name,
                        mime: file.type,
                    },
                    files: optimizedImage,
                });

                ctx.send(uploadedFile);
            }
        } catch (error) {
            console.error('Erreur lors de l\'optimisation de l\'image:', error);
            ctx.throw(500, 'Erreur lors de l\'optimisation de l\'image');
        }
    }
}