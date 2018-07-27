function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta="si";

	var numero1;

	while(respuesta=="si")

{

	numero=prompt("ingrese un numero");
	numero=parseInt(numero);

	if(numero>=0) // se manda al positivo, xq si va al - y multiplica no funciona.
		{
			positivo=positivo+numero;

		}

		else 
		{

			negativo=negativo*numero;

		}





	respuesta=prompt("¿desea continuar? si o no");

}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN