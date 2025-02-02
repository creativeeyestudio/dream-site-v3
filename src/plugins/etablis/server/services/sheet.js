'use strict'

module.exports = ({ strapi }) => ({
    /**
     * @param {any} data
     */
    async create(data) {
        try {
            const result = await strapi.entityService.create(
                'plugin::etablis.sheet',
                { data }
            );
            return result;
        } catch (error) {
            strapi.log.error('Erreur dans le service create :', error);
            throw new Error('Échec de la création.');
        }
    },

    async find() {
        try {
            // Récupération de l'unique instance de la fiche (Single Type)
            const result = await strapi.entityService.findMany(
                'plugin::etablis.sheet',
                { populate: '*' } // Inclure les relations, personnalisez si besoin
            );
        
            // Retourner l'unique instance ou `null` si non trouvée
            return result || null;
        } catch (error) {
            strapi.log.error('Erreur dans le service find :', error);
            console.error(error);
            throw new Error('Échec de la récupération de la fiche.');
        }
    },
})