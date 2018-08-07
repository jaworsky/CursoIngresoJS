function mostrar()
{


var letra;
var numero;
var respuesta;
var cantidaddenumerospares;
var cantidaddenumerosimpares;
var cantidaddeceros;
var promediodetodoslosnumerospositivos;
var acomuladordenumerospositivos;
var contadordenumerospositivos;
var sumadetodoslosnumerosnegativos;
var numeromaximo;
var numerominimo;
var letramaximo;
var letraminimo;
var contador;



resputa="si";
cantidaddenumerospares=0;
cantidaddenumerosimpares=0;
cantidaddeceros=0;
acomuladordenumerospositivos=0;
contadordenumerospositivos=0;
sumadetodoslosnumerosnegativos=0;
contador=0;


while(resputa!="no")
{

contador=contador+1;

letra=prompt("Ingrese una letra");

	while(!isNaN(letra))
	{
		letra=prompt("Reingrese una letra");
	}

numero=prompt("Ingrese un numero");
numero=parseInt(numero);

	while(isNaN(numero)|| numero<-100 || numero>100	)
	{
		numero=prompt("Reingrese un numero");
		numero=parseInt(numero);
	}	

if(numero%2==0)
{
	cantidaddenumerospares=cantidaddenumerospares+1;
}	
else
{
	cantidaddenumerosimpares=cantidaddenumerosimpares+1;
}	
if(numero==0)
{
	cantidaddeceros=cantidaddeceros+1;
}
else if(numero>0)
{
	acomuladordenumerospositivos=acomuladordenumerospositivos+numero;
	contadordenumerospositivos=contadordenumerospositivos+1;
}
else if(numero<0)
{
	sumadetodoslosnumerosnegativos=sumadetodoslosnumerosnegativos+numero;

}

if(contador==1)
{
	numerominimo=numero;
	numeromaximo=numero;
	letraminimo=letra;
	letramaximo=letra;

}
else
{
	if(numero>numeromaximo)
		{
			numeromaximo=numero;
			letramaximo=letra;
		}
	if(numero<numerominimo)
	 	{
	 		numerominimo=numero;
	 		letraminimo=letra;
	 	}	


}







resputa=prompt("Desea continuar?");

}

promediodetodoslosnumerospositivos=acomuladordenumerospositivos/contadordenumerospositivos;

cantidaddenumerospares=cantidaddenumerospares-cantidaddeceros;

document.write("La cantidad de numeros pares es de: "+cantidaddenumerospares+"<br>");
document.write("La cantidad de numeros impares es de: "+cantidaddenumerosimpares+"<br>");
document.write("La cantidad de ceros es de: "+cantidaddeceros+"<br>");
document.write("El promedio de los numeros positivos es de: "+promediodetodoslosnumerospositivos+"<br>");
document.write("La suma de todos los numeros negativos es de: "+sumadetodoslosnumerosnegativos+"<br>");
document.write("El numero del maximo es: "+numeromaximo+" y la letra maxima es: "+letramaximo+"<br>");
document.write("El numero del minimo es: "+numerominimo+" y la letra minima es: "+letraminimo+"<br>");






}
