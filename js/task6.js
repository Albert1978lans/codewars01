function fakeBin(x) {
	return x.split('').map(num => (num < 5) ? num = 0 : num = 1).join('')
	// return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

console.log(fakeBin('45385593107843568'))

// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». Верните полученную строку.