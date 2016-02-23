// Arrow Functions

// Default Return console.log
var studentList = students => console.log(students);

studentList(['Joe', 'Cindy', 'Jeanne']);

//Arrow Functions and THIS

// Old Style bind(this)
var person = {
  first: 'Doug',
  actions: ['bike', 'hike', 'run', 'surf'],
  printActions: function() {
    this.actions.forEach(function(action) {
      var str = this.first + ' likes to ' + action;
      console.log(str);
    });
  }
};
// person.printActions(); // Cannot Read property 'first' of undefined

var personBind = {
  first: 'Doug',
  actions: ['bike', 'hike', 'run', 'surf'],
  printActions() {
    this.actions.forEach(function(action) {
      var str = this.first + ' likes to ' + action;
      console.log(str);
    }.bind(this));
  }
};
// personBind.printActions();

var personArrow = {
  first: 'Doug',
  actions: ['bike', 'hike', 'run', 'surf'],
  printActions: function() {
    this.actions.forEach(action => {
      var str = this.first + ' likes to ' + action;
      console.log(str);
    });
  }
};
personArrow.printActions();
