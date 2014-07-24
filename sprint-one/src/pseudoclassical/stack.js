var Stack = function() {
  this.storage = {};
  this.numItems = 0;
};

Stack.prototype.pop = function(){
  if (this.numItems > 0) {
    this.numItems--;
    var temp = this.storage[this.numItems];
    delete this.storage[this.numItems];
    return temp;
  }
};
Stack.prototype.push = function(value){
  this.storage[this.numItems] = value;
  this.numItems++;
};
Stack.prototype.size = function(){
  return this.numItems;
};
