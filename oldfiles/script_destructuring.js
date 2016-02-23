// Destructuring

var cities = ['Spokane', 'Boston', 'Los Angeles', 'Seattle', 'Portland'];
// Old Style
cities[0];
cities[3];

// Arrays
// Commas in the Destructure "Operator" skip indexes in the following Array
var [first,,, fourth,] = ['Spokane', 'Boston', 'Los Angeles', 'Seattle', 'Portland'];
console.log(first);
console.log(fourth);

var {title, price} = {
  title: 'Reuben',
  price: 7,
  description: 'Clevelands favorite sandwich',
  ingredients: ['bread', 'corned beef', 'dressing', 'sauerkraut', 'cheese']
};

console.log(title);
console.log(price);

// Object Keys
var vacation = {
  destination: 'Chile',
  travelers: 2,
  activity: 'skiing',
  cost: 4000
};

function vactionMarketing({destination, activity}) {
  return `Come to ${destination} and do some ${activity}`;
}

console.log(vactionMarketing(vacation));
