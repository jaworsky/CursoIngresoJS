function mostrar()
{

var marca;
var peso;
var temperatura;
var respuesta;
var cantidaddetemperaturaspares;
var productomaspesado;
var marcadelproductormaspesado;
var contador;
var cantidaddeproductosqseconservana0;
var promediodepesodetodoslosproductos;
var acomuladordepesodetodoslosproductos;
var pesomaximo;
var pesominimo;



acomuladordepesodetodoslosproductos=0;
cantidaddeproductosqseconservana0=0;
cantidaddetemperaturaspares=0;
contador=0;

respuesta="si";


while(respuesta!="no")
{


contador=contador+1;

marca=prompt("Ingrese la marca del producto");


peso=prompt("Ingrese el peso del producto");
peso=parseInt(peso);

	while(isNaN(peso) || peso<0 || peso>100)
	{
		peso=prompt("Reingrese el peso del producto entre 0 y 100");
		peso=parseInt(peso);

	}

temperatura=prompt("Ingrese la temperatura de almacenamiento");
temperatura=parseInt(temperatura);

	while(isNaN(temperatura) || temperatura>30 || temperatura<-30) 
	{
		temperatura=prompt("Ingrese la temperatura de almacenamiento entre -30 y 30");
		temperatura=parseInt(temperatura);
	}

if(temperatura%2==0)
{
	cantidaddetemperaturaspares=cantidaddetemperaturaspares+1;

}

if(contador==1)
{
	marcadelproductormaspesado=marca;
	productomaspesado=peso;
	pesominimo=peso;
	pesomaximo=peso;

}
else	
{
	if(peso>productomaspesado)
	{
		productomaspesado=peso;
		marcadelproductormaspesado=marca;
	}



}

if(temperatura<0)
{
	cantidaddeproductosqseconservana0=cantidaddeproductosqseconservana0+1;
}

if(peso>pesomaximo)
{
	pesomaximo=peso;
}
if(peso<pesominimo)
{
	pesominimo=peso;
}








acomuladordepesodetodoslosproductos=acomuladordepesodetodoslosproductos+peso;





	respuesta=prompt("¿Desea continuar?");
}

promediodepesodetodoslosproductos=acomuladordepesodetodoslosproductos/contador;




document.write("La cantidad de temperaturas pares es de: "+cantidaddetemperaturaspares);
document.write("La marca del producto mas pesado es: "+marcadelproductormaspesado +" y el peso del produto mas pesado es: "+productomaspesado+"<br>");
document.write("La cantidad de productos que se conservan a menos de 0 es de: "+cantidaddeproductosqseconservana0+"<br>");
document.write("El promedio de peso de todos los productos es de: "+promediodepesodetodoslosproductos+"<br>");
document.write("El peso maximo es: "+pesomaximo+" y el peso minimo es "+pesominimo+"<br>");



}
