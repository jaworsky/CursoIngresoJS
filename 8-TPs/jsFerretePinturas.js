/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	var temperaturaingresada;
	var temperaturaencelsius;

	temperaturaingresada=document.getElementById('Temperatura').value;
	temperaturaingresada=parseInt(temperaturaingresada);

	temperaturaencelsius=(temperaturaingresada-32)*5/9;
	alert(+temperaturaingresada+" Fahrenheit son "+temperaturaencelsius+" centigrados");

}

function CentigradosFahrenheit () 
{

	var temperaturaingresada;
	var temperaturaenfarenheit;

	temperaturaingresada=document.getElementById('Temperatura').value;
	temperaturaingresada=parseInt(temperaturaingresada);

	temperaturaenfarenheit=(9/5*temperaturaingresada)+32;

	alert(+temperaturaingresada+" son "+temperaturaenfarenheit+" Fahrenheit");
	
	
}
