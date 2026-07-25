const makeDream = require('./index');

const iterations = 50000;

for (let i = 0; i < iterations; i++) {
    const dream = makeDream();
    if (typeof dream !== 'string' || dream.length === 0) {
        throw new Error(`Dream ${i + 1} was empty`);
    }
    if (dream.includes('undefined')) {
        throw new Error(`Dream ${i + 1} contained an undefined part`);
    }
}

console.log(`${iterations} dreams completed without undefined parts`);
