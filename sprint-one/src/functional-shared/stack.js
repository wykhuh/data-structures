var makeStack = function() {
  var stack = {};
  stack.storage = {};
  stack.items = 0;
  stack.pop = stackMethods.pop;
  stack.push = stackMethods.push;
  stack.size = stackMethods.size;
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.items] = value;
    this.items += 1;
  },
  pop: function() {
    if(this.items > 0) {
      this.items -=1;
      return this.storage[this.items];
    }
  },
  size: function() {
    return this.items;
  }
};


