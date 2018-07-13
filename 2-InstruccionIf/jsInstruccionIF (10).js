function mostrar()
{
	
	var notarandom;

	notarandom=Math.floor(Math.random()*(11-1))+1;

	if (notarandom>=9) {

		alert("EXCELENTE");
	}

	else if (notarandom>=4) {

		alert("APROBÓ");
	}

	else {  // el else no lleva condicion, el else if SI.

		alert("Vamos, la proxima se puede");
	}




	

}//FIN DE LA FUNCIÓN