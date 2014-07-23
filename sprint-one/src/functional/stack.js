var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[length] = value;
    length +=1;
  };

  someInstance.pop = function(){
    if(length > 0){
      var result = storage[length-1];
      storage[length] = undefined;
      length -= 1;
      return result;
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};