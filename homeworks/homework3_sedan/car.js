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

function toDriveRight(){
	if (position == 450) {
		clearInterval(id);
	}else{
	sedan.src="image/sedan.png";
	position = position + 1;//Можно написать position = ++;
	sedan.style.left = position + 'px';
	}
}

function toDriveLeft(){
	if (position == 0) {
		clearInterval(id);
		sedan.src="image/sedan.png";
		}else{
	sedan.src="image/nades.png";
	position --;
	sedan.style.left = position + 'px';
	}
}