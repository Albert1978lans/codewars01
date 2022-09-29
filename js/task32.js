// Учитывая массив целых чисел, удалите наименьшее значение. Не изменяйте исходный массив/список. Если есть несколько элементов с одинаковым значением, удалите элемент с более низким индексом. Если вы получили пустой массив/список, верните пустой массив/список.


function removeSmallest(numbers) {
	let index = numbers.indexOf(Math.min(...numbers));
	const rez = []
	for (let i = 0; i < numbers.length; i++) {
		if (i != index) {
			rez.push(numbers[i])
		}
	}
	return rez
}

console.log(removeSmallest([5, 3, 2, 1, 4]));   // [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1]))    // [2, 2, 2, 1]