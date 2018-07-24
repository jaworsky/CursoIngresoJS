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

 	else if(cantidaddelamparas==4 &&(marca=="FelipeLamparas" || marca=="ArgentinaLuz"))
 	{
 		 descuento=0.75;  
 	}





document.getElementById('precioDescuento').value=preciofinal;



 }



 /*

var marca;
var cantidaddelamparas;
var precio;
var preciooriginal;
var diezporciento;

cantidaddelamparas=document.getElementById('Cantidad').value;
marca=document.getElementById('Marca').value;

precio=(cantidaddelamparas*35);
precio=parseInt(precio);

if (cantidaddelamparas>=6)
 {
	precio=precio*0.5;
	//punto A
							}

	else if (cantidaddelamparas==5 && marca=="ArgentinaLuz") 
	{
		precio=precio*0.6;
	// punto B	
	}						

		else if (cantidaddelamparas==5) // no es necesario aclarar que la marca es diferente, porque para eso esta el primer else if
		{
			precio=precio*0.7;
			//punto B terminado
		}					
 
			else if (cantidaddelamparas==4) // se pueden poner 3 variables en un else if
			{
				if (marca=="ArgentinaLuz" || marca=="FelipeLamparas")
				{
					precio=precio*0.75;
				}
					else {
						precio=precio*0.8;
					     }
					     //punto C
			}
// se podria haber echo todo junto else if(cantidadlamparas==3&&marca==felipe)
// 									else if(cantidadlamparas==3&&marca==argluz)
//									else if(cantidaddelamparas==3)
	
				else if(cantidaddelamparas==3) // punto D, entramos con else if para cantidad 3, +if+elseif+else
				{
					if(marca=="ArgentinaLuz")
					{
						precio=precio*0.85;
					}
					else if(marca=="FelipeLamparas")
					{
						precio=precio*0.90;
					}
					else
					{
						precio=precio*0.95;
					}
				}	

						

if (precio>=120)
{	

	// los ingresos brutos se calucan en base al precio final ( ya con el descuento)* modificar
	preciooriginal=(precio);
	diezporciento=(precio*10)/100;
	precio=(precio+diezporciento);
	alert("IIBB Usted pago "+preciooriginal+" ,siendo "+diezporciento+" el impuesto que se pagó");
	// punto E
}

document.getElementById('precioDescuento').value=precio;

 */