//arr: array , size: size of chunks
//repl.it code : https://repl.it/@AlbertMargaryan/IllegalCriminalConfiguration#index.js
function  chunk(arr , size = 1){
  let chunked = [];
  for(let i = 0; arr.length > i; i += size){
    
    chunked.push(arr.slice(i , i+size))
  }
  return chunked;
}
console.log(chunk([1,2,3,4,5,6,7,8,9], 2))