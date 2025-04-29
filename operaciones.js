function sumar(){
	const n1 = document.getElementById('num1').value;
	const n2 = document.getElementById('num2').value;
	//parseInt parseFloat
	var restul=parseInt(n1)+parseInt(n2);
	//alert(restul);
	document.getElementById("r").innerHTML=restul;
}

function restar(){
	const n1 = document.getElementById('num1').value;
	const n2 = document.getElementById('num2').value;
	//parseInt parseFloat
	var restul=parseFloat(n1)-parseFloat(n2);
	document.getElementById("r").innerHTML=restul;
	//alert(restul);
}

function multiplicar(){
	const n1 = document.getElementById('num1').value;
	const n2 = document.getElementById('num2').value;
	//parseInt parseFloat
	var restul=parseFloat(n1)*parseFloat(n2);
	document.getElementById("r").innerHTML=restul;
	//alert(restul);
}

function dividir(){
	const n1 = document.getElementById('num1').value;
	const n2 = document.getElementById('num2').value;
	//parseInt parseFloat
	var restul=parseFloat(n1)/parseFloat(n2);
	document.getElementById("r").innerHTML=restul;
	//alert(restul);
}