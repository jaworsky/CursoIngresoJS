
function mostrar()
{

	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("ingrese la base");
	altura=prompt("ingrese la altura");

	base=parseInt(base);
	altura=parseInt(altura);
	
	// no hace falta agregar parseInt a los resultados (perimetro y superficie)
	
	superficie=(base*altura/2);
	perimetro=(base*3);

	alert("la superficie es "+superficie+" el perimetro es "+perimetro);



}
