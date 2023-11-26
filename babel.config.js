module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.ts', '.tsx', '.json'],
          alias: {
            '@assets': './assets/',
            '@components': './src/components',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@stores': './src/stores',
            '@themes': './src/themes',
            '@interfaces': './src/interfaces',
            '@utils': './src/utils',
            '@layouts': './src/layouts',
            '@mocks': './src/mocks',
          },
        },
      ],
    ],
  };
};
