    /* basic console writeline */
    console.log("Hello Everyone");
    /* setting name to Liam */
    let myName = "Liam";
    console.log("Hello" + myName);
    /* setting age to 30 */
    let myAge = 30;
    console.log(myAge);
    /* getting age, adding 2 multiplied by 4 */
    console.log(myAge + 2 * 4);


let numbers = 1;
console.log(numbers);

let mints = 10;
let chocolates = 5
let sweets = mints + chocolates;

console.log("Mints " + mints);
console.log("Chocolates " + chocolates);
console.log("Sweets = " + sweets);

let firstName = "Liam";
let lastName = "Collins";
let fullName = firstName + " " + lastName;

console.log(fullName);

console.log(firstName + " is " + firstName.length + " characters long");

let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);

let myName2 =  "Liam";
console.log(typeof myName2);

let number = 1;
console.log("The type of number is " + typeof number);

let isTrues = true;
console.log("The type of isTrue is " + typeof isTrues);

let name;
console.log(name);
let age = null;
console.log(age);

let a = 1;
let b = 2;
let isAgreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAgreaterThanB);
console.log(isALessThanB);
console.log(isAEqualToB);


let favouriteProgrammingLanguage = "JavaScript";
let currentCourseDay = 3;

const sentence = "My favourite programking language is " + favouriteProgrammingLanguage + " and today is day " + currentCourseDay + " of learning how to program HTML, CSS and JavaScript."


// conditionals

if (0 < 1)
{
    console.log("1 is greater than 0");
}

let age3 = 10
let legalDrivingAge = 17;

if (age > legalDrivingAge)
{
    console.log("You are old enough to drive");
}

let isRoadLegal = false;

const age4 = 18;
const legalDrivingAge1 = 17;

if (age4 > legalDrivingAge1)
{
    isRoadLegal = true;
}

console.log("Am I road legal?", isRoadLegal);

let age5 = 10;
let legalDrivingAge2 = 17;

if (age5 > legalDrivingAge2)
{
    console.log("You can drive!");
}
else
{
    console.log("You are not old enough to drive!");
}

let age6 = 17
let legalDrivingAge3 = 17

if (age > legalDrivingAge3)
{
    console.log("You're old enough to drive as you are " + legalDrivingAge3);
}
else if (age6 ===legalDrivingAge3)
{
    console.log("You're just old enough to drive at " + legalDrivingAge3);
}
else if (age6 < legalDrivingAge3)
{
    console.log("You're not old enough to drive as you are " + legalDrivingAge3);
}