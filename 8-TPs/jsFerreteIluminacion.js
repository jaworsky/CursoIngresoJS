/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

  // echo con IF

var marca;
var cantidaddelamparas;
var preciounitario;
var descuento;
var IIBB;
var preciofinal;
var preciobruto;


cantidaddelamparas=document.getElementById('Cantidad').value;
marca=document.getElementById('Marca').value;

preciounitario=35;
preciobruto=cantidaddelamparas*preciounitario;


cantidaddelamparas=parseInt(cantidaddelamparas);
preciounitario=parseInt(preciounitario);


	
if (cantidaddelamparas>=6) // punto A
{
	descuento=0.50;
	
	preciofinal=preciobruto*descuento;

}

 	else if(cantidaddelamparas==5 && marca=="ArgentinaLuz")
 	{
 		descuento=0.6;

 		preciofinal=preciobruto*descuento;


 	}
 	else if(cantidaddelamparas==5 && marca!="ArgentinaLuz") // punto B
 	{
 		descuento=0.70;

 		preciofinal=preciobruto*descuento;

 	}

 	else if(cantidaddelamparas==4) // punto C
 	{
 		 if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 		 {
	 	 	descuento=0.75;

	 	 	preciofinal=preciobruto*descuento;
	 	 }

	 	 else
	 	 {
	 	 	descuento=0.80;

	 	 	preciofinal=preciobruto*descuento;
	 	 }

 	}

 	else if(cantidaddelamparas==3) // punto D
 	{
 		if(marca=="ArgentinaLuz")
 		{
 			descuento=0.85;

 			preciofinal=preciobruto*descuento;
 		}
 		else if(marca=="FelipeLamparas")
 		{
 			descuento=0.90;
 			preciofinal=preciobruto*descuento;
 				
 		}
 		else
 		{
 			descuento=0.95;
 			preciofinal=preciobruto*descuento;
 		}


 	}

 	else
 	{
 		descuento=1;
 		preciofinal=preciobruto*descuento;
 	}


if(preciofinal>120) // punto D
{
	IIBB=preciofinal*10/100;
	
	preciofinal=preciofinal+IIBB;

	alert("Usted pago "+preciofinal+" siendo "+IIBB+" el impuesto que se pagó");

}



document.getElementById('precioDescuento').value=preciofinal;







//con switch y al final con IF, por el tema de que el precio sea mayor a 120

/*

var marca;
var cantidaddelamparas;
var preciounitario;
var descuento;
var IIBB;
var preciofinal;
var preciobruto;


cantidaddelamparas=document.getElementById('Cantidad').value;
marca=document.getElementById('Marca').value;

preciounitario=35;
preciobruto=cantidaddelamparas*preciounitario;


cantidaddelamparas=parseInt(cantidaddelamparas);
preciounitario=parseInt(preciounitario);


switch(cantidaddelamparas)
{

	
	case 1:
	case 2:
	descuento=1;
	break;


	case 3: // punto D
	switch(marca)
	{
		case "ArgentinaLuz":
		descuento=0.85;
		// no hace falta calcularlo aca, se puede calcular al final
		break;

		case "FelipeLamparas":
		descuento=0.90;
		
		break;

		default:
		descuento=0.95;

	}
	break;

	case 4: // punto C
	switch(marca)
	{
		case "ArgentinaLuz":
		case "FelipeLamparas":
		descuento=0.75;		
		break; // NO OLVIDARSE DE UN BREAK, SINO SIGUE DE LARGO.

		default:
		descuento=0.80;
	}
	break;

	case 5: // punto B
	switch(marca)
	{
		case "ArgentinaLuz":
		descuento=0.60;
		break;

		default:
		descuento=0.70;
	}
	break;

	default: // punto A
	descuento=0.50;

}

preciofinal=preciobruto*descuento; // calculo el precio final al terminar la secuencia de swtich.

if(preciofinal>120)
{

	IIBB=preciofinal*10/100;
	
	preciofinal=preciofinal+IIBB; // le sumo los IIBB al precio final, para que se muestre el precio correcto

	alert("Usted pago "+preciofinal+" siendo "+IIBB+" el impuesto que se pagó");


}



document.getElementById('precioDescuento').value=preciofinal;

*/

// intentando mezclar switch e if:
//ok FUNCIONA



/*

var marca;
var cantidaddelamparas;
var preciounitario;
var descuento;
var IIBB;
var preciofinal;
var preciobruto;


cantidaddelamparas=document.getElementById('Cantidad').value;
marca=document.getElementById('Marca').value;

preciounitario=35;
preciobruto=cantidaddelamparas*preciounitario;


cantidaddelamparas=parseInt(cantidaddelamparas);
preciounitario=parseInt(preciounitario);

switch(cantidaddelamparas)
{

	
	case 1:
	case 2:
	descuento=1;
	break;


	case 3: // punto D
	
	if(marca=="ArgentinaLuz")
	{
		descuento=0.85;
	}
	else if(marca=="FelipeLamparas")
	{
		descuento=0.90;
	}
	else
	{
		descuento=0.95;
	}

	break;

	case 4: // punto C
	
		if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
		{
			descuento=0.85;
		}
		else
		{
			descuento=0.80;
		}

	
	break;

	case 5: // punto B
	
	if(marca=="ArgentinaLuz")
	{
		descuento=0.60;
	}
	else
	{
		descuento=0.70;
	}



	break;

	default: // punto A
	descuento=0.50;

}

preciofinal=preciobruto*descuento;

if(preciofinal>120)
{

	IIBB=preciofinal*10/100;
	
	preciofinal=preciofinal+IIBB;

	alert("Usted pago "+preciofinal+" siendo "+IIBB+" el impuesto que se pagó");

}



document.getElementById('precioDescuento').value=preciofinal;



*/


//Intentando mezclar IF con SWITCH:

/*

var marca;
var cantidaddelamparas;
var preciounitario;
var descuento;
var IIBB;
var preciofinal;
var preciobruto;


cantidaddelamparas=document.getElementById('Cantidad').value;
marca=document.getElementById('Marca').value;

preciounitario=35;
preciobruto=cantidaddelamparas*preciounitario;


cantidaddelamparas=parseInt(cantidaddelamparas);
preciounitario=parseInt(preciounitario);


	
if (cantidaddelamparas>=6) // punto A
{
	descuento=0.50;
	
}

 	else if(cantidaddelamparas==5)
 	{
 		switch(marca)
 		{
 		case "ArgentinaLuz":
 		descuento=0.6;
 		break;

 		default:
 		descuento=0.70;	

 		}
 	}
 
 	else if(cantidaddelamparas==4) // punto C
 	{

 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			case "FelipeLamparas":
 			descuento=0.75;
 			break;

 			default:
 			descuento=0.80;
 		}


 	}

 	else if(cantidaddelamparas==3) // punto D
 	{
 	
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			descuento=0.85;
 			break;
 			case "FelipeLamparas":
 			descuento=0.90;
 			break;
 			default:
 			descuento=0.95;
 		}


 	}

 	else
 	{
 		descuento=1;
 		
 	}


preciofinal=preciobruto*descuento;


if(preciofinal>120)

{

	IIBB=preciofinal*10/100;

	preciofinal=preciofinal+IIBB;
	
	alert("Usted pago "+preciofinal+" siendo "+IIBB+" el impuesto que se pagó");



}


document.getElementById('precioDescuento').value=preciofinal;

*/


}


