/* 
Array#myEach(callback) - receives a callback function and executes the callback 
for each element in the array
Note that JavaScript's forEach function has no return value (returns undefined)
*/

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

//helper function for testing
function plusOne(thing) {
  console.log(thing + 1);
}

myEachInput = [1, 2, 3, 4, 5];
console.log(myEachInput.myEach(plusOne)); // -> 2 /n 3 /n 4 /n 5 /n 6

/* 
Array#myMap(callback) - receives a callback function, returns a new array of the 
results of calling the callback function on each element of the array
should use myEach and a closure.
*/

Array.prototype.myMap = function (callback) {
  const output = [];

  this.myEach((ele) => {
    output.push(callback(ele));
  });
  return output;
};

function plusTwo(item) {
  return item + 2;
}

myMapInput = [2, 3, 4, 5, 6];
console.log(myMapInput.myMap(plusTwo));

/*
Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a 
callback function, and optional initial value, returns an accumulator by applying 
the callback function to each element and the result of the last invocation of 
the callback (or initial value if supplied)

initialValue is optional and should default to the first element of the array if not provided
*/

Array.prototype.myReduce = function (callback, initialValue) {
  let startingVal = initialValue || this.shift();

  this.myEach((ele) => (startingVal = callback(startingVal, ele)));

  return startingVal;
};

arr = [1, 2, 3, 4, 5];

console.log(
  arr.myReduce(function (acc, el) {
    return acc + el;
  })
);
