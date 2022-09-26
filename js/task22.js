// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending) {

	console.log(str.indexOf(ending, str.length - ending.length));

	return (str.indexOf(ending, str.length - ending.length) >= 0) ? true : false;



}

console.log(solution('abcde', 'cde'));
console.log(solution('abcde', 'abc'));
