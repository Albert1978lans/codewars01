// Ваша задача — написать функцию, которая возвращает сумму следующих рядов до n-го члена (параметра).

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {

	// for (var s = 0, i = 0; i < n; i++) {
	// 	s += 1 / (1 + i * 3)
	// }


	let sum = 0;
	let dnm = 1
	for (let i = 0; i < n; i++) {

		sum += 1 / dnm
		dnm += 3
	}
	return sum.toFixed(2)
}

console.log(SeriesSum(1));  // 1.00
console.log(SeriesSum(2));  // 1.25
console.log(SeriesSum(3));  // 1.39
console.log(SeriesSum(4));  // 1.49