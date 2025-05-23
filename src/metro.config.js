const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  return {
    ...config,
    resolver: {
      ...config.resolver,
      platforms: ["ios", "android"]
    }
  };
})();