function mostrar()
{

var planta;
var mensaje;


planeta=prompt("Ingrese un planeta del sistema solar");

switch(planeta)
{

	case "tierra":
	mensaje="Aca vivimos";
	break;

	case "venus":
	case "mercurio":
	mensaje="Aca hace mas calor";
	break;

	case "marte":
	case "jupiter":
	case "saturno":
	case "urano":
	case "neptuno":
	case "pluton":
	mensaje="Aca hace mas frio"; 
	break;

	default:
	mensaje="Ingrese un planeta valido";

}

alert(mensaje);



































/*
var planetasolar;

planetasolar=prompt("ingrese el nombre de un planeta del sistema solar");


switch(planetasolar)	// variables enteras o no
{
	case "tierra" :
	
		alert("Acá vivimos");
		break;
		
	case "venus" : 		

		alert("Acá hace mas calor");
		break;

	case "mercurio" :
		alert("Acá hace mas calor");
		break;

	case "marte" :
		alert("Acá hace mas frío");
		break;

	case "jupiter" :
		alert("Acá hace mas frío");
		break;

	case "saturno" :
		alert("Acá hace mas frío");
		break;

	case "urano" :
		alert("Acá hace mas frío");
		break;

	case "neptuno" :
		alert("Acá hace mas frío");
		break;

	case "pluton" :
		alert("Acá hace mas frío");	
		break;

	default : 
		alert("Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).");		

}
*/



}
