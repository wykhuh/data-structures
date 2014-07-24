var makeStack = function() {

  var myStack = Object.create(stackMethods);
  myStack.storage = {};
  myStack.numItems = 0;

  return myStack;
};

var stackMethods = {

  pop: function() {
    if (this.numItems > 0) {
      this.numItems--;
      var temp = this.storage[this.numItems];
      delete this.storage[this.numItems];
      return temp;
    }
  },

  push: function(value) {
    this.storage[this.numItems] = value;
    this.numItems++;
  },

  size: function(){
    return this.numItems;
  }


};


