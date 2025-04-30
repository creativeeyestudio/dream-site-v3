const schema = {
    kind: 'collectionType',
    collectionName: 'activities',
    info: {
        singularName: 'activity',
        pluralName: 'activities',
        displayName: 'Activités',
    },
    options: {
        draftAndPublish: false,
    },
    pluginOptions: {
        'content-manager': {
            visible: true,
        },
        'content-type-builder': {
            visible: true,
        },
    },
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: "text",
            required: true
        },
        image: {
            allowedTypes: ["images"],
            type: "media",
            multiple: false
        },
        schedule: {
            type: "string",
            required: false
        },
        price: {
            type: "string",
            required: true
        },
        recommended: {
            type: 'boolean',
            required: false,
        },
        is_external: {
            type: 'boolean',
            required: false,
        }
    }
}

export default {
    schema,
}