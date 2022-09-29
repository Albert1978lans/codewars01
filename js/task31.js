// Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.

// Всегда будет только одно целое число, которое встречается нечетное количество раз.

function findOdd(A) {

	for (let i = 0; i < A.length; i++) {
		let count = 0
		for (let k = 0; k < A.length; k++) {
			if (A[i] == A[k]) {
				count++
			}
		}
		if (count % 2 == 1) {
			return A[i]
		}
	}

	// return arr.find((item, index) => arr.filter(el => el == item).length % 2)

}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));  //  5
console.log(findOdd([10]))                                                        // 10