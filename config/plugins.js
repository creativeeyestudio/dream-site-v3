module.exports = ({ env }) => ({
    'strapi-plugin-populate-deep': {
        config: {
            defaultDepth: 3, // Default is 5
        }
    },
    matomo: {
        config: {
            widgetURL: env('MATOMO_WIDGET_URL'),
        }
    },
    "sejour-plus": {
        enabled: true,
        resolve: './src/plugins/sejour-plus',
    }
});
