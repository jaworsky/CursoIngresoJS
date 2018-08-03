function mostrar()
{


	/*
	ej del numero primo:

	*/

	var divisores;
	var numeroIngresado;
	var numeroAnterior;
	var numerosRecorridos;


	divisores=0;

	numeroIngresado=prompt("Ingrese el numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numerosRecorridos=numeroIngresado;numerosRecorridos>1;numerosRecorridos--)
	{
		divisores=0;
		for(numeroAnterior=numerosRecorridos-1;numeroAnterior>1;numeroAnterior--)
		{
			if(numerosRecorridos%numeroAnterior==0)
			{
				divisores++; // encontre un divisor.
				break; // sin break no seria performante.
			}

		}
		if (divisores==0)
		{
			console.log("Es primo :" + numerosRecorridos);
		}

	}

/*
	como sacar los numeros primos:

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{
		 // me devuelve 0 cuando es un numero primo.
		if(numeroIngresado%numeroAnterior==0)
		{
			divisores++; // encontre un divisor.
			break; // sin break no seria performante.
		}
	}

	if (divisores==0)
		{
			console.log("Es primo");
		}
		else
		{
			console.log("NO es de los numeros primos");
		}
	console.log(divisores);

*/


}//FIN DE LA FUNCIÓN


// centro numero  y  numero perfecto ( buscar y aprender hacer)