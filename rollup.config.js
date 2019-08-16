// import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import includePaths from 'rollup-plugin-includepaths'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    // resolve(),
    babel({
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties'
      ]
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
