function mostrar()

{


var edad;

edad=document.getElementById('edad').value;
edad=parseInt(edad);


if (edad==15){

alert("niña bonita");

}


}


/* estructura IF (  "condición"  ) {
	puede ser true o false, si es true se ejecuta el codigo de la llave, si es false, continua despues de la ultima llave
	

	Operadores binarios:

	== operador de igualdad, 
	ej (edad==18)
	!= operador distinto, niega algo
	ej (!true) va a ser false
	<
	<=
	>
	>=
	=== igualdad estricta (compara los tipos de variables tambien) true="true"
	2=="2"
	booleano o string. 

	Operadores logicos: && y || (o)

	queremos mas de una condicion

	if ( edad==18 || sexo==m ) {
	
	}
	 
	else {
	

	} ( se ejecuta sino se ejecuta el if, por cada if un else, y va terminando el if)

	
	código que se va a ejecutar

} No lleva ";"


//tomo la edad  

}//FIN DE LA FUNCIÓN

*/