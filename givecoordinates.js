
function giveCordinates (x, y, orientation, instructioToMove, size ) {
	let cordinates = [],
		[sizeXMax, sizeYMax] = size;
	for(let  letter of instructioToMove) {
			if (letter === 'L') {
				orientation = turnLeft( orientation)
			} else if (letter === 'R') {
				orientation = turnRight(orientation);	
			} else if (letter == 'M') {
				[x, y] = moveForward(x, y, orientation)
			}		
	}
	if (x > sizeXMax || y > sizeYMax) {
		return `You are out of box`
	}
	cordinates.push(x, y, orientation);
	return cordinates
}
function turnLeft(orientation) {
			if (orientation == "N") {
				orientation = 'V'
			} else if (orientation == "V") {
				orientation = 'S'
			} else if (orientation == "S") {
				orientation = 'E'
			}  else if (orientation == "E") {
				orientation = 'N'
			} 
	return orientation
}
function turnRight(orientation) {
		if (orientation == "N") {
			orientation = 'E'
		} else if (orientation == "E") {
			orientation = 'S'
		} else if (orientation == "S") {
			orientation = 'V'
		}  else if (orientation == "V") {
			orientation = 'N'
		} 
	return orientation
}
function moveForward(x, y, orientation) {
	if (orientation == 'N') {
		y++
	} else if (orientation == 'S') {
		y--
	} else if (orientation == 'E') {
		x++
	} else if (orientation == 'V') {
		x--
	}
	return [x, y];
}
console.log(giveCordinates(1, 2, 'N', 'LMLMLMLMMMMMMMM', [5, 5]));