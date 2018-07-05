function mostrar()
{

	var precio;
	var porcentaje;
	var preciocondescuento;
	var preciofinal;


	precio= prompt("ingrese el precio");
	porcentaje=prompt("ingrese el porcentaje de descuento");

	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);
	preciocondescuento=parseInt(preciocondescuento);

	

	//sacar porcentaje
	preciocondescuento=(precio*porcentaje/100);

	preciofinal=(precio-preciocondescuento);




	// q se muestre en el cuadro, los datos deseados
	document.getElementById('elPrecioFinal').value=preciofinal;
	

}
