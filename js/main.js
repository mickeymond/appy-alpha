var firstName = 'Michael'; // firstname is a word
var lastName = 'Hammond';
var age = 21; // age is a number

// let fullName = firstName + ' ' + lastName;
let fullName = `${firstName} ${lastName}`;
let a = 56;
let b = 43;

let result = `${a} + ${b} = ${a + b}`;
console.log(fullName);
console.log(result);

const boilingWaterTemperature = 100; //

let areYouHappy = true;

let phone = { color: 'black', makeCall: null }

let bottle = {
    color: 'blue',
    volume: 580,
    canStoreWater: true,
    storeWater: null
}

if (age >= 18) {
    console.log('Welcome to XXX');
} else {
    console.log('This page is not for you!');
}

for (let i = 1; i <= 8; i++) {
    console.log('The value if i is ', i);
}

// Functions - Defining
function isEligible() {
    if (age >= 18) {
        return 'Welcome to XXX';
    } else {
        return 'This page is not for you!';
    }
}

// Function - Invoking
// let output  = isEligible();
console.log(isEligible());
document.body.innerHTML = isEligible();

console.log("We are using GIT!");