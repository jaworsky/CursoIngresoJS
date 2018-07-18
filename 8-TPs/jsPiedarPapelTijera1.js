/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;


function comenzar() // ya arranca de entrada, no hay botón.
{

eleccionMaquina=Math.floor(Math.random()*(4-1))+1;
//genero el numero random del 1 al 3.

//alert(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	
var eleccionmia;
eleccionmia=1;

if (eleccionmia==eleccionMaquina)
{
	alert("empató");
}
	else if(eleccionMaquina==2)	
	{
		alert("perdió");
	}
	else if(eleccionMaquina==3)	
	{
		alert("ganó");
	}



}//FIN DE LA FUNCIÓN
function papel()
{

var eleccionmia;
eleccionmia=2;

if (eleccionmia==eleccionMaquina)
{
	alert("empató");
}
	else if(eleccionMaquina==1)
	{
		alert("ganó");
	}
		else if (eleccionMaquina==3)
		{
			alert("perdió");
		}


}//FIN DE LA FUNCIÓN
function tijera()
{
	
var eleccionmia;
eleccionmia=3;

if (eleccionmia==eleccionMaquina)
{
	alert("empató");
}	
	else if(eleccionMaquina==2)	
	{
		alert("ganó");
	}
	else if (eleccionMaquina==1)
	{
		alert("perdió");
	}


}//FIN DE LA FUNCIÓN