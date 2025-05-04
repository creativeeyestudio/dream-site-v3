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
    // 'dreamsite-plugin-hotel-guide': {
    //     enabled: true,
    //     resolve: './src/plugins/dreamsite-plugin-hotel-guide',
    // }
});
