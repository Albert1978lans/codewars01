function betterThanAverage(classPoints, yourPoints) {
	classPoints.push(yourPoints)
	let rez = classPoints.reduce((sum, a) => sum += a, 0)
	return rez / classPoints.length < yourPoints
}

console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))