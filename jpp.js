/* ARRAYS */

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


/*
* @name: flatten
* @description: Recursively and fully flattens array.
* @arguments: array (Array): The array to process.; 
* @return: (Array) Returns the new flattened to one level array 
*/


function flatten(array) {
    let result = []
    array.forEach((e) => {
      if (Array.isArray(e)) {
        result.push(flatten(e));
      }
      else {
        result.push(e);
      }
    })
    return result;
}

/*
* @name: flatten
* @description: Flatens by one depth
* @arguments: array (Array): The array to process.; 
* @return: (Array) Returns the new flattened by one level 
*/

function flattenOne(array) {
    let result = []
    array.forEach((e) => {
      if (typeof(e) === 'object') {
        e.forEach((element) => {
          result.push(element);
        })
      }
      else {
        result.push(e);
      }
    })
    return result;  
}


/*
* @name: flattenDepth
* @description: Flattens array to a specific depth
* @arguments: array (Array): The array to process.
*             depth (number): The maximum recursion depth.
* @return: (Array) Returns the new flattened array.
*/

function flattenDepth(array, depth) {
  let result = [];

  function flattenRecursively(arr, currentDepth) {
    arr.forEach((element) => {
      if (Array.isArray(element) && currentDepth <= depth) {
        flattenRecursively(element, currentDepth + 1);
      } else {
        result.push(element);
      }
    });
  }

  flattenRecursively(array, 1);
  return result;
}

/*
* @name: sumArray
* @description: Returns the sum of all numbers in the array, at any level of nesting.
* @arguments: array (Array): The array to process.
* @return: (number) Sum of all numbers in the array.
*/

function sumArray(array) {
    result = 0
    array.forEach((e) => {
      if (Array.isArray(e)) {
        result += sumArray(e);
      }
      else if (typeof(e) === 'number') {
        result += e;
      }
    });

    return result;
}

/*
* @name: fromPairs
* @description: Returns an object containing the pairs from the given array
* @arguments: array (Array): The array to be converted into object.
* @return: (Object) the new Object.
*/

function fromPairs(array) {
    result = {};
    array.forEach((e) => {
      result[e[0]] = e[1]
    });
    return result;
}

/*
* @name: indexOf
* @description: Returns index of a value starting from the [fromIndex] position (default 0)
* @arguments: array (Array): The array to be searched in.
*             value (*): Any value in array to be found
*             [fromIndex=0] (number): Position at which the search begins
* @return: (number) the index.
*/

function indexOf(array, value, fromIndex=0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return undefined;
}

/*
* @name: indexesOf
* @description: Returns all indexes of a value starting from the [fromIndex] position (default 0)
* @arguments: array (Array): The array to be searched in.
*             value (*): Any value in array to be found
*             [fromIndex=0] (number): Position at which the search begins
* @return: (Array) the processed array.
*/

function indexesOf(array, value, fromIndex=0) {
  let result = []
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) {
      result.push(i);
    }
  }
  return result;
}

/*
* @name: initial
* @description: Returns the array without its last element
* @arguments: array (Array): The array to be processed.
* @return: (Array) the new array.
*/

function initial(array) {
  return array.slice(0, array.length-1);
}

/*
* @name: intersect
* @description: Creastes a new array of elements intersecting in all arrays
* @arguments: ...arrays (Arrays): The arrays to be processed.
* @return: (Array) the new array.
*/

function intersect(...arrays) {
  result = arrays ? arrays[0] : [];
  for (let i = 1; i < arrays.length; i++) {
      result = result.filter(Set.prototype.has, new Set(arrays[i]));
  }
  return Array.from(new Set(result));
}

/*
* @name: join
* @description: Joins elements of array by separator, like in native JS
* @arguments: array (Array): The arrays to be processed.
*             separator (*): Any separator that can be used for native JS Array.prototypes.join
* @return: (String) the processed string.
*/

function join(array, separator) {
    return array == null ? '' : array.join(separator);
}


/*
* @name: last
* @description: Returns the last element of the array
* @arguments: array (Array): The arrays to be processed.
* @return: (*) Any last element of an array.
*/

function last(array) {
    return array == null ? undefined : array[array.length-1];
}

/*
* @name: lastIndexOf
* @description: The same function as indexOf, but it iterates from right to left.
* @arguments: array (Array): The array to be searched in.
*             value (*): Any value in array to be found
*             [fromIndex=0] (number): Position at which the search begins
* @return: (number) the index.
*/

function lastIndexOf(array, value, fromIndex=array.length-1) {
  for (let i = fromIndex; i === 0; i--){
    if (array[i] === value) {
      return i;
    }
  }
  return undefined;
}

/*
* @name: last
* @description: Returns the n-th element of the array. If n is negative, the nth element from the end is returned.
* @arguments: array (Array): The arrays to be processed.
*             n (number): The index of element to be found.
* @return: (*) Returns the nth element of an array.
*/

function nth(array, n=0) {
  return n >= 0 ? array[n] : array[array.length+n];
}

/*
* @name: pull
* @description: Removes all given values from array
* @arguments: array (Array): The array to be processed.
*             ...values (*): Any values to be removed.
* @return: (Array) The new array.
*/

function pull(array, ...values) {
  return !array ? undefined : array.filter(x => !values.includes(x));
}
