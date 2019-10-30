// Readable Stream
// process.stdin.on('data', (chunk) => {
//   console.log('Saisie : ' + chunk.toString());
// });

// Writable Stream
// process.stdout.write('Hello');
// process.stdout.write(' !!!');

// Duplex Stream
// -> Readable + Writeable

// Transform
// -> Duplex + transform

const fs = require('fs');
const path = require('path');
const { createGzip } = require('zlib');

const editorConfigPath = path.resolve(__dirname, '.editorconfig');
const editorConfigPathCopy = path.resolve(__dirname, '.editorconfig.copy');
const editorConfigPathZip = path.resolve(__dirname, '.editorconfig.zip');

// cat .editorconfig > .editorconfig.copy
fs.createReadStream(editorConfigPath).pipe(
  fs.createWriteStream(editorConfigPathCopy),
);

// cat .editorconfig | gzip > .editorconfig.copy.zip
const rs = fs
  .createReadStream(editorConfigPath)
  .pipe(createGzip())
  .pipe(fs.createWriteStream(editorConfigPathZip));

rs.on('close', () => {
  console.log('DONE');
});


const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream(editorConfigPath)
})
let i = 0;
rl.on('line', (line) => {
  console.log(++i, line);
});
