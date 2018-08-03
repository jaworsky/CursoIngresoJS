function mostrar()
{


/*
var contador;

for (contador=1; contador<11; contador=contador+1)
{
	alert(contador);	
}

siempre deben estar los ;

1 var contador
2 contador=0
3 contador<5
4 contador=contador+1

si agregamos un break; se corta el for.


*/



// como usar el FOR: hasta el parcial se utiliza el while.

var contador;

//  divisible x 1 y por si mismo: que tenga solo 2 divisores. 7/2 7/3 7/4. if contador de dvivisores == 0 es primo. break;
// 10/5 = 0. no es primo
//  pasa una unica vez; ejecuta ; pasa al contador y vuelve a ejecutar el anterior.

contador=0;

for(;;)

{

	console.log(contador);
	 contador=contador+1;

	 if(contador==5)
	 break; 

}

console.log("final "+contador);








}