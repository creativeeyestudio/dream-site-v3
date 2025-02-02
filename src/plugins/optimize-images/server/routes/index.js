module.exports = [
  {
    method: "POST",
    path: "/image/upload-and-optimize",
    handler: "upload.upload",
    config: {
      policies: []
    }
  },
];
