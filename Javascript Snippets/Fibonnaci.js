function fibonacciGenerator(n) {
  var output = [];
  var a = 0;
  var b = 1;
  var c = 0;
  
  for (var i = 0; i < n; i++) {
    output.push(a);
    c = a + b;
    a = b;
    b = c;
  }
  return output;
}

console.log(fibonacciGenerator(1));
