function fibs(num) {
  // set a model array called result
  var result = [0, 1];

  for (var i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result.slice(0, num);
}
function fibsRec(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    var prevFibs = fibsRec(num - 1);
    prevFibs.push(
      prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]
    );
    return prevFibs;
  }
}

console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
