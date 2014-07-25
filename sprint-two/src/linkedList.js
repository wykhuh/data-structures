var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null){
      var node = makeNode(value);
      list.head = node;
      list.tail = node;
    } else {
      var node = makeNode(value);
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var tem = list.head.value;
    list.head =  list.head.next;
    return tem;
  };

  list.contains = function(target){
    var result = false;
    var current = list.head;
    while(current){
      if(target === current.value){
        result = true;
      }
      current = current.next;
    }
    return result;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
