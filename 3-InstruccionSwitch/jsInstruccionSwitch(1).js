function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

/* evalua una variable, swtich(variable) utiliza una igualdad estricta, compara los tipos de variables "===" despues los valores
{
	case 1:
	codigo a ejectuar
	break;
	
	default: como el else del if

}

*/

switch (mesDelAño)
{
	case "Enero" :
	alert("Que comiences bien el año!!!.");
	break;

	case "Marzo" :
	alert("a clases");
	break;

	case"Julio":
	alert("se vienen las vacaciones");
	break;

	case"Diciembre":
	alert("Felices Fiestas");
	break;


}


} //FIN DE LA FUNCIÓN