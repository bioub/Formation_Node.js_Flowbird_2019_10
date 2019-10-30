class Contact {
  constructor(name) {
    this.name = name;
  }
  helloSync() {
    console.log(`Hello ${this.name}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 100);
  }
}

const romain = new Contact('Romain');
romain.helloSync(); // Hello Romain
romain.helloAsync(); // Hello Romain
