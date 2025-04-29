const schema = {
    kind: 'collectionType',
    collectionName: 'services',
    info: {
        singularName: 'service',
        pluralName: 'services',
        displayName: 'Services',
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
            type: "string",
            required: true
        },
        icon: {
            allowedTypes: ["images"],
            type: "media",
            multiple: false
        },
        description: {
            type: "text",
            required: true
        },
        schedule: {
            type: "string",
            required: false
        },
        contact: {
            type: "email"
        }
    },
};

export default {
    schema,
}