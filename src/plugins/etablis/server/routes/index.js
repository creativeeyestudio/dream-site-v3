module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },

  {
    method: 'GET',
    path: '/sheet',
    handler: 'sheetController.find',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
];
