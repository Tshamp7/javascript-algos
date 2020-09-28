/*
Array#uniq - returns a new array containing each individual element of the original 
array only once (creating all unique elements)
the elements should be in the order in which they first appear in the original array
should not mutate the original array
*/

Array.prototype.uniq = function () {
  const output = [];

  this.forEach((element) => {
    if (!output.includes(element)) {
      output.push(element);
    }
  });
  return output;
};

testArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(testArr.uniq()); //-> [1,2,3,4,5]

/* 
Array#twoSum - returns an array of position pairs where the elements sum to zero
*/

Array.prototype.twoSum = function () {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (i < j) {
        if (this[i] + this[j] === 0) {
          output.push([i, j]);
        }
      }
    }
  }
  return output;
};

twoSumInput = [1, -1, 2, 3, -3, -2]; //-> [[0,1], [3,4], [2, 5]]
console.log(twoSumInput.twoSum());

/*
Array#transpose - where we have a two-dimensional array representing a matrix. 
returns the transpose
*/

Array.prototype.transpose = function () {
  const outer = [];

  for (let i = 0; i < this.length; i++) {
    const inner = [];
    this.forEach((ele) => {
      inner.push(ele[i]);
    });
    outer.push(inner);
  }
  return outer;
};

transposeInput = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

console.log(transposeInput.transpose()); //=> [[1,1,1],[2,2,2],[3,3,3]]
