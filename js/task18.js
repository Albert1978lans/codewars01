// дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

function highAndLow(numbers) {
	let numArr = numbers.split(' ');   // преобразование строки чисел в массив чисел
	return `${Math.max(...numArr)} ${Math.min(...numArr)}`

}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
