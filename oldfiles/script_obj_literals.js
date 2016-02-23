// Enhancing Object Literals

// ES5 Construct
var cat = {
  meow: function(times) {
    console.log(Array(times+1).join('meow'));
  },
  purr: function(times) {
    console.log(Array(times+1).join('purr'));
  },
  snore: function(times) {
    console.log(Array(times+1).join('snore'));
  }
};

cat.meow(3);
cat.purr(5);
cat.snore(7);

var catEs6 = {
  meow(times) {
    console.log('meow'.repeat(times));
  },
  purr(times) {
    console.log('purr'.repeat(times));
  },
  snore(times) {
    console.log('snore'.repeat(times));
  }
};

catEs6.meow(3);
catEs6.purr(5);
catEs6.snore(7);
