// TEMPLATE STRINGS

// Using Normal Strings
function print(fn) {
  console.log('Hello ' + fn);
}
// Use Template String inside CONSOLE.LOG FN
function printTmpStr(fn) {
  console.log(`Hello ${fn}.`);
}
print('Sam');
printTmpStr('Sam');

function createEmail(fn, purchasePrice) {
  var shipping = 5.95;
  console.log(
    `Hi ${fn}, thanks for buying from us!
      Total: $${purchasePrice}
      Shipping: $${shipping}
      Grand Total: $${purchasePrice + shipping}
    `
  );
}

createEmail('Gina', 100);
