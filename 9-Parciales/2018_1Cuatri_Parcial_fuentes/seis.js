function mostrar()
{

var hora;
var mensaje;

hora=prompt("Ingrese la hora");
hora=parseInt(hora);


switch(hora)
{

	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
	mensaje="Es de mañana";
	break;

	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
	mensaje="Es de tarde";
	break;

	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	mensaje="Es de noche";
	
	if(hora<=5 && hora>=1)
	{
		mensaje=mensaje+" a dormir";
	}

	break;

	default:
	mensaje="Ingrese una hora valida";



}



alert(mensaje);


































/*
var hora;

hora=document.getElementById('laHora').value;
hora=parseInt(hora);


switch(hora)
{

	case 6:
	alert("Es de mañana");
	break;

	case 7:
	alert("Es de mañana");
	break;

	case 8:
	alert("Es de mañana");
	break;

	case 9:
	alert("Es de mañana");
	break;

	case 10:
	alert("Es de mañana");
	break;

	case 11:
	alert("Es de mañana");
	break;


	case 12:
	alert("Es de tarde");
	break;

	case 13:
	alert("Es de tarde");
	break;

	case 14:
	alert("Es de tarde");
	break;

	case 15:
	alert("Es de tarde");
	break;

	case 16:
	alert("Es de tarde");
	break;

	case 17:
	alert("Es de tarde");
	break;

	case 18:
	alert("Es de tarde");
	break;

	case 19:
	alert("Es de tarde");
	break;

	case 20:
	alert("Es de noche");
	break;

	case 21:
	alert("Es de noche");
	break;

	case 22:
	alert("Es de noche");
	break;

	case 23:
	alert("Es de noche");
	break;

	case 24:
	alert("Es de noche");
	break;


	case 1:
	alert("Es de noche");
	alert("A dormir!");
	break;

	case 2:
	alert("Es de noche");
	alert("A dormir!")
	break;

	case 3:
	alert("Es de noche");
	alert("A dormir!")
	break;

	case 4:
	alert("Es de noche");
	alert("A dormir!")
	break;

	case 5:
	alert("Es de noche");
	alert("A dormir!")
	break;

	default :
		
	alert("La hora ingresada no es valida");


}	



*/

}
