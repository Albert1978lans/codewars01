// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.

// Примечание. Пустые массивы должны возвращать 0.


function findAverage(array) {
	if (array.length == 0) {
		return 0;
	} else {
		return array.reduce((sum, a) => sum += a) / array.length
	}

}

console.log(findAverage([1, 2, 3, 4]))