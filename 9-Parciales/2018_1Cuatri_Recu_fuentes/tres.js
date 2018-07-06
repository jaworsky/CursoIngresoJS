function mostrar()
{

	var precio;
	var porcentajededescuento;
	var descuento;
	var preciocondescuento;
	var iva;
	var preciocondescuentomasiva;

	
	precio=prompt("ingrese el precio");
	porcentajededescuento=prompt("ingrese el porcentaje de descuento");

	precio=parseInt(precio);

	descuento=(precio*porcentajededescuento)/100;
	
 	alert(descuento);

	// 1

	preciocondescuento=(precio-descuento);

	alert(preciocondescuento);
	// 2

	iva=(precio*21)/100;

	alert(iva);

	// 3

	alert(descuento+ " "+ preciocondescuento+" " +iva);

	//4

	preciocondescuentomasiva=preciocondescuento+iva;


	document.getElementById('elPrecioFinal').value=preciocondescuentomasiva;

}
