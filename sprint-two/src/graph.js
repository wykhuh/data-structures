var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodes[newNode] = new Node(newNode);
  if(Object.keys(this.nodes).length === 2){
    var firstNode = Object.keys(this.nodes)[0];
    this.addEdge(firstNode, newNode);
  }
  if(toNode !== undefined){
    this.nodes[toNode] = new Node(toNode);
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return (this.nodes[node] !== undefined);
};

Graph.prototype.removeNode = function(node){
  for(var other in this.nodes[node].connectedTo){
    this.removeEdge(node, other);
  }
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodes[fromNode].connectedTo[toNode] !== undefined;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].connectedTo[toNode] = this.nodes[toNode];
  this.nodes[toNode].connectedTo[fromNode] = this.nodes[fromNode];

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.getEdge(fromNode, toNode)) {
    delete this.nodes[fromNode].connectedTo[toNode];
    delete this.nodes[toNode].connectedTo[fromNode];
  }
  if(Object.keys(this.nodes[fromNode].connectedTo).length < 1) {
    this.removeNode(fromNode);
  }
  if(Object.keys(this.nodes[toNode].connectedTo).length < 1) {
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Node = function(value) {
  this.connectedTo = {};
  this.value = value;
};
