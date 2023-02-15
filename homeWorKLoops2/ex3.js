// 3. Write a program that print the contents
// of 2 dimensional array
// Console output should look like this :
// John
// 1940
// Paul
// 1942
// George
// 1943
// Ringo
// 1940


let beatles  = [
    ['John', 1940],
    ['Paul', 1942],
    ['George', 1943],
    ['Ringo', 1940]
]

function printNameYear() {
	
	for (const array of beatles) {
		for(const nameYear of array) {
			console.log(nameYear);
		}
	}
}
printNameYear();