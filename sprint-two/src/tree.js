var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === undefined) {
    this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var tree = this;
  var found = false;
  var search = function(tree, target, result) {
    //debugger;
    if(tree.value === target){
      found = true;
      return;
    } else if (tree.children === undefined) {
      return;
    } else {
      for(var i=0; i <tree.children.length; i++) {
        search(tree.children[i], target, found);
      }
    }
    return found;
  };

  return search(tree, target, found);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
