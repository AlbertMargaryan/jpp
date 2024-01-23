/*
@name: chunk
@description: Generates an array by dividing its elements into groups of a specified size. In cases where the array cannot be evenly divided, the last segment will contain the remaining elements.
@arguments: array (Array): The array to process. [size=1] (Int): The length of each chunk
@return: array
*/

function chunk(arr, size = 1) {
  let chunked = [];
  for (let i = 0; arr.length > i; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}

/*
@name: compact
@description: Produces an array by eliminating all values that are considered falsey. Falsey values, such as false, null, 0, "", undefined, and NaN, are excluded from the resulting array.
@arguments: array (Array): The array to process.
@return: (Array) 
*/

function compact(arr) {
  const falsey = [false, null, 0, "", undefined, NaN];
  let index = 0

  falsey.forEach(e => {
    index++;
    if (!e) {
      index--;
      arr.splice(index, 1);
    }
  })

  return arr;
}

/*
@name: concat
@description: Generates a new array by combining the elements of the original array with any extra arrays and/or values.
@arguments: array (Array): The array to process.; [values] (...*) Any values to conactenate
@return: (Array) 
*/

function concat(...args) {
  var result = [];

  args.forEach(function (arg) {
    if (Array.isArray(arg)) {
      result = result.concat(arg);
    } else {
      result.push(arg);
    }
  });

  return result;
}

/*
@name: concat
@description: Forms an array comprising values from nested arrays that are not present in the other specified arrays.
@arguments: array (Array): The array to process.; [values] (...*) Any values to exclude
@return: (Array) 
*/

function difference(array, ...values) {
  const valuesSet = new Set(values.flat());

  const result = array.filter((item) => !valuesSet.has(item));

  return result;
}

/*
* @name: drop
* @description: Drops n elements from the begining
* @arguments: array (Array): The array to process.; number (Int) Number of elements to exclude
* @return: (Array) 
*/

function drop(arr , num = 1){
  return arr.slice(num);
}

/*
* @name: drop
* @description: Drops n elements from the end
* @arguments: array (Array): The array to process.; number (Int) Number of elements to exclude
* @return: (Array) 
*/

function dropRight(arr , num = 1){
  return arr.slice(0, arr.length-num);
}

/*
* @name: dropWhile
* @description: Drops n elements from the end until predicate
* @arguments: array (Array): The array to process.; predicate (Function, Object, Array) predicate
* @return: (Array) 
*/

function dropWhile(array, predicate) {
  let dropIndex = array.length;

  if (typeof predicate === 'object') {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const matches = Object.keys(predicate).every(key => item[key] === predicate[key]);

      if (!matches) {
        dropIndex = i;
        break;
      }
    }
  } else if (Array.isArray(predicate)) {
    for (let i = 0; i < array.length; i++) {
      if (predicate.includes(array[i])) {
        dropIndex = i + 1;
      } else {
        break;
      }
    }
  } else if (typeof predicate === 'function') {
    for (let i = 0; i < array.length; i++) {
      if (!predicate(array[i], i, array)) {
        dropIndex = i;
        break;
      }
    }
  } else {
    throw new TypeError('Predicate must be a function, an object, or an array');
  }

  return array.slice(dropIndex);
}

/*
* @name: fill
* @description: Fills the given segment by the given value, including start and end positions.
* @arguments: array (Array): The array to process.; value (*) Any value to change with; [start=0] (Number) Start position; [end=array.length] (Number) End position;
* @return: (Array) 
*/

function fill(array, value, start=0, end=array.length) {
  let result = array ? array : [];
  for(let i = 0; i < array.length; i++){
    if(i >= start && i <= end) {
      result[i] = (value);
    }
  }
  return result;
}

/*
* @name: head/first
* @description: Returns the first element of the array.
* @arguments: array (Array): The array to process.; 
* @return: (*) Anything 
*/

function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

function first(array) {
  return (array && array.length) ? array[0] : undefined;
}

