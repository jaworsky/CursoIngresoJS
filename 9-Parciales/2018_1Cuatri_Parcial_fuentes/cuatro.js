function mostrar()
{


var numero1;
var numero2;
var resultado;





numero1=prompt("Ingrese el numero 1");


while(isNaN(numero1))
{	
	numero1=prompt("Reingrese el numero 1");
}

numero2=prompt("Ingrese el numero 2");

while(isNaN(numero2))
{
	numero2=prompt("Reingrese el numero 2");
}

numero1=parseInt(numero1);
numero2=parseInt(numero2);

if(numero1==numero2)
{

	alert(numero1+""+numero2);
}

else if(numero1>numero2)
{
	alert(numero1-numero2);

}
else
{

	resultado=numero1+numero2;
}


if(resultado>10)
{
	alert("La suma es "+resultado+" y supero el 10");


}






























/*
var numero1;
var numero2;
var resultado;

numero1=prompt("ingrese el numero 1");
numero2=prompt("ingrese el numero 2");

numero1=parseInt(numero1);
numero2=parseInt(numero2);
resultado=parseInt(resultado);


if(numero1==numero2)
{
	alert(numero1+numero2);

}
else if(numero1>numero2)
{
	resultado=numero1-numero2;
	alert(resultado);
}
else if(numero1<numero2)
{
	resultado=numero1+numero2;
	alert(resultado);

if (resultado>10)
{
	alert("La suma es "+resultado+" y se pasó de 10");
}



}



*/
}
