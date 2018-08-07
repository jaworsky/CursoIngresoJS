function mostrar()
{

var precio;
var porcentajededescuento;
var descuento;
var IVA;
var preciofinal;
var preciofinalmasiva;


precio=prompt("Ingrese el precio");
porcentajededescuento=prompt("Ingrese el porcentaje de descuento");

precio=parseInt(precio);
porcentajededescuento=parseInt(porcentajededescuento);

descuento=(precio*porcentajededescuento)/100;

preciofinal=precio-descuento;
IVA=(preciofinal*21)/100;
preciofinalmasiva=preciofinal+IVA;


alert("El descuento en dinero es: "+descuento);
alert("El precio final es: "+preciofinal);
alert("El IVA es: "+IVA);

alert("El descuento en dinero es: "+descuento+" El precio final es: "+preciofinal+" El IVA es: "+IVA);

document.getElementById('elPrecioFinal').value=preciofinalmasiva;



























/*

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

*/

}
