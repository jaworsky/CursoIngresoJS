/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombre;
	nombre = prompt("Ingrese su nombre");
	document.getElementById('elNombre').value=nombre;
	// el documentgeybtid se puede usar de ambas formas, primero poniendo nombre=documentgetelementbyid o documentgetelementbyid=nombre. 
	/* con esto elegimos mostrar lo que guardamos en la variable nombre, en el cuadro

	*/


	
	}

