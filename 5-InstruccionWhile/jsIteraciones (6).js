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
		contador=contador+1;
		numero=parseInt(numero);
		suma=suma+numero;
		suma=parseInt(suma);


	}




document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN