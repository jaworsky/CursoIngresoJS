function mostrar()
{

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




}
