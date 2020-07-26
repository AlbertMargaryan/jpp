function drop(arr , num = 1){
  arr = arr.slice(0, arr.length-num);
  return arr
}
console.log(drop([1,2,3,4,5,6,4], 4))
