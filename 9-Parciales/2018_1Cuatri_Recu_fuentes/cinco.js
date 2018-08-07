function mostrar()
{

var diadelasemana;
diadelasemana=prompt("Ingrese un dia de la semana");


switch(diadelasemana)
{
	case "lunes":
	case "martes":
	case "miercoles":
	case "jueves":
	case "viernes":
	mensaje="A trabajar";
	break;
	case "sabado":
	case "domingo":
	mensaje="Buen finde";
	break;
	default:
	mensaje="No es un día válido";
	break;

}

alert(mensaje);













}
