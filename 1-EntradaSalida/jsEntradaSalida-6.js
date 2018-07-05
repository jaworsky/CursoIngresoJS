/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var numeroUno;
	var numeroDos;
	var resultado;

	//ctrl + D, se definen todas las variables.
	//no hay problema que se llama igual que en el html

	numeroUno=document.getElementById('numeroUno').value;
	
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('numeroDos').value;

	numeroDos=parseInt(numeroDos);



	resultado=(numeroUno+numeroDos);


	alert(resultado);

	// el signo + sirve para sumar y para concatenar, si es tecto lo concatena, si es un numero lo suma.
	/* string ( cadenas ), puede tener letras ("lala" "33" "la33") y numeros (22 33)
	sino lo transformamos con parseInt, lo toma como texto. 
	
	para chequear paso por paso como funciona el programa y como va guardando las variables, tengo que ir al chrome y presionar F12, luego en la pestaña "sources", seleccionamos nuestro js y lo probamos paso por paso. ( add breakpoint ).
	

	*/



}

