export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    // auth: {
    //   logo: AuthLogo,
    // },
    // Replace the favicon
    // head: {
    //   // Try to change the origin favicon.png file in the
    //   // root of strapi project if this config don't work.
    //   favicon: favicon, 
    // },
    // Add a new locale, other than 'en'
    locales: ["fr", "de"],
    // Replace the Strapi logo in the main navigation
    // menu: {
    //   logo: MenuLogo,
    // },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
    // Extend the translations
    translations: {
      fr: {
        "Auth.form.email.label": "test",
        Users: "Utilisateurs",
        City: "CITY (FRENCH)",
        Id: "ID french",
      },
    },
  },

  bootstrap() {},
};