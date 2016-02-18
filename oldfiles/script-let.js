// LET Demo
var x = 10;
if(x) {
  let x = 4; // BLOCK Scope
}
console.log(x); // x = 10

// If you use VAR in place of LET
// When a Block is Clicked the Box # will always be 45
for(let i=0; i<45;i++) {
  var div = document.createElement('div');
  div.onclick = function() {
    alert('You Clicked on a Box #' + i);
  };
  document.getElementsByTagName('section')[0].appendChild(div);
}
