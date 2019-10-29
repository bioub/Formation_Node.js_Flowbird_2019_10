const glob = require('glob');

glob('**/*.test.js', (err, matches) => {
  for (const testFile of matches) {
    require('./' + testFile);
  }
})
