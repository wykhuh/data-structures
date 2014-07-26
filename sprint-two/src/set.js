var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  return (this._storage[item] !== undefined);
};

setPrototype.remove = function(item){
  if(this._storage[item] !== undefined){
    //set a temporary variable to store the item
    var temp = this._storage[item];
    delete this._storage[item]; //delete the item
    //return temp variable
    return temp;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
