/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1)
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2)
	resultado = num1 + num2;
	
	alert ("la suma es " + resultado)
}

function restar()
{let num1;
	//num1 = parseInt(num1)
	let num2;
	//num2 = parseInt(num2)
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1)
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2)
	resultado = num1 - num2;
	
	alert ("la resta es " + resultado)
	
}

function multiplicar()
{ let num1;
	//num1 = parseInt(num1)
	let num2;
	//num2 = parseInt(num2)
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1)
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2)
	resultado = num1 * num2;
	
	alert ("la multiplicacion es " + resultado)
	
}

function dividir()
{let num1;
	
	let num2;
	
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1)
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2)
	resultado = num1 / num2;
	
	alert ("la division es " + resultado)
	
}
