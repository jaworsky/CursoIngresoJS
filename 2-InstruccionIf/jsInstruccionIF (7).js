function mostrar()
{  

var edad;
var estadocivil;

estadocivil=document.getElementById('estadoCivil').value;
edad=document.getElementById('edad').value;

if (edad<18 && estadocivil!="Soltero") {

	alert("Es muy pequeño para NO ser soltero");

}

}