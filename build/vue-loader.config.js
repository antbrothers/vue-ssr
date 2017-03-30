module.exports = {
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    }),
    require('postcss-px2rem')({
      baseDpr: 2,
      threeVersion: false,
      remVersion: true,
      remUnit: 75,
      remPrecision: 6,
      forcePxComment:'!px',
      keepComment:'!no'
    })
  ]
}
