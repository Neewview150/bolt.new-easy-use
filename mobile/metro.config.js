// Import the necessary modules from metro-config
const { getDefaultConfig } = require('metro-config');

// Export the configuration for Metro bundler
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      // Enable support for inline requires to improve performance
      inlineRequires: true,
    },
    resolver: {
      // Add additional source extensions if needed
      sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'],
      // Specify asset extensions to be handled by Metro
      assetExts: [...assetExts, 'png', 'jpg', 'jpeg', 'svg', 'gif'],
    },
    // Additional configurations can be added here
  };
})();
