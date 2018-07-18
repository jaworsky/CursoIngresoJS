var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
eleccionMaquina=Math.floor(Math.random()*(4-1))+1;
alert(eleccionMaquina);




}//FIN DE LA FUNCIÓN
function piedra()
{

	
var eleccionmia;
eleccionmia=1;

if (eleccionmia==eleccionMaquina)
{
	alert("empató");
	ContadorDeEmpates=ContadorDeEmpates+1;
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

document.getElementById('ganadas').value=ContadorDeGanadas;
document.getElementById('perdidas').value=ContadorDePerdidas;
document.getElementById('empatadas').value=ContadorDeEmpates;



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


document.getElementById('ganadas').value=ContadorDeGanadas;
document.getElementById('perdidas').value=ContadorDePerdidas;
document.getElementById('empatadas').value=ContadorDeEmpates;


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


document.getElementById('ganadas').value=ContadorDeGanadas;
document.getElementById('perdidas').value=ContadorDePerdidas;
document.getElementById('empatadas').value=ContadorDeEmpates;

	
}

function mostrarResultado() // se ejecuta solo? no..
{

document.getElementById('ganadas').value=ContadorDeGanadas;
document.getElementById('perdidas').value=ContadorDePerdidas;
document.getElementById('empatadas').value=ContadorDeEmpates;



}