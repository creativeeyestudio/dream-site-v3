module.exports = ({ strapi }) => ({
    async find(ctx) {
        const etablissement = await strapi.entityService.findMany("plugin::etablis.etablissement");
        return etablissement || {};
    },

    async update(ctx) {
        const data = ctx.request.body;
        const updatedEtablissement = await strapi.entityService.update("plugin::etablis.etablissement", 1, { data });
        return updatedEtablissement;
    },
});
  