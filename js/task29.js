function smash(words) {
	console.log(words)
	let str = "";

	words.forEach((item, index, array) => {
		if (index < array.length - 1) {
			str += `${item} `
		}
		else {
			str += `${item}`
		}
	})
	return str
};
let worlds = ['hello', 'world', 'this', 'is', 'great', '!'];
console.log(smash(worlds));