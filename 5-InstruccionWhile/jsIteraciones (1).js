function mostrar()
{

console.log('iteración while');

var contador;

contador=0; // incializo en 0

while(contador<10)  // elijo cuantas veces quiero que se repita la iteracion
{

	contador=contador+1; // sumarle 1, sino no sale mas
	console.log("mensaje:"+contador);
	// depende de la posicion, me suma del 0 al 4 o del 1 al 5
	alert(+contador);

}

console.log (contador);


/* explicacion de WHILE,  escribiendo una sola linea, se ejecuta varias veces
el while vuelve arriba a evaluar la condicion una y otra vez
*/






}//FIN DE LA FUNCIÓN