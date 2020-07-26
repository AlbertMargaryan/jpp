//this deletes all falsey types from the array
function compact(arr) {
  const falsey = [false, null, 0, "", undefined, NaN];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < falsey.length; j++) {
      if (arr[i] == falsey[j] || Number.isNaN(arr[i])) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}
console.log(compact([false, null, 0, "", undefined, NaN]));
