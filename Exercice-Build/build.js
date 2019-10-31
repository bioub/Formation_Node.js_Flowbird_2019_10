const fs = require('fs-extra');
const path = require('path');
const md5 = require('md5');
const Terser = require('terser');
const argv = require('minimist')(process.argv.slice(2));

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function removeAndCreateDir(dir) {
  await fs.remove(dir);
  await fs.mkdir(dir);
}

async function buildJs() {
  const contents = await Promise.all([
    fs.readFile(horlogeJsPath, { encoding: 'utf-8' }),
    fs.readFile(indexJsPath, { encoding: 'utf-8' }),
  ]);

  const js = argv.minify ? Terser.minify(contents).code : contents.join('');
  const hash = md5(js);

  const {dir, name, ext} = path.parse(appJsDistPath);

  const jsPath = argv.hash
    ? path.resolve(dir, `${name}.${hash}${ext}`)
    : appJsDistPath;

  await fs.writeFile(jsPath, js);

  return hash;
}

async function buildHtml(hash) {
  let content = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });
  content = content.replace(
    /<script.*<\/script>/s,
    argv.hash
      ? `<script src="app.${hash}.js"></script>`
      : '<script src="app.js"></script>',
  );
  await fs.writeFile(indexHtmlDistPath, content);
}

(async () => {
  await removeAndCreateDir(distPath);
  console.log('dist created');
  const md5 = await buildJs();
  console.log('js built');
  await buildHtml(md5);
  console.log('html built');
})();
