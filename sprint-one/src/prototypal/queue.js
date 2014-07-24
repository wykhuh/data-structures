var makeQueue = function() {
  var myQueue = Object.create(queueMethods);
  myQueue.begin = 0;
  myQueue.end = 0;
  myQueue.storage = {};
  return myQueue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.end] = value;
    this.end++;
  },
  dequeue: function(){
    if (this.end > this.begin) {
      var temp = this.storage[this.begin];
      delete this.storage[this.begin];
      this.begin++;
      return temp;
    }
  },
  size: function(){
    return this.end - this.begin;
  }
};


