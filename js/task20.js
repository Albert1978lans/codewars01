// Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними.

// На выходе должны быть две заглавные буквы с точкой, разделяющей их.

function abbrevName(name) {
	return (name[0] + '.' + name[name.indexOf(' ') + 1]).toUpperCase()
}

console.log(abbrevName("Sam Harris"));
