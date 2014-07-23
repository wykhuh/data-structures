var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var beg = 0;
  var end = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end += 1;
  };

  someInstance.dequeue = function(){
    if(beg < end){
      beg += 1;
      return storage[beg-1];
    }
  };

  someInstance.size = function(){
    return end-beg;
  };

  return someInstance;
};
