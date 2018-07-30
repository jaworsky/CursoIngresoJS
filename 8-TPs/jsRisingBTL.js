/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 

var edad;
var sexo;
var estadocivil;
var sueldobruto;
var numerodelegajo;
var nacionalidad;



edad=prompt("ingrese la edad");
edad=parseInt(edad);


// PREGUNTAR COMO VALIDAR SOLO NUMEROS O SOLO TEXTO!!!!!!!!

while(edad>90 || edad<18)
{
	console.log(edad);
	alert("ingrese una edad valida: entre 18 y 90 años inclusive.");
	edad=prompt("Ingrese la edad");


}




sexo=prompt("ingrese el sexo");

while(sexo!="M" && sexo!="F")
{
	console.log(sexo);
	alert("Ingrese el sexo como M para masculino o F para femenino");
	sexo=prompt("ingrese el sexo");

}

estadocivil=prompt("Ingrese su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
estadocivil=parseInt(estadocivil);


while(estadocivil<1 || estadocivil>4)
{
	console.log(estadocivil);
	estadocivil=prompt(("Ingrese su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));


}


sueldobruto=prompt("Ingrese el sueldo bruto");

while(sueldobruto<8000)
{
	console.log(sueldobruto);
	sueldobruto=prompt("ingrese el sueldo bruto ( no menor a 8000 )");
}


numerodelegajo=prompt("Ingrese el numero de legajo (Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");


while(numerodelegajo<1000 || numerodelegajo>9999)
{
	console.log(numerodelegajo);
	numerodelegajo=prompt("Ingrese el numero de legajo (Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
}



nacionalidad=prompt("ingrese su nacionalidad (Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");

while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
{
	nacionalidad=prompt("ingrese su nacionalidad (Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");


}



document.getElementById('Edad').value=edad;
document.getElementById('Sexo').value=sexo;
document.getElementById('EstadoCivil').value=estadocivil;
document.getElementById('Sueldo').value=sueldobruto;
document.getElementById('Legajo').value=numerodelegajo;
document.getElementById('Nacionalidad').value=nacionalidad;

}
