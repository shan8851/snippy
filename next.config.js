const withImages = require("next-images");
module.exports = withImages({
  target: "serverless",
  env: {
    FAUNA_SECRET: process.env.FAUNA_SECRET,
  },
  esModule: true,
  webpack(config, options) {
    return config;
  },
});
