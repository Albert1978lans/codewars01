function bmi(weight, height) {
	let rez = weight / Math.pow(height, 2)

	if (rez <= 18.5) {
		return "Underweight"
	} else if (rez <= 25.5) {
		return "Normal"
	} else if (rez <= 30.0) {
		return "Overweight"
	} else {
		return "Obese"
	}
}

console.log(bmi(80, 1.80))

// Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост2).

// (bmi = weight / height2)

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"