
// Создайте функцию с двумя аргументами, которая будет возвращать массив первых n кратных x.

function countBy(x, n) {
	let z = [];
	for (let i = 1; i <= n; i++) {
		z.push(x * i)
	}
	return z;
}

console.log(countBy(2, 5))