var makeQueue = function(){
  var queue = {};
  queue.beg = 0;
  queue.end = 0;
  queue.storage = {};
  queue.enqueue = queueMethods.enqueue;
  queue.dequeue = queueMethods.dequeue;
  queue.size = queueMethods.size;

  return queue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.end] = value;
    this.end += 1;
  },
  dequeue: function(){
    if(this.beg < this.end){
      this.beg += 1;
      return this.storage[this.beg-1];
    } else {
      throw {error:'whoa man!'};
    }
  },
  size: function(){
    return this.end - this.beg;
  }
};



