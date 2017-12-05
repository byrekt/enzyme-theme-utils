// import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import includePaths from 'rollup-plugin-includepaths'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    // resolve(),
    babel({
      'presets': [['es2015', {'modules': false}], 'stage-0', 'react'],
      'plugins': ['external-helpers'],
      'exclude': 'node_modules/**'
    }),
    includePaths({
      include: {},
      paths: ['src'],
      external: [],
      extensions: ['.js', '.json', '.html']
    })
  ],
  dest: 'dist/enzyme-theme-utils.js'
}
