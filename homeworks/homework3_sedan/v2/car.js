var sedan = document.getElementById('sedan');
var getCar = document.getElementById('getCar');
var position = 0;
var id;

//При наведении на элемент
getCar.onmouseover = function(){
	//console.log('over');
	if (id) clearInterval(id);
	id = setInterval(toDriveRight, 2);
}

//При снятии наведения
getCar.onmouseout = function(){
	//console.log('out');
	clearInterval(id);
	id = setInterval(toDriveLeft, 2);
}

//Движение в перед
function toDriveRight(){
	if(sedan.classList.contains('mirror')) sedan.classList.remove("mirror");
	if (position == 450) {
		clearInterval(id);
	}else{
	position = position + 1;//Можно написать position = ++;
	sedan.style.left = position + 'px';
	}
}

//Движение назад
function toDriveLeft(){
	if(!sedan.classList.contains('mirror')) sedan.classList.add("mirror");
	if (position == 0) {
		clearInterval(id);
		sedan.classList.remove('mirror');
		}else{
	position --;
	sedan.style.left = position + 'px';
	}
}