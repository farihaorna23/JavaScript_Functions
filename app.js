console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const printOdds = count => {
  if (count < 0) {
    count = count * -1;
  }

  if (count === 0) {
    console.log(`Please enter a number greater than 0`);
  }
  for (let i = 0; i <= count; i++) {
    if (i % 2 !== 0) {
      console.log(`the odd value is ${i}`);
    }
  }
};

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
