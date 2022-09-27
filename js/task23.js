function sumTwoSmallestNumbers(numbers) {

	let editetArray = numbers.sort((a, b) => a - b)
	return editetArray[0] + editetArray[1]

}

console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
