/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


var numeroSecreto;
var numeroingresado;
var contador;
contador =0;
// tienen que estar afuera xq tienen que correr en ambas funciones.

function comenzar()
{

numeroSecreto=Math.floor(Math.random()*(101-1))+1;
numeroSecreto=parseInt(numeroSecreto);
//genero el numero secreto.
}

function verificar()
{

numeroingresado=document.getElementById('numero').value;
numeroingresado=parseInt(numeroingresado);
contador=contador+1;


if (numeroingresado==numeroSecreto)
{
	alert("Usted es un ganador!!! y en solo "+contador+" intentos");
}
	else if(numeroingresado>numeroSecreto)
	{
		alert("se pasó...");
	}

	else
	{
		alert("falta ...");
	}

}
