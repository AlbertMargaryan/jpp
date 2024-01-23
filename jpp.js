function chunk(arr, size = 1) {
  let chunked = [];
  for (let i = 0; arr.length > i; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

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

function difference(arr , values){
  let fin = [];
  let n = arr.length > values.length ? arr:values

  for (let i = 0; i < n.length; i++) {
    if(!values.includes(arr[i])){
      fin.push(arr[i])
    }
  }
  return fin;
}
console.log(difference([1,0,3],[1,2]))

function drop(arr , num = 1){
  arr = arr.slice(num);
  return arr
}
console.log(drop([1,2,3]))

function dropRight(arr , num = 1){
  arr = arr.slice(0, arr.length-num);
  return arr
}
console.log(drop([1,2,3,4,5,6,4], 4))

function fill(array, value, start=0, end=array.length) {
  let finalArr = []
  for(let i = 0; i < array.length; i++){
    if(i >= start && i <= end) {
      finalArr.push(value)
    }
  }
}
console.log(fill([1,2,3,4,5],5))

function flatten(array) {
  return array
}

console.log(flatten([1,2,3]))

function head(array) {
  return array[0];
}

console.log([1,2,3])
console.log([])