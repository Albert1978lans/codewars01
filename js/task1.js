function squareSum(numbers) {
	let sum = 0
	numbers.forEach(element => {
		sum += element * element
	});
	return sum
}
console.log(squareSum([0, 3, 4, 5]))