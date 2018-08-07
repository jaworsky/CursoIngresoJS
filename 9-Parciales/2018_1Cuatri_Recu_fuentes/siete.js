function mostrar()
{

var nota;
var edad;
var sexo;
var promediodenotastotales;
var contador;
var notamasbaja;
var sexonotamasbaja;
var acomuladordenotas;
var contadordevaronesmayoresde18ynotamayora6;
var sexodelmasjoven;
var notadelmasjoven;
var edaddelmasjoven;
var notadelaprimeramujeringresada;
var bandera;
var contadordemujeres;
var mensaje;

contadordemujeres=0;
bandera=0;
contadordevaronesmayoresde18ynotamayora6=0;
contador=0;
acomuladordenotas=0;

while(contador<3)
{


	contador=contador+1;


	nota=prompt("Ingrese la nota");
	nota=parseInt(nota);

	while(isNaN(nota) || nota<0 || nota>10)
	{
		nota=prompt("Reingrese la nota");
		nota=parseInt(nota);

	}

	edad=prompt("Ingrese la edad");
	edad=parseInt(edad);

	while(isNaN(edad)||edad<0 || edad>100)
	{
	edad=prompt("Reingrese la edad");
	edad=parseInt(edad);
		
	}

	sexo=prompt("Ingrese el sexo");

	while(sexo!= "f" && sexo!="m")
	{
		sexo=prompt("Reingrese el sexo");


	}

if(contador==1)
{
	notamasbaja=nota;
	sexonotamasbaja=sexo;
	notadelmasjoven=nota;
	sexodelmasjoven=sexo;
	edaddelmasjoven=edad;

}
else
{
	if(nota<notamasbaja)
	{
		notamasbaja=nota;
		sexonotamasbaja=sexo;

	}

	if(edad<edaddelmasjoven)
	{
		edaddelmasjoven=edad;
		sexodelmasjoven=sexo;
	}


}

if(sexo=="f" && bandera==0)
{
	notadelaprimeramujeringresada=nota;
	bandera=1;
}



if(nota>=6 && sexo=="m" && edad>18)
{
	contadordevaronesmayoresde18ynotamayora6=contadordevaronesmayoresde18ynotamayora6+1;
}

if(sexo=="f")
{

	contadordemujeres=contadordemujeres+1;
}



acomuladordenotas=acomuladordenotas+nota;


}


if(contadordemujeres==0)
{
	mensaje="No hubo ninguna mujer";
}


promediodenotastotales=acomuladordenotas/contador;


alert("El promedio de las notas totales es: "+promediodenotastotales);
alert("La nota mas baja es: "+notamasbaja+" y el sexo de esa persona es: "+sexonotamasbaja);
alert("La cantidad de varones mayores a 18 con su nota mayor o igual a 6 es de: "+contadordevaronesmayoresde18ynotamayora6);
alert("el sexo del mas joven es: "+sexodelmasjoven+" y la nota del mas joven es: "+notadelmasjoven);
alert("La nota de la primer mujer ingresada es: "+notadelaprimeramujeringresada);
alert(mensaje);


}
