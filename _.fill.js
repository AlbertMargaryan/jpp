function fill(array, value, start=0, end=array.length) {
  let finalArr = []
  for(let i = 0; i < array.length; i++){
    if(i >= start && i <= end) {
      finalArr.push(value)
    }
    else if(i <= start) {
      finalArr.push(array[i])
    }
    else if(i >= end) {
      finalArr.push(array[i])
    }
  }
  return finalArr
}
console.log(fill([1,2,3,4,5],5, 2, 3))
