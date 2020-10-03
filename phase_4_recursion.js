/* 
range(start, end) - receives a start and end value, returns an array from start up to end
*/
function range(start, end) {
  if (start === end) {
    return [];
  }

  let r = range(start, end - 1);
  r.push(end - 1);
  return r;
}

console.log(range(1, 10));
