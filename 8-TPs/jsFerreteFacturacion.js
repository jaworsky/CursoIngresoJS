/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
var numero1;
var numero2;
var numero3;
var suma;

numero1=document.getElementById('PrecioUno').value;
numero2=document.getElementById('PrecioDos').value;
numero3=document.getElementById('PrecioTres').value;

numero1=parseInt(numero1);
numero2=parseInt(numero2);
numero3=parseInt(numero3);

suma=(numero1+numero2+numero3);

alert("La suma es "+suma);



}


function Promedio () 
{
	
var numero1;
var numero2;
var numero3;
var suma;
var promedio;

numero1=document.getElementById('PrecioUno').value;
numero2=document.getElementById('PrecioDos').value;
numero3=document.getElementById('PrecioTres').value;

numero1=parseInt(numero1);
numero2=parseInt(numero2);
numero3=parseInt(numero3);

suma=(numero1+numero2+numero3);

promedio=(suma/3);

alert("El promedio es "+promedio);

}


function PrecioFinal () 
{
	
var numero1;
var numero2;
var numero3;
var suma;
var iva;
var preciofinal;

numero1=document.getElementById('PrecioUno').value;
numero2=document.getElementById('PrecioDos').value;
numero3=document.getElementById('PrecioTres').value;

numero1=parseInt(numero1);
numero2=parseInt(numero2);
numero3=parseInt(numero3);

suma=(numero1+numero2+numero3);

iva=(suma*21/100);

preciofinal=(suma+iva);

alert("El precio final es "+preciofinal);


}