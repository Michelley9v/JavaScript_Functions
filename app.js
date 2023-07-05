console.log("Hello World!\n==========\n");

// Exercise 1:  Print Odds
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for (let i = 1; i <= count; i++){
        if ( i % 2 != 0){
            console.log(i);
}    
}
}

printOdds(10);
printOdds(100);

// Exercise 2: Check Age
console.log("EXERCISE 2:\n==========\n");

function checkAge (name, age) {

let oldEnoughMsg =`Congrats ${name}! You can drive`;
let underAgeMsg = `Sorry ${name}, you need to wait ${
    16 - age 
 } year(s) until you can drive.`;

if (age < 16 ) {
    console.log(underAgeMsg);
} else {
    console.log(oldEnoughMsg);
}
}
checkAge("Michelle",50);
checkAge("Ezz", 53);
checkAge("Shehab", 14);

function oldEnoughMsg(age, targetAge) {
    return age >= targetAge;
}

function checkLicenseMsg(name, age) {
    let canDrive = oldEnoughMsg(age, 16);
    let canHavePermit = oldEnoughMsg(age, 15);
    let canDrink = oldEnoughMsg(age, 21);

    if (canDrink) {
        console.log(
            `${name} can drink. ${name} can also drive. NOT AT THE SAME TIME!`
        );
    } else if(canDrive) {
      console.log(
        `${name} can drive.`
      );  
    } else if(canHavePermit) {
        console.log(
            `${name} can drive with another person of age.`);
    } else {
       console.log(`${name} too young. Wait some Years.`);
    }
}

checkLicenseMsg("Michelle", 50);
checkLicenseMsg("Ezz", 53);
checkLicenseMsg("Shehab", 14);

//Exercise 3 Which Quadrant?

function checkQuadrant(x, y) {
    if(x > 0 && y > 0){
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4"; 
    } else if (x == 0 && y != 0) {
        return "x Axis";
    } else if (x != 0 && y == 0) {
        return "y Axis";
    } else {
        return "origin";
    }
}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));

//Exercise 4 What type of triangle?
function isValidTriangle(a, b, c) {
return a + b > c && a + c > b && b + c > a
}

function checkTriangle(a, b, c) {
 let isValid = isValidTriangle(a, b, c);
  if (isValid) {
  if (a == b && b == c) {
    return `Equilateral`;
  } else if (a == b || b == c || a == c) {
    return `Isosceles`;
  } else {
    return `Scalene`;
  }
  } else {
    return `Not a valid triangle.`;
  }
}

console.log(checkTriangle(2, 3, 4)); // scalene
console.log(checkTriangle(2, 2, 2)); // eq
console.log(checkTriangle(1, 2, 2)); // Isosceles
console.log(checkTriangle(1, 1, 2)); // invalid

//Exercise 5 Data Plan Status
// planLimit,day, usage 
/*
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*/
function datausagefeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day}day(s) used, ${remainingDays} day(s) remaining`);

    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "Exceeding";
    } else if (currentAvg < projectedAvg) {
    statusMsg = "Under";
    } else {
    statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/day),
    continuing this usage, you'll end up using ${ 
     planLimit - (usage + projectedUsage)
   } GB from your data limit.
To stay below your data planLimit, use no more than ${
    remainingData / remainingDays
} GB/day.`);
}

    datausagefeedback(50, 10, 25);