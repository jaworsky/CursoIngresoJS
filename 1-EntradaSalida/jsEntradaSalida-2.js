/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	var nombre; // creamos una variable para guardar datos, si esta vacio dirá "undefined" 	
	//nombre = "Ariel";
	//alert(nombre); // si ponemos comillas aca, nos va a mostrar "nombre"
	nombre = prompt("ingrese su nombre" , "natalia natalia");
	alert("Su nombre es:"+nombre);

	// comentario de una linea
	/* comentario largo para tomar apuntes
	, necesita estar cerrado */

	//var person = prompt("Please enter your name", "Harry Potter"); 
	/* el prompt pide algo, tiene q tener un signo de =, se asigna de izq a derecha. 
	Esto lo sacamos de w3schools, copiamos y pegamos el ejemplo	
	*/

}

