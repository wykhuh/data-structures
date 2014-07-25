var makeBinarySearchTree = function(value){
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;
  obj.insert = BinarySearchTreeMethods.insert;
  obj.contains = BinarySearchTreeMethods.contains;
  obj.depthFirstLog = BinarySearchTreeMethods.depthFirstLog;
  return obj;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value){
  if (value < this.value) {
    if (this.left === null) {
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTreeMethods.contains = function(value){
  if(value === this.value) {
    return true;
  } else if (value < this.value ){
    if (this.left === null) {
      return false;
    }
    return  this.left.contains(value);
  } else {
    if(this.right === null) {
      return false;
    }
    return this.right.contains(value);
  }

};
BinarySearchTreeMethods.depthFirstLog = function(cb){

  cb(this.value);

  if (this.right){
    this.right.depthFirstLog(cb);
  }
  if (this.left){
    this.left.depthFirstLog(cb);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
