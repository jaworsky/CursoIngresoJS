function mostrar()
{


var edad;
var estadocivil;

estadocivil=document.getElementById('estadoCivil').value;
edad=document.getElementById('edad').value;

if (edad<18 && estadocivil!="Soltero") {

// no hago nada

}

else if(edad>18 && estadocivil=="Soltero") {

	alert("Es soltero y no es menor");
}



}