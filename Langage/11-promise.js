function timeout(delayMs, letter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(letter);
    }, delayMs);
  });
}

function asyncLetter(letter) {
  return timeout(Math.floor(Math.random() * 1001), letter);
}

// asyncLetter('A').then((letter) => console.log(letter));
// asyncLetter('B').then((letter) => console.log(letter));
// asyncLetter('C').then((letter) => console.log(letter));
// asyncLetter('D').then((letter) => console.log(letter));

// Promise.all([
//   asyncLetter('A'),
//   asyncLetter('B'),
//   asyncLetter('C'),
//   asyncLetter('D'),
// ]).then(letters => {
//   console.log(letters);
// })

(async () => {
  const letters = await Promise.all([
    asyncLetter('A'),
    asyncLetter('B'),
    asyncLetter('C'),
    asyncLetter('D'),
  ]);
  console.log(letters);
})();

