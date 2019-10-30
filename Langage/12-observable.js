const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delayMs);
    }, delayMs);
  });
}

const interval$ = interval(Math.floor(Math.random() * 1001));

interval$.subscribe((delay) => console.log(delay + 'ms'));

setTimeout(() => {
  interval$.subscribe((delay) => console.log(delay + 'ms'));
}, 3000);
