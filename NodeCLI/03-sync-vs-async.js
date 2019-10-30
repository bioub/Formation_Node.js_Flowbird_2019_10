const fs = require('fs');
const path = require('path');

const editorConfigPath = path.resolve(__dirname, '.editorconfig');
const editorConfigPathCopy = path.resolve(__dirname, '.editorconfig.copy');

// Synchrone : simple à écrire (comme en PHP ou Java)
// Peu performante -> bloque le thread
try {
  const buffer = fs.readFileSync(editorConfigPath);
  fs.writeFileSync(editorConfigPathCopy, buffer);
  console.log('Copy Sync Done');
} catch (err) {
  console.log(err.message);
}

// Asynchrone (style callback Node.js)
// Performant, mais compliqué à écrire
// Node.js a normé les callbacks
// -> le cb est toujours le dernier param
// -> toujours appelé avec err en premier arg
// -> un 2e argument si on attend un retour (ce qui
// aurait été la valeur de retour dans la fonction sync)

// Callback Hell / Pyramid of Doom
fs.readFile(editorConfigPath, (err, buffer) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(editorConfigPathCopy, buffer, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy Async Callback Done');
      }
    });
  }
});

// Asynchrone (style basé sur les promesses / Promise)
// Performant, mais un peu plus simple à écrire
// Promise, normé en ES6
// Avant on passait par des bibliothèques : Bluebird ou q
fs.promises
  .readFile(editorConfigPath)
  .then((buffer) => fs.promises.writeFile(editorConfigPathCopy, buffer))
  .then(() => console.log('Copy Async Promise Done'))
  .catch((err) => console.log(err.message));

// Asynchrone (style basé les mots clé async / await ES2017/ES8)
// Performant, le plus simple à écrire
// Basé sur des promesses
(async function() {
  try {
    const buffer = await fs.promises.readFile(editorConfigPath);
    await fs.promises.writeFile(editorConfigPathCopy, buffer);
    console.log('Copy Async await Done');
  } catch (err) {
    console.log(err.message);
  }
})();

console.log('FIN');
// Stage 3 du TC39 -> Top Level Await
// De ne pas mettre fonction async
// {
//   const buffer = await fs.promises.readFile(editorConfigPath);
//   console.log(buffer.toString());
// }


// function readFile(path, content) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, content, (err, buffer) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(buffer);
//     });
//   })
// }

// const { promisify } = require('util');
// const readFile = promisify(fs.readFile);
