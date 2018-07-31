function mostrar()
{

	var contador=0;
	var acumulador=0;

	
	var numero;
	var suma;  // utilice suma como acumulador

	suma=0;

	while(contador<5)

	{

		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
	


		while(isNaN(numero))
		{
			numero=prompt("ingrese un numero");
			numero=parseInt(numero);
		}

		contador=contador+1;
		suma=suma+numero;	

	}




document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}
//FIN DE LA FUNCIÓN

// para validar solo numeros:
/*
while(ISNAN(NUMERO))  // para lo contrario !ISNAN(NUMERO)
{
	num=prompt
	num=parseInt
}

*/