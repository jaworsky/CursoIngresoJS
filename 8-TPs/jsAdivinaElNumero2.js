/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var numeroingresado;
var contador;
contador =0;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
numeroSecreto=Math.floor(Math.random()*(101-1))+1;
numeroSecreto=parseInt(numeroSecreto);
//genero el numero secreto.
//alert(numeroSecreto);

}

function verificar()
{
	
numeroingresado=document.getElementById('numero').value;
numeroingresado=parseInt(numeroingresado);
contador=contador+1;


if (numeroingresado==numeroSecreto && contador==1)
{
alert("Usted es un Psíquico");
}

else if (numeroingresado==numeroSecreto && contador==2)	
{
alert("Excelente percepción”");
}

else if (numeroingresado==numeroSecreto && contador==3)
{
alert("Esto es suerte");
}
else if (numeroingresado==numeroSecreto && contador==4)
{
alert("Excelente técnica");
}
else if (numeroingresado==numeroSecreto && contador==5)
{
alert("Usted está en la media");
}
	else if (numeroingresado==numeroSecreto) // no puede haber un else if dentro de un else if
	{
		if (contador>=6 && contador<=10)
		{
		alert("falta técnica");
		}
		else
		{
		alert("afortunado en el amor");
		}




	}

document.getElementById('intentos').value=contador;

}