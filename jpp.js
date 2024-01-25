/* ARRAYS */


/*
* @name: array
* @description: Makes an array out of all values given
* @arguments: ...values (*): Any values to be inserted
* @return: (Array) The new array
*/

function array(...values) {
  return values;
}

/*
@name: chunk
@description: Generates an array by dividing its elements into groups of a specified size. In cases where the array cannot be evenly divided, the last segment will contain the remaining elements.
@arguments: array (Array): The array to process. [size=1] (Int): The length of each chunk
@return: (Array)
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
        result.push(...flatten(e));
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
      if (Array.isArray(e)) {
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

/*
* @name: pullAll
* @description: Removes all given values from array given an array of values
* @arguments: array (Array): The array to be processed.
*             values (Array): Any values to be removed in array.
* @return: (Array) The new array.
*/

function pullAll(array, values) {
  return !array ? undefined : array.filter(x => !values.includes(x));
}

/*
* @name: pullAt
* @description: Removes all given values from array given an array of indexes
* @arguments: array (Array): The array to be processed.
*             values (Array): Any values to be removed in array.
* @return: (Array) The new array.
*/

function pullAt(array, ...indexes) {
  flatten(indexes).sort((a, b) => b - a).forEach((i) => {
    array.splice(i, 1);
  });
  return array;
}

/*
* @name: sort
* @description: Sorts an array in descending order
* @arguments: array (Array): The array to be processed.
* @return: (Array) The new array.
*/

function reverseSort(array) {
  return array.sort((a, b) => b - a);
}

/*
* @name: sort
* @description: Sorts an array in ascedning order
* @arguments: array (Array): The array to be processed.
* @return: (Array) The new array.
*/

function sort(array) {
  return array.sort((a, b) => a - b);
}

/*
* @name: sortedIndex
* @description: Finds the least place to insert value so that the array remains sorted
* @arguments: array (Array): The array to be processed.
*             value (number): The value that needs to be inserted
* @return: (number) The index to be inserted at.
*/

function sortedIndex(array, value) {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

/*
* @name: sortedIndex
* @description: Finds the highest place to insert value so that the array remains sorted
* @arguments: array (Array): The array to be processed.
*             value (number): The value that needs to be inserted
* @return: (number) The index to be inserted at.
*/

function sortedIndexLast(array, value) {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

/*
* @name: sortedUnique
* @description: Leaves only unique elements of an array. Optimized and works for sorted arrays only!
* @arguments: array (Array): The array to be processed.
* @return: (Array) The processed array.
*/

function sortedUnique(array) {
  for (let i = array.length-1; i > 0; i--) {
    if (array[i] === array[i-1]) {
      array.splice(i, 1);
    }
  }
  return array;
}

/*
* @name: tail
* @description: Returns all but first element of an array
* @arguments: array (Array): The array to be processed.
* @return: (Array) The processed array.
*/

function tail(array) {
  return array ? array.slice(1) : undefined;
}

/*
* @name: take
* @description: Returns an array of n elements taken from the front
* @arguments: array (Array): The array to be processed.
*             n (number): number of elements to be taken
* @return: (Array) The processed array.
*/

function take(array, n=1) {
  return array.splice(0, n);
}

/*
* @name: take
* @description: Same as take() but takes elements from end
* @arguments: array (Array): The array to be processed.
*             n (number): number of elements to be taken
* @return: (Array) The processed array.
*/

function takeRight(array, n=1) {
  return array.splice(array.length-n, n);
}

/*
* @name: union
* @description: Makes union array of all unique arrays provided
* @arguments: arrays (...Array): The arrays to be processed.
* @return: (Array) The processed array.
*/

function union(...arrays) {
  const result = new Set();

  arrays.forEach((array) => {
    array.forEach((element) => {
      result.add(element);
    });
  });

  return Array.from(result);
}

/*
* @name: sortedUnique
* @description: Leaves only unique elements of an array.
* @arguments: array (Array): The array to be processed.
* @return: (Array) The processed array.
*/

function unique(array) {
  return Array.from(new Set(array));
}

/*
* @name: unzip
* @description: This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.
* @arguments: array (Array): The array to be processed.
* @return: (Array) The processed array.
*/


function unzip(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  const length = array[0].length;
  const result = Array.from({ length }, (_, index) =>
    array.map(subarray => subarray[index])
  );

  return result;
}

/*
* @name: xor
* @description: Keeps only those elements that occure once in all arrays.
* @arguments: arrays (...Array): The arrays to be processed.
* @return: (Array) The processed array.
*/

function xor(...arrays) {
  array = flatten(arrays)
  return array.filter((value, index, arr) => arr.indexOf(value) === arr.lastIndexOf(value));
}

/*
* @name: xorOdd
* @description: Keeps only those elements that occure odd times in all arrays.
* @arguments: arrays (...Array): The arrays to be processed.
* @return: (Array) The processed array.
*/

function xorOdd(...arrays) {
  const frequencyMap = new Map();

  arrays.forEach(arr => {
    const uniqueElements = new Set(arr);
    
    uniqueElements.forEach(element => {
      frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    });
  });

  const result = arrays.flat().filter(element => frequencyMap.get(element) % 2 === 1);

  return unique(result);
}

/*
* @name: zip
* @description: Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
* @arguments: arrays (...Array): The arrays to be processed.
* @return: (Array) The processed array.
*/

function zip(...arrays) {
  const maxLength = Math.max(...arrays.map(arr => arr.length));

  return Array.from({ length: maxLength }, (_, index) => arrays.map(arr => arr[index]));
}

/*
* @name: zip
* @description: This method is like _.fromPairs except that it accepts two arrays, one of property identifiers and one of corresponding values.
* @arguments: keys (Array): The array of keys.
*             values (Array): The array of corresponding values
* @return: (Object) The new Object.
*/

function zipObject(keys, values) {
    result = {};
    length = keys.length > values.length ? keys.length : values.length;
    for (let i = 0; i < length; i++) {
      result[keys[i]] = values[i];
    }
    return result;
}
