import * as esbuild from 'esbuild';
import { rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import makeAllPackagesExternal from 'esbuild-plugins/make-all-packages-external.mjs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

if (existsSync(join(__dirname, '..', 'dist')))
    rmSync(join(__dirname, '..', 'dist'), { recursive: true });

const watch = process.argv.includes('--watch');
const dev = process.argv.includes('--dev');

Promise.all([
    esbuild.build({
        bundle: true,
        logLevel: 'info',
        format: 'esm',
        platform: 'node',
        target: 'es2020',
        entryPoints: ['./src/index.ts'],
        outfile: './dist/index.mjs',
        sourcemap: dev,
        charset: 'utf8',
        external: ['esbuild'],
        minify: !dev,
        watch: watch,
        plugins: [makeAllPackagesExternal]
    })
]).catch(err => {
    console.error('CLI failed to build');
    console.error(err.message);
}).then(() =>{
  console.log(watch ? 'Waiting for your changes...' : 'CLI has been built');
});