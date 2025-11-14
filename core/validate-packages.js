import fs from 'fs';
import path from 'path';
import validate from 'validate-npm-package-name';

const root = './packages';
const dirs = fs.readdirSync(root);

for (const dir of dirs) {
  const pkgPath = path.join(root, dir, 'package.json');
  if (!fs.existsSync(pkgPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const result = validate(pkg.name);

  if (!result.validForNewPackages) {
    console.log(`❌ INVALID PACKAGE NAME: ${pkg.name}`);
    console.log(result.errors || result.warnings);
  } else {
    console.log(`✔ VALID: ${pkg.name}`);
  }
}