class UndirectedGraph {
  constructor() {
    this.edges = {};
  }

  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  addEdge(vertex1, vertex2, weight = 0) {
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }

  removeEdge(vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined) {
      delete this.edges[vertex1][vertex2];
    }
    if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined) {
      delete this.edges[vertex2][vertex1];
    }
  }

  removeVertex(vertex) {
    for (let adjVertex in this.edges[vertex]) {
      this.removeEdge(adjVertex, vertex);
    }
    delete this.edges[vertex];
  }

  traverseBFS(vertex, fn) {
    let queue = [];
    let visited = {};
    queue.push(vertex);

    while (queue.length) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        fn(vertex);
        for (let adjVertex in this.edges[vertex]) {
          queue.push(adjVertex);
        }
      }
    }
  }
  traverseDFS(vertex, fn) {
    let stack = [];
    let visited = {};
    stack.push(vertex);

    while (stack.length) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        fn(vertex);
        for (let adjVertex in this.edges[vertex]) {
          stack.push(adjVertex);
        }
      }
    }
  }
}

const graph1 = new UndirectedGraph();

graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1, 2, 10);
console.log(graph1.edges);

graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addVertex(6);
graph1.addVertex(7);
graph1.addEdge(2, 3, 8);
graph1.addEdge(3, 4, 10);
graph1.addEdge(4, 5, 100);
graph1.addEdge(1, 5, 88);
graph1.addEdge(6, 5, 16);
graph1.addEdge(6, 1, 416);
// graph1.addEdge(2, 7, 416);
graph1.addEdge(4, 6, 416);
console.log(graph1.edges);

// graph1.removeVertex(1);
// graph1.removeEdge(3, 4);
// console.log(graph1.edges);

graph1.traverseBFS(1, (vertex) => console.log(vertex));
graph1.traverseDFS(1, (vertex) => console.log(vertex));
