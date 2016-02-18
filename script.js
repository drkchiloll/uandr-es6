// CONST
const birthYear = 1985;
// var birthYear = 1977; // WEBPACK BARF
var age = 2015 - birthYear;
console.log(age);

function coldEnough(deg) {
  const freezingTemp = 32;
  if(freezingTemp <= deg) {
    return deg + ' is above freezing.';
  } else {
    return deg + ' is below freezing.';
  }
}

console.log(coldEnough(40));
console.log(coldEnough(12));
console.log(coldEnough(-10));
