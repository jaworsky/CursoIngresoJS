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

	while(respuesta!="no")

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

document.write(sumadenegativos+"<BR>"+sumadepositivos+"<BR>"+contadordepositivos+"<BR>"+contadordenegativos+"<BR>"+contadordeceros+"<BR>"+contadordepares+"<BR>"+promediopositivos+"<BR>"+promediodenegativos+"<BR>"+mensaje);


}//FIN DE LA FUNCIÓN