/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largo;
	var ancho;
	var sumalargoyancho;
	var totalrectangulo;
	var totaldealambre;


	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	sumalargoyancho=(largo+ancho);

	totalrectangulo=(sumalargoyancho*2);

	totaldealambre=(totalrectangulo*3);

	alert("se necesitara "+totaldealambre+" cantidad de alambre");


}
function Circulo () 
{

	var radio;
	var circunferencia;

	radio=document.getElementById('Radio').value;

	circunferencia=(Math.PI*Math.pow(radio,2));

	alert(circunferencia);

	
}
function Materiales () 
{

    var largo;
	var ancho;
	var sumalargoyancho;
	var totalrectangulo;
	var bolsasdecemento;
	var bolsasdecal;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	bolsasdecemento=(largo*2);
	bolsasdecal=(ancho*3);


	alert("Se necesitaran "+bolsasdecemento+" bolsas de cemento y "+bolsasdecal+" bolsas de cal");

}