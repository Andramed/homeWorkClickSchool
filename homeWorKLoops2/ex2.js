

// 2. Define a procedure, findElement,
//that takes as its inputs a List
//and a value of any type, and
//outputs the index of the first
//element in the input list that
//matches the value.
//If there is no matching element,
//output -1.
//findElement([1,2,3],3) => 2


//findElement(['alpha','beta'],'gamma') => -1

function findElement(array, itemSearch) {
	// let itemPresent = array.includes(itemSearch);
	// if (itemPresent) {
		return array.indexOf(itemSearch)
	// } else {
		return array.indexOf(itemSearch);
	// }

}
console.log(findElement([1, 2, 3], 2));
console.log(findElement(['alpha','beta'],'gamma'));