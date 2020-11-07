const withImages = require("next-images");
module.exports = withImages({
  target: "serverless",
  esModule: true,
  webpack(config, options) {
    return config;
  },
});
