/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

var sueldo;
var diezporcientodelsueldo;
var resultado;

sueldo=document.getElementById('sueldo').value;

sueldo=parseInt(sueldo);

diezporcientodelsueldo=(sueldo*10/100);

resultado=(sueldo+diezporcientodelsueldo);

alert("RESULTADO "+resultado);





	
}
