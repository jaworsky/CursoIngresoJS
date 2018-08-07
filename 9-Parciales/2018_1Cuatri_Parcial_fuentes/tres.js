function mostrar()
{

var precio;
var porcentajededescuento;
var preciofinalcondescuento;
var descuento;

precio=prompt("Ingrese precio");
porcentajededescuento=prompt("Ingrese el porcentajededescuento");

precio=parseInt(precio);
porcentajededescuento=parseInt(porcentajededescuento);

descuento=(porcentajededescuento*precio)/100;

preciofinalcondescuento=precio-descuento;

document.getElementById('elPrecioFinal').value=preciofinalcondescuento;







































/*

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
	
*/
}
