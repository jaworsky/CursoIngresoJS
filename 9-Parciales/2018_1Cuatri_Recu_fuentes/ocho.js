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
var contadordeceroventas;
var promediodetodaslasventasingresadas;
var sumadepaginasdeprogramacion;
var ventasdelibrorobotica;
var ventadelibroprogramacion;
var ventadelibropatrones;
var ventadelibrobasededatos;
var sumadetodaslasventas;
var contador2;


contador2=0;
sumadetodaslasventas=0;
ventasdelibrorobotica=0;
ventadelibroprogramacion=0;
ventadelibrobasededatos=0;
ventadelibropatrones=0;
sumadepaginasdeprogramacion=0;
contadordeceroventas=0;
cantidaddelibrosconpaginasimpares=0;
cantidaddelibrosconpaginaspares=0;
contador=0;
respuesta="si";

while(respuesta!="no")
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

		if(cantidaddeventas==0)
		{
			contadordeceroventas=contadordeceroventas+1;

		}



		sumadetodaslasventas=sumadetodaslasventas+cantidaddeventas;


		if(tema=="programación")
		{
			sumadepaginasdeprogramacion=sumadepaginasdeprogramacion+cantidaddepaginas;
		}

		contador2=contador2+1;



	


respuesta=prompt("¿Desea continuar?");


}

promediodetodaslasventasingresadas=sumadetodaslasventas/contador2;




document.write("La cantidad de libros con paginas pares es de: "+cantidaddelibrosconpaginaspares+"<br>");
document.write("La cantidad de libros con paginas impares es de: "+cantidaddelibrosconpaginasimpares+"<br>");
document.write("La cantidad de cero ventas es: "+contadordeceroventas+"<br>");
document.write("El promedio de todas las ventas ingresadas es de: "+promediodetodaslasventasingresadas+"<br>");
document.write("La suma de todas las paginas de programación es de: "+sumadepaginasdeprogramacion+"<br>");

}
