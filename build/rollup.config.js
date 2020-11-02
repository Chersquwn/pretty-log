import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import clear from 'rollup-plugin-clear'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/es/index.js',
      format: 'es',
    },
    {
      file: 'lib/umd/index.js',
      name: 'log',
      format: 'umd',
    },
  ],
  plugins: [
    clear({
      targets: ['lib'],
    }),
    json(),
    typescript(),
  ],
}
