function mostrar()
{

var contador;
var numero;
var cantidaddenumerospares;
cantidaddenumerospares=0;

numero=prompt("Ingrese un numero");
numero=parseInt(numero);


for(contador=0;contador<numero;contador=contador+1)
{

	if(contador%2==0)
	{
		cantidaddenumerospares=cantidaddenumerospares+1;
	}

	
	

}

alert(cantidaddenumerospares);


}//FIN DE LA FUNCIÓN