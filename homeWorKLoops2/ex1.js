// 1. Define a procedure union
// that takes as input 2 arrays of
// numbers and returns a set of
// numbers from both lists.
// !!! a set is an array that
//contains unique elements
// union([1, 2], [2, 3]) => [1, 2, 3]
// union([1, 1], [2, 3, 4, 2]) => [1, 2, 3, 4]


function union(array1, array2) {
	let newArray = [];

	for(const num of array1) {
		if (!newArray.includes(num)) {
			newArray.push(num);
		}
	}
	for(const num of array2) {
		if (!newArray.includes(num)) {
			newArray.push(num);
		}
	}
console.log(newArray);
}
  
 union([1, 2], [2, 3]) 
union([1, 1], [2, 3, 4, 2]) 