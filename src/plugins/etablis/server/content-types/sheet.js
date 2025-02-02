'use strict';

module.exports = {
    kind: "singleType",
    collectionName: "etablis_sheet",
    info: {
        singularName: 'sheet', // Nom au singulier
        pluralName: 'sheets',  // Nom au pluriel
        displayName: 'Fiche établissement', // Nom affiché dans l'interface
        description: "Fiche descriptive de l'établissement",
    },
    options: {
        draftAndPublish: true,
    },
    attributes: {
        name: {
            type: 'string',
            required: true,
            unique: true,
            description: "Nom de l'hôtel ou du restaurant"
        },
        logo: {
            allowedTypes: ["images"],
            type: 'media',
            multiple: false,
            required: true
        },
        category: {
            type: "enumeration",
            enum: [
                "hotel",
                "restaurant",
                "hotel-restaurant"
            ],
            required: true,
            description: "Catégorie de l'établissement"
        },
        phone_number: {
            type: "string",
            required: true
        },
        mail_adress: {
            type: "string",
            required: true
        },
        hotel_stars: {
            type: "integer",
            min: 0
        },
        google_maps_link: {
          type: "string"
        },
        location: {
          type: "customField",
          customField: "plugin::strapi-leaflet-geoman.geojson"
        }
    },
};
