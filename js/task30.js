// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.

function isIsogram(str) {
	let count = 0;
	const arrStr = [...str.toLowerCase()]
	for (let i = 0; i < arrStr.length; i++) {
		for (let k = 0; k < arrStr.length; k++) {
			if (arrStr[i] == arrStr[k]) {
				count++
			}
		}
	}
	if (count > arrStr.length) {
		return false
	} else {
		return true
	}

}

console.log(isIsogram("Dermatoglyphics"));  // true
console.log(isIsogram("moOse"));            // false
