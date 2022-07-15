class DirectedGraph {
  constructor() {
    this.edges = {};
  }

  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  addEdge(origVertex, destVertex, weight = 0) {
    this.edges[origVertex][destVertex] = weight;
  }

  removeEdge(origVertex, destVertex) {
    if (
      this.edges[origVertex] &&
      this.edges[origVertex][destVertex] != undefined
    ) {
      delete this.edges[origVertex][destVertex];
    }
  }

  removeVertex(vertex) {
    for (let adjVertex in this.edges[vertex]) {
      this.removeEdge(adjVertex, vertex);
    }
    delete this.edges[vertex];
  }

  topologicalSortUtil(v, visited, stack) {
    visited.add(v);

    for (let item in this.edges[v]) {
      if (visited.has(item) == false) {
        this.topologicalSortUtil(item, visited, stack);
      }
    }
    stack.unshift(v);
  }

  topologicalSort() {
    let visited = {},
      stack = [];

    for (let item in this.edges) {
      if (visited.has(item) == false) {
        this.topologicalSortUtil(item, visited, stack);
      }
    }
    return stack;
  }
}

const graph1 = new DirectedGraph();

graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addEdge("A", "B", 1);
graph1.addEdge("B", "C", 2);
graph1.addEdge("C", "A", 3);
