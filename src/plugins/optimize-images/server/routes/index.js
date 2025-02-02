module.exports = [
  {
    method: "GET",
    path: "/admin/plugins/optimize-images/settings",
    handler: "settings.getSettings",
    config: {
      policies: []
    }
  },
  {
    method: "POST",
    path: "/admin/plugins/optimize-images/settings",
    handler: "settings.saveSettings",
    config: {
      policies: []
    }
  },
  {
    method: "POST",
    path: "/image/upload-and-optimize",
    handler: "upload.upload",
    config: {
      policies: []
    }
  },
];
