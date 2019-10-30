console.log(process.cwd());
console.log(process.argv);

const argv = require('minimist')(process.argv.slice(2));
console.log(argv.debug); // true

const path = require('path');
const programPath = '/Users/romain/Desktop/Formation_Node.js_Flowbird_2019_10/NodeCLI/01-process-path.js';
console.log(__filename);
console.log(__dirname);
console.log(process.cwd());

console.log(path.extname(__filename)); // .js
console.log(path.isAbsolute(__filename)); // true


console.log(path.join('dist', 'bundle.js')); // 
console.log(path.resolve('dist', 'bundle.js')); // 

console.log(path.join(__dirname, 'dist', 'bundle.js')); // 
console.log(path.resolve(__dirname, 'dist', 'bundle.js')); // 