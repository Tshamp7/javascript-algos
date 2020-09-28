/* 
Array#bubbleSort - receives an array, returns a sorted array by implementing 
bubble sort sorting algorithm
*/

Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }
  return this;
};

bubbleArr = [5, 8, 3, 1, 5, 7, 9, 6, 4, 3, 5, 7];

console.log(bubbleArr.bubbleSort()); //-> [ 1, 3, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9 ]

/* 
String#substrings - receives a string, returns an array of all substrings
*/

String.prototype.substrings = function () {
  const output = [];
  let sub = "";

  for (let i = 0; i < this.length; i++) {
    if (this[i] != " ") {
      sub += this[i];
    } else {
      output.push(sub);
      sub = "";
    }
  }
  output.push(sub);
  return output;
};

console.log("I love this dog!".substrings());
