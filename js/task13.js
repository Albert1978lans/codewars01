
// Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.

function oddOrEven(array) {
	if (array.length == 0) {
		array = [0]
	}
	if (array.reduce((sum, a) => sum += a) % 2 == 0) {
		return 'even'
	} else {
		return 'odd'
	}
}

console.log(oddOrEven([]))

