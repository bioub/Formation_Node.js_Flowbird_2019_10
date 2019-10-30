const fs = require('fs');
const path = require('path');

const editorConfigPath = path.resolve(__dirname, '.editorconfig');
const buffer = fs.readFileSync(editorConfigPath);
console.log(buffer.toString('utf-8'));
console.log(buffer.toString()); // utf-8 par défaut
const contentStr = fs.readFileSync(editorConfigPath, {encoding: 'utf-8'});
console.log(contentStr);

