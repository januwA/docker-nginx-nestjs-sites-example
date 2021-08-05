const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const bcfg = require('./tsconfig.build.json');
const pkg = require('./package.json');

let outDir =
  bcfg.compilerOptions?.outDir ||
  require('./tsconfig.json').compilerOptions?.outDir ||
  'dist';

// set tsconfig.build.json
bcfg.compilerOptions = bcfg.compilerOptions || {};
bcfg.compilerOptions.sourceMap = false;
bcfg.compilerOptions.declaration = false;
bcfg.compilerOptions.incremental = false;
fs.writeFileSync('./tsconfig.build.json', JSON.stringify(bcfg, null, '  '));

// build
execSync('nest build');

// copy package.json
delete pkg.devDependencies;
delete pkg.jest;
fs.writeFileSync(
  path.join(outDir, 'package.json'),
  JSON.stringify(pkg, null, '  '),
);

if (fs.existsSync('.env')) fs.copyFileSync('.env', path.join(outDir, '.env'));

if (fs.existsSync('.env.prod'))
  fs.copyFileSync('.env.prod', path.join(outDir, '.env.prod'));
