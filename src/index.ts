console.log("hello world");

const func = () => true;

const a = new Promise(resolve => resolve(undefined));

async function b() {
  await a;
}

b();
