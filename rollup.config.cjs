const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs').default;
const typescript = require('@rollup/plugin-typescript').default;
const fs = require('fs');
const path = require('path');

module.exports = {
  input: 'src/Nora.tsx',
  output: [
    { file: 'dist/cjs/index.js', format: 'cjs', sourcemap: true, exports: 'named' },
    { file: 'dist/esm/index.js', format: 'esm', sourcemap: true, exports: 'named' },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist/types',
      noEmit: false,
      sourceMap: true,
      exclude: ['node_modules', 'dist'],
      outDir: './dist/temp'
    }),
    {
      name: 'move-declarations',
      writeBundle() {
        const typesDir = path.resolve('dist/types');
        const cjsTypesDir = path.resolve('dist/cjs/types');
        const destFile = path.resolve('dist/index.d.ts');

        let srcFile = path.resolve(typesDir, 'index.d.ts');
        if (fs.existsSync(srcFile)) {
          fs.renameSync(srcFile, destFile);
          fs.rmSync(typesDir, { recursive: true, force: true });
          return;
        }

        srcFile = path.resolve(cjsTypesDir, 'Nora.d.ts');
        if (fs.existsSync(srcFile)) {
          fs.renameSync(srcFile, destFile);
          fs.rmSync(cjsTypesDir, { recursive: true, force: true });
        }
      }
    }
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime']
};