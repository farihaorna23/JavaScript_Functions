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

//printOdds(5);
// printOdds(-5);
// printOdds(0);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
const checkAge = (userName = "Jane Doe", age = 0) => {
  age = Number(age);
  //console.log(typeof age);
  let aboveSixteen = `Congrats ${userName}, you can drive`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;
  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
};

checkAge("Arna", "24");
checkAge("Sandy", 22);
checkAge("Arnab", 15);
checkAge();
