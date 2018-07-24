var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
// esto se hace para q las variables vivan fuera de las funciones "variables globales"
// todas las funciones van a poder acceder a estas variables.


function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
eleccionMaquina=Math.floor(Math.random()*(4-1))+1;

}//FIN DE LA FUNCIÓN
function piedra()
{

	
var eleccionmia;
eleccionmia=1;

if (eleccionmia==eleccionMaquina)
{
	alert("empató");
	ContadorDeEmpates=ContadorDeEmpates+1;  // se puede escribir tambien como contadordeempates++ o ++contadordeempates (depende si esta en la misma linea, si sumamos y lo mostramos o mostramos y desp sumamos)
}
	else if(eleccionMaquina==2)	
	{
		alert("perdió");
		ContadorDePerdidas=ContadorDePerdidas+1;
	}
	else if(eleccionMaquina==3)	
	{
		alert("ganó");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}

//alert("empate"+ContadorDeEmpates+ " gano"+ContadorDeGanadas+ "perdio"+ContadorDePerdidas);

mostrarResultado();
comenzar(); // esto hace que se ejecute la funcion comenzar otra vez y genere el numero random de nuevo.

}
function papel()
{

var eleccionmia;
eleccionmia=2;

if (eleccionmia==eleccionMaquina)
{
	alert("empató");
	ContadorDeEmpates=ContadorDeEmpates+1;
}
	else if(eleccionMaquina==1)
	{
		alert("ganó");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}
		else if (eleccionMaquina==3)
		{
			alert("perdió");
			ContadorDePerdidas=ContadorDePerdidas+1;
		}



mostrarResultado();
comenzar();

}
function tijera()
{

var eleccionmia;
eleccionmia=3;

if (eleccionmia==eleccionMaquina)
{
	alert("empató");
	ContadorDeEmpates=ContadorDeEmpates+1;
}	
	else if(eleccionMaquina==2)	
	{
		alert("ganó");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}
	else if (eleccionMaquina==1)
	{
		alert("perdió");
		ContadorDePerdidas=ContadorDePerdidas+1;
	}




mostrarResultado();
comenzar();  // las funciones hacen 1 sola cosa

	
}

function mostrarResultado() // se ejecuta solo? no.. hay que llamar a la funcion mostrarResultado en cada funcion
{

document.getElementById('ganadas').value=ContadorDeGanadas;
document.getElementById('perdidas').value=ContadorDePerdidas;
document.getElementById('empatadas').value=ContadorDeEmpates;



}


/* acomulador

ACUM=ACUM+VAR2;
a la variables se le sumen otras variables


BANERA=true

toma un valor booleano, nos va a servir para utilizarlo en un if
if(banera)
{
	bandera=false;
}

*/