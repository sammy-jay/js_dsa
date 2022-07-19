const inp = ["35", "21", "C", "D", "+", "15", "23", "C", "D", "D", "+", "+"];

function returnAns(arr) {
  const result = [];
  for (let elem of arr) {
    if (!isNaN(parseInt(elem))) {
      result.push(parseInt(elem));
    } else if (elem == "C") {
      result.pop();
    } else if (elem == "D") {
      let last = result.slice(-1)[0];
      result.push(last * 2);
    } else if (elem == "+") {
      let lastTwoSum = result[result.length - 1] + result[result.length - 2];
      result.push(lastTwoSum);
    }
  }
  return result.reduce((prev, curr) => prev + curr, 0);
}

console.log(returnAns(inp));
