// Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

function descendingOrder(n) {

	console.log(n);

	let rez = Array.from(`${n}`)
	console.log(rez);
	rez.sort((a, b) => b - a);
	console.log(rez);
	rez.join('')
	console.log(rez.join(''));
	console.log(+rez.join(''));



	// return +Array.from(`${n}`).sort((a, b) => b - a).join('')

}

console.log(descendingOrder(4209858))