function mostrar()
{

var nombre;
var cantidaddepaginas;
var cantidaddeventas;
var tema;
var respuesta;
var contador;
var cantidaddelibrosconpaginaspares;
var cantidaddelibrosconpaginasimpares;


cantidaddelibrosconpaginasimpares=0;
cantidaddelibrosconpaginaspares=0;
contador=0;
respuesta="si";

while(respuesta!="no")
{


	while(contador<2)
	{
		contador=contador+1;

		nombre=prompt("Ingrese el nombre del libro");	
		cantidaddepaginas=prompt("Ingrese la cantidad de paginas");
		cantidaddeventas=prompt("Ingrese la cantidad de ventas");

		cantidaddepaginas=parseInt(cantidaddepaginas);
		cantidaddeventas=parseInt(cantidaddeventas);

		while(isNaN(cantidaddeventas)||cantidaddeventas<0)
		{
			cantidaddeventas=prompt("Reingrese la cantidad de ventas");
			cantidaddeventas=parseInt(cantidaddeventas);
		}

		tema=prompt("Ingrese el tema");

		while(tema!="robótica" && tema!="programación" && tema!="patrones" && tema!="base de datos")
		{
			tema=prompt("Reingrese el tema");

		}


		if(cantidaddepaginas%2==0)
		{
			cantidaddelibrosconpaginaspares=cantidaddelibrosconpaginaspares+1;
		}
		else
		{
			cantidaddelibrosconpaginasimpares=cantidaddelibrosconpaginasimpares+1;

		}	

	}


respuesta=prompt("¿Desea continuar?");


}


document.write("La cantidad de libros con paginas pares es de: "+cantidaddelibrosconpaginaspares+"<br>");
document.write("La cantidad de libros con paginas impares es de: "+cantidaddelibrosconpaginasimpares+"<br>");


}
