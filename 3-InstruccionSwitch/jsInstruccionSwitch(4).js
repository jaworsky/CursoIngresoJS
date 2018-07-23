function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	
switch(mesDelAño)
{
	case"Enero":
	case"Marzo":
	case"Mayo":
	case"Julio":
	case"Agosto":
	case"Octubre":
	case"Diciembre":
	alert("si tiene 31 días.");
	break;

	case"Abril":
	case"Junio":
	case"Septiembre":
	case"Noviembre":
	alert("si tiene 30 días. ");
	break;

	default:

	alert("si tiene 28 días. ");






}









}//FIN DE LA FUNCIÓN