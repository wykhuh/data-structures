var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!Array.isArray(this._storage[i])){
    this._storage[i] = [];
  }
  this._storage[i].push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var l = 0; l < this._storage[i].length; l++){
    if(this._storage[i][l][0] === k){
      return this._storage[i][l][1];
    }
  }
  // this line is here just to pass spec
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for(var l = 0; l < this._storage[i].length; l++){
    var bucket = this._storage[i];
    if(bucket[l][0] === k){
      var temp = bucket[l];
      bucket.splice(l, 1);
      return temp
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
