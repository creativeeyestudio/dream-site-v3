const config = {
  locales: [
    // 'ar',
    'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  theme: {
    colors: {
      primary100: '#A8DADC',  // Bleu clair
      primary200: '#74A9CF',  // Variation du bleu clair
      primary500: '#1D3557',  // Bleu marine (fiabilité et confiance)
      accent500: '#FF8C42',   // Orange chaud (boutons, CTA)
      neutral0: '#F1FAEE',    // Fond gris clair
      neutral100: '#E5E5E5',  // Fond secondaire légèrement plus foncé
      neutral500: '#B0B0B0',  // Éléments désactivés
      neutral900: '#333333',  // Texte principal (gris foncé)
      danger700: "#B72B1A",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
