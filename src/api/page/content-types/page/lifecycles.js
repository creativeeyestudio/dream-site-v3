module.exports = {
    async beforeCreate(event) {
      const { data } = event.params;
  
      if (data.homepage === true) {
        await strapi.db.query('api::page.page').updateMany({
          where: { homepage: true },
          data: { homepage: false },
        });
      }
    },
    
    async beforeUpdate(event) {
      const { data } = event.params;
  
      if (data.homepage === true) {
        await strapi.db.query('api::page.page').updateMany({
          where: { homepage: true },
          data: { homepage: false },
        });
      }
    },
  };
  