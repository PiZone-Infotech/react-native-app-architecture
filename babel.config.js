const plugins = [
  ['babel-plugin-module-resolver', { alias: { '@app': './app' } }],
];
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins,
};
