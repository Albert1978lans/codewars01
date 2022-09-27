// В этом ката вы создадите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {

	return l.filter(elem => typeof (elem) === "number")

}

console.log(filter_list([1, 2, 'a', 'b']));