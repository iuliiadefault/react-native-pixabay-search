module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          screens: "./src/screens",
          navigation: "./src/navigation",
          environment: "./src/environment",
          constants: "./src/constants",
          services: "./src/services",
          types: "./src/types",
          components: "./src/components",
        },
      },
    ],
  ],
};
