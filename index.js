// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = '17500';
// in Km
let distMars = 225000000;
//in Km
let distMoon = 384400;
const millePerKm = .621;


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeed));
console.log(typeof(distMars));
console.log(typeof(distMoon));
console.log(typeof(millePerKm));
// Code your solution to exercises 3 and 4 here:

let distMarsKm = distMars * millePerKm;
console.log(distMarsKm);

let hourMars = distMarsKm / shuttleSpeed;
console.log(hourMars);

let daysMars = hourMars / 24 ;
console.log(daysMars);


// Code your solution to exercise 5 here:
