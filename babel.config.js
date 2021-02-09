const path = require('path')
const { getPaths } = require('@redwoodjs/internal')

module.exports = {
  presets: ['@redwoodjs/core/config/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '~sharing': path.join(getPaths().base, 'sharing')
        },
      },
    ],
  ],
}
