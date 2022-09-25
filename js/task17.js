//Возвести в квадрат каждую цифру числа и соединить их
// 516 => 25136

function squareDigits(num) {
	// Array.from(`${num}`) -- преобразование числа в массив
	// Array.from(`${num}`).map(a => a * a) -- возведение каждого элемента массива в квадрат

	return +(Array.from(`${num}`).map(a => a * a).join(''))
}

console.log(squareDigits(3212));