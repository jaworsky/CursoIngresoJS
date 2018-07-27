function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";

	var numero1;
	

	var suma;
	suma=0;

	while(respuesta=="si")


	{
		contador=contador+1;

		numero1=prompt("ingrese el numero 1");
		
		numero1=parseInt(numero1);
		
		suma=suma+numero1;

		respuesta=prompt("desea contiunuar? si o no");



	}


console.log(contador);
console.log(suma);
	

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;


/*  otra manera de hacerlo

while(true)
{
		numero=prompt();
		if (num=="si")
		{
		break; // se ejecuta hasta aca y corta el while. 
		continue; // salta todo el codigo que hay debajo y vuelve a evaluar la condicion. vuelve al while
		}


}


otra explicacion:

while(cont<10)
{
	num=prompt();
	num=parseint; // toma NaN si puse una letra
	if(num=NaN) // NaN nunca va ser igual a NaN
	if(ISNAN(num))
	{
	break;
	}
 }





*/








}//FIN DE LA FUNCIÓN