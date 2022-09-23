// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не...

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function friend(friends) {
	return friends.filter(name => name.length == 4 && name.search(/\d/) == -1)
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friend(["Love", "Your", "Face", "1"]))