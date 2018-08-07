function mostrar()
{

var nombre;
var peso;
var temperatura;
var respuesta;
var cantidaddetemperaturaspares;
var animalmaspesado;
var nombredelanimalmaspesado;
var temperaturadelanimalmaspesado;
var contador;
var cantidaddeanimalesquevivenamenosde0;
var sumadepesodetodoslosanimales;
var promediodepesodetodoslosanimales;
var pesomaximotempmenora0;
var pesominimotempmenora0;
var ultimopesoingresado;
var primerpesoingresado;

// inventado, cual es el primer peso ingresado y el ultimo



sumadepesodetodoslosanimales=0;
cantidaddeanimalesquevivenamenosde0=0;
cantidaddetemperaturaspares=0;
respuesta="si";
contador=0;

while(respuesta!="no")
{



	contador=contador+1;

	nombre=prompt("Ingrese el nombre del animal"); // validar nombres con !isNaN
	while(!isNaN(nombre))
	{
	nombre=prompt("Reingrese el nombre del animal");	
	}


	peso=prompt("Ingrese el peso del animal");
	peso=parseInt(peso);

	while(isNaN(peso) ||peso<1 || peso>1000)
	{
	peso=prompt("Reingrese el peso del animal");
	peso=parseInt(peso);

	}

	temperatura=prompt("Ingrese la temperatura");
	temperatura=parseInt(temperatura);

	while(isNaN(temperatura)||temperatura<-30 ||temperatura>30)
	{
	temperatura=prompt("Reingrese la temperatura");
	temperatura=parseInt(temperatura);

	}

	if(temperatura%2==0)
	{
		cantidaddetemperaturaspares=cantidaddetemperaturaspares+1;
	}

	if(contador==1)
	{
		animalmaspesado=peso;
		nombredelanimalmaspesado=nombre;
		temperaturadelanimalmaspesado=temperatura;
		primerpesoingresado=peso;

	}
	else(peso>animalmaspesado)
	{
		animalmaspesado=peso;
		nombredelanimalmaspesado=nombre;
		temperaturadelanimalmaspesado=temperatura;

	}
	if(temperatura<0)
	{
		cantidaddeanimalesquevivenamenosde0=cantidaddeanimalesquevivenamenosde0+1;

		if(contador==1)
		{
			pesominimotempmenora0=peso;
			pesomaximotempmenora0=peso;

		}
		else
		{
			if(peso>pesomaximotempmenora0)
			{
				pesomaximotempmenora0=peso;

			}	
			if(peso<pesominimotempmenora0)
			{
				pesominimotempmenora0=peso;
			}


		}




	}

	sumadepesodetodoslosanimales=sumadepesodetodoslosanimales+peso;





respuesta=prompt("¿Desea continuar?");

}

ultimopesoingresado=peso;



promediodepesodetodoslosanimales=sumadepesodetodoslosanimales/contador;


document.write("La cantidad de temperaturas pares es de: "+cantidaddetemperaturaspares+"<br>");
document.write("El nombre del animal mas pesado es: "+nombredelanimalmaspesado+" y su temperatura es: "+temperaturadelanimalmaspesado+"<br>");
document.write("La cantidad de animales que viven a menos de 0 grados son: "+cantidaddeanimalesquevivenamenosde0+"<br>");
document.write("El promedio del peso de todos los animales es de: "+promediodepesodetodoslosanimales+"<br>");
document.write("El peso maximo de todos los animales cuyas temperaturas son bajo 0 es de: "+pesomaximotempmenora0+"<br>");
document.write("El peso minimo de todos los animales cuyas temperaturas son bajo 0 es de: "+pesominimotempmenora0+"<br>");
document.write("El ultimo peso ingresado es: "+ultimopesoingresado+"<br>");

}

