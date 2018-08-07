function mostrar()
{

var numero1;
var numero2;
var suma;

numero1=prompt("Ingrese el numero 1 ");
numero2=prompt("Ingrese el numero 2");

numero1=parseInt(numero1);
numero2=parseInt(numero2);


if(numero1==numero2)
{
	alert(numero1+" "+numero2);

}

else if(numero1>numero2)
{

	alert(numero1/numero2);
}
else
{

	suma=numero1+numero2;
	alert(suma);
}

if(suma<50)
{
	alert("La suma es: "+suma+" y es menor a 50");


}





}
