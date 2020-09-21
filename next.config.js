module.exports = {
  webpack: (config, options) => {
    if (!config.module.rules) {
      config.module.rules = [];
    }
    config.module.rules.push({
      test: /\.txt$/i,
      use: "raw-loader",
    });
    return config;
  },
};
