console.log("Hello World!\n==========\n");

// Exercise 1:  Print Odds
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for (let i = 1; i <= count; i++){
        if ( i % 2 != 0){
            console.log(i)
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


