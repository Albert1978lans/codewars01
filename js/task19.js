function isTriangle(a, b, c) {
	return a + b > c && b + c > a && c + a > b ? true : false;

	// return a + b > c && a + c > b && c + b > a;
}

console.log(isTriangle(7, 2, 2));
