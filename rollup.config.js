const babel = require("rollup-plugin-babel")

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/svgod.js',
    format: 'umd',
    name: 'svgod'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}