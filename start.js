require('babel-register')({
  presets: ['env'],
  plugins: [
    'transform-runtime',
    "transform-decorators-legacy"
  ]
})

module.exports = require('./app.js')