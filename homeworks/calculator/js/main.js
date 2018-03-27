//Числа
var numbers = document.getElementsByClassName('numbers');
//Операции
var operations = document.getElementsByClassName('operations');
//Очистка
var clear = document.getElementById('clear');
//Поле инпут
var entries = document.getElementById('entries');
//Кнопка равно
var calculate = document.getElementById('calculate');
var result;
var x = "";

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(event){ //Регистрируем обработчик события для целевого объекта (eventTarget)
		
		if (entries.value == result) {entries.value = ""; x = ""}
		entries.value += event.target.textContent; //При нажатии на клавишу значение прибавляется клавишу entries.value
	})
}

for (var i = 0; i < operations.length; i++) {
	operations[i].addEventListener("click", function(event){
		x += entries.value;
		entries.value = "";
		entries.value += event.target.textContent;
		console.log(event.target.textContent)
	})
}


clear.addEventListener("click", function(event){
		entries.value = "";
		x = "";
		console.log(event);
		console.log(event.target.textContent)
	})

entries.addEventListener("click", function(event){
		console.log(event);
		console.log(event.target.textContent)
	})

calculate.addEventListener("click", function(event){
		x += entries.value;
		result = eval(x);
		entries.value = result;
		console.log(result);
		console.log(event.target.textContent)
	})

