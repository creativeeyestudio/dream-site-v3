'use strict';

module.exports = {
    async create(ctx) {
        try {
            const data = ctx.request.body;

            if (data.name) {
                return ctx.badRequest("Le champ 'Nom' est obligatoire")
            }

            const entity = await strapi.plugin('etablis')
                .service('sheet')
                .create(data);
            
            return ctx.created(entity); 
        } catch (error) {
            strapi.log.error("Erreur lors de la création : " + error);
            return ctx.internalServerError("Une erreur est survenue lors de la création de la fiche établissement")
        }
    },

    async find(ctx) {
        try {
            // Appel au service pour récupérer l'entité unique
            const entity = await strapi.plugin('etablis').service('sheet').find();
        
            if (!entity) {
                return ctx.notFound('La fiche n\'existe pas.');
            }
        
            return ctx.send(entity);
        } catch (error) {
            console.log(error);
            strapi.log.error('Erreur lors de la récupération de la fiche :', error);
            return ctx.internalServerError('Impossible de récupérer la fiche.');
        }
    },
}