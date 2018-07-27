function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero; 

	var maximo;
	var minimo;


/*
	maximo=-9999;
	minimo=+9999;  se puede hacer de otra manera, no hace falta declararlo asi
*/





	while(respuesta!='no')

	{
		contador=contador+1;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(contador==1)
			{
				maximo=numero;
				minimo=numero;
			}

		else
		{		

		if(numero>maximo)
		{
			maximo=numero;

		}
		if(numero<minimo)
		{
			minimo=numero;
		

	}




		respuesta=prompt("¿Desea continuar? si o no");		

	}


document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN

/* 3 maneras de hacer el maximo y minimos:

banderas
acomuladores
contadores
max
min

 hacer ejercicios 12 de los trabajo practico y 10 
	los de temporizador no

*/

