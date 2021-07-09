/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var nuevoSueldo;

	sueldo = parseFloat(document.getElementById("txtIdImporte").value);
	aumento = sueldo*0.75;
	nuevoSueldo = aumento

	document.getElementById("txtIdResultado").value = nuevoSueldo;


}
