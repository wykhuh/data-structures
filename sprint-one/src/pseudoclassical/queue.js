var Queue = function() {
  this.begin = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
    this.storage[this.end] = value;
    this.end++;
};

Queue.prototype.dequeue = function(){
    if (this.end > this.begin) {
      var temp = this.storage[this.begin];
      delete this.storage[this.begin];
      this.begin++;
      return temp;
    }
};
Queue.prototype.size = function(){
    return this.end - this.begin;
};
