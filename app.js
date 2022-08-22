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

// checkAge("Arna", "24");
// checkAge("Sandy", 22);
// checkAge("Arnab", 15);
// checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
const quadrant = (x = 0, y = 0) => {
  x = Number(x);
  y = Number(y);
  console.log(typeof x);
  console.log(typeof y);
  if (x === 0 && (y >= 0 || y <= 0)) {
    console.log(`(${x}, ${y}) is on the y-axis`);
  } else if ((x >= 0 || x <= 0) && y === 0) {
    console.log(`(${x}, ${y}) is on the x-axis`);
  } else if (x >= 1 && y >= 1) {
    console.log(`(${x}, ${y}) is in Quadrant 1`);
  } else if (x <= -1 && y >= 1) {
    console.log(`(${x}, ${y}) is in Quadrant 2`);
  } else if (x <= -1 && y <= -1) {
    console.log(`(${x}, ${y}) is in Quadrant 3`);
  } else if (x >= 1 && y <= -1) {
    console.log(`(${x}, ${y}) is in Quadrant 4`);
  }
};

// quadrant("2", "4");
// quadrant(0, 2);
// quadrant(1, 2);
// quadrant(-6, 18);
// quadrant(-3, 0); //x
// quadrant(4, 0); //x
// quadrant(0, 4); //y
// quadrant(0, -5); //y
// quadrant(-4, -4);
// quadrant(2, -3);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
const triangle = (side1 = 0, side2 = 0, side3 = 0) => {
  if (
    !(side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2)
  ) {
    return console.log(
      `Sides ${side1},${side2},${side3} is an invalid triangle`
    );
  }

  //console.log(side1 === side2 && side2 === side3);

  if ((side1 === side2) & (side2 === side3)) {
    console.log(`Sides ${side1},${side2},${side3} is an equilateral triangle`);
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log(`Sides ${side1},${side2},${side3} is an isosceles triangle`);
  } else {
    console.log(`Sides ${side1},${side2},${side3} is a scalene triangle`);
  }
};
// triangle(1, 2, 2); //isosceles
// triangle(1, 1, 2); //invalid
// triangle(3, 4, 6); //scalene
// triangle(1, 3, 2); //invalid
// triangle(2, 3, 1); //invalid
// triangle(2, 1, 3); //invalid
// triangle(2, 2, 2); //equilateral
// triangle();

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

const dataPlan = (planLimit, day, useage) => {
  let daysLeft = 30 - Number(day);
  let dataLeft = Number(planLimit - useage);
  let avgDataUseageLeft = dataLeft / daysLeft;
  let avgDataUsedPerDay = useage / day;
  let recommendedAvgDataUsedPerDay = planLimit / 30;

  let isExceed = "";
  let isHigh = "";
  let rest_content = "";
  let advice = "";

  console.log(recommendedAvgDataUsedPerDay);
  console.log(avgDataUsedPerDay);

  if (avgDataUsedPerDay > recommendedAvgDataUsedPerDay) {
    isExceed = isExceed + "EXCEEDING";
    isHigh = isHigh + "high";
    rest_content =
      rest_content +
      `continuiting this high useage, you'll exceed your data plan by ${day *
        avgDataUsedPerDay -
        dataLeft} GB.`;
    advice =
      advice +
      `To stay below your plan, use no more than ${dataLeft /
        (30 - day)} GB/per day`;
  } else if (recommendedAvgDataUsedPerDay > avgDataUsedPerDay) {
    isExceed = isExceed + "NOT EXCEEDING";
    isHigh = isHigh + "low";
    rest_content =
      rest_content +
      `you will have ${Math.abs(day * avgDataUsedPerDay - dataLeft)} GB. left `;
    advice =
      advice +
      `To utilize all your data before time is up, use ${dataLeft /
        (30 - day)} GB?per day`;
  }

  console.log(`${day} days used, ${daysLeft} days remaining.
The recommended average data used per day for 30 days period is (${recommendedAvgDataUsedPerDay} GB/day).
You are ${isExceed} your average daily use (${avgDataUsedPerDay} GB/day), ${rest_content}
${advice}`);
};

dataPlan(100, 15, 56);
