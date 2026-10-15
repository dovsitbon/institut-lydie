// Compile Tailwind et l'injecte inline dans index.html (entre les marqueurs tw:start / tw:end).
// Usage : node build.mjs
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const dir = mkdtempSync(join(tmpdir(), 'tw-'));
const input = join(dir, 'in.css'), output = join(dir, 'out.css');
writeFileSync(input, '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n');
execSync(`npx -y tailwindcss@3.4.16 -c tailwind.config.js -i "${input}" -o "${output}" --minify`, { stdio: 'inherit' });
const css = readFileSync(output, 'utf8').replace(/\/\*![\s\S]*?\*\//, '');
const html = readFileSync('index.html', 'utf8');
const next = html.replace(/<!--tw:start-->[\s\S]*?<!--tw:end-->/, () => `<!--tw:start--><style id="tw">${css}</style><!--tw:end-->`);
writeFileSync('index.html', next);
console.log(`Tailwind inline : ${(css.length / 1024).toFixed(1)} Ko`);
