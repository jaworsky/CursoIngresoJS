function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch (mesDelAño)
{

	case"Enero":
	case"Febrero":
	case"Marzo":

		alert("Ya pasamos el frio, ahora calor!!!.");
		break;

	case"Julio":
	case"Agosto":
		alert("Abrigate que hace frio.");
		break;

	case"Abril":
	case"Mayo":
	case"Junio":
		alert("Falta para el invierno.");
		break;


}



}//FIN DE LA FUNCIÓN