// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {

	// let arr = [...iterable]

	// if (arr.length != 0) {
	// 	let rezArr = []
	// 	rezArr.push(arr[0])
	// 	let el = arr[0]

	// 	arr.forEach(element => {
	// 		if (element == el) { } else {
	// 			el = element
	// 			rezArr.push(element)
	// 		}
	// 	});

	// 	return rezArr
	// } else {
	// 	return arr
	// }

	return [...iterable].filter((a, i) => a !== iterable[i - 1])


}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));  // ['A','B','C','D','A','B']
console.log(uniqueInOrder('ABBCcAD'));          // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3]));        // [1,2,3]
console.log(uniqueInOrder([])); 
