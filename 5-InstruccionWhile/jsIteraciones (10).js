function mostrar()
{

	var promediodenegativos;
	var promediopositivos;	
	var mensaje;
	var contadordepares;
	var contadordeceros;
	var contadordepositivos;
	var contadordenegativos;
	contadordepositivos=0;
	contadordenegativos=0;
	contadordeceros=0;
	contadordepares=0;
	//declarar contadores y variables 

	var numero;
	

	var sumadepositivos;
	var sumadenegativos;

	sumadenegativos=0;
	sumadepositivos=0;
	promediopositivos=0;
	promediodenegativos=0;

	var respuesta="si";

	while(respuesta!="no") // hay que poner isNaN en la respuesta??

	{

		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);	
		}


		if(numero>0)
		{
			

			sumadepositivos=sumadepositivos+numero;
			contadordepositivos=contadordepositivos+1;

		}
		else if(numero<0)
		{
			sumadenegativos=sumadenegativos+numero;
			contadordenegativos=contadordenegativos+1;

		}	
		else
		{
			contadordeceros=contadordeceros+1;


		}


		//PARA SACAR NUMEROS PARES:

		if(numero%2==0)
		{
			contadordepares=contadordepares+1;
		}


		if(contadordepositivos>contadordenegativos)
		{

			mensaje="Hay mas positivos que negativos";
		}
		else if(contadordenegativos>contadordepositivos)
		{
			mensaje="Hay mas negativos que positivos";
		}
		else
		{
			mensaje="Hay igual cantidad de negativos que de positivos";
		}


		respuesta=prompt("Desea continuar? si o no");
		
	}


promediopositivos=sumadepositivos/contadordepositivos;
promediodenegativos=sumadenegativos/contadordenegativos;

document.write("La suma de negativos es "+sumadenegativos+"<BR>"+"La suma de positivos es "+sumadepositivos+"<BR>"+"La cantidad de positivos es: "+contadordepositivos+"<BR>"+"La cantidad de negativos es: "+contadordenegativos+"<BR>"+"La cantidad de ceros es: "+contadordeceros+"<BR>"+"La cantidad de pares es: "+contadordepares+"<BR>"+"El promedio de positivos es: "+promediopositivos+"<BR>"+"El promedio de negativos es: "+promediodenegativos+"<BR>"+"en total hay: "+mensaje);


}//FIN DE LA FUNCIÓN

/* prueba de escritorio OK

	numeros ingresados									
	1				suma de -	-3	ok			
prueba escritorio:	1				suma de +	4	ok			
	1				cont +	4	ok			
	1				cont -	3	ok			
	0				cont 0	3	ok			
	0				cont pares	0	ok	el cero es tomado como numero par		
	0				promediode+	1	ok			
	-1				promediode-	-1	ok			
	-1				mensaje	en total hay mas positivos que negativos				ok

*/