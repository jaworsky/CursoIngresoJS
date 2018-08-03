function mostrar()
{

var marca;
var peso;
var temperatura;
var respuesta;


respuesta="si";


while(respuesta=="si")
{

marca=prompt("Ingrese la marca del producto");
peso=prompt("Ingrese el peso del producto");
peso=parseInt(peso);

	while(isNaN(peso) || peso<0 || peso>100)
	{
		peso=prompt("Ingrese el peso del producto entre 0 y 100");
		peso=parseInt(peso);

	}

temperatura=prompt("Ingrese la temperatura de almacenamiento");
temperatura=parseInt(temperatura);

	while(isNaN(temperatura) || temperatura<30 && temperatura>-30) // ver como poner
	{
		temperatura=prompt("Ingrese la temperatura de almacenamiento entre -30 y 30");
		temperatura=parseInt(temperatura);
	}






	respuesta=prompt("¿Desea continuar?");
}




}
