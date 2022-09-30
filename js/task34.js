// Вы получаете массив чисел, возвращаете сумму всех положительных.

// Пример [1,-4,7,12] => 1 + 7 + 12 = 20

// Примечание: если суммировать нечего, сумма по умолчанию равна 0.

function positiveSum(arr) {
	return arr.filter(a => a > 0).reduce((sum, num) => sum += num, 0)

	// return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum([1, 2, 3, 4, 5]));  // 15
console.log(positiveSum([1, -2, 3, 4, 5]))  // 13
console.log(positiveSum([]))                // 0