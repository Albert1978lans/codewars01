function accum(s) {

	let sArr = [...s];
	let rezArr = [];
	let count = 1;

	for (let i = 0; i < sArr.length; i++) {

		for (let k = 0; k < count; k++) {
			(k == 0) ? rezArr.push(sArr[i].toUpperCase()) : rezArr.push(sArr[i].toLowerCase());
		}

		if (i != sArr.length - 1) {
			rezArr.push('-')
		}

		count++
	}

	return rezArr.join('')
}

console.log(accum("ZpglnRxqenU"));   // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("abCd"));          //   "A-Bb-Ccc-Dddd"
