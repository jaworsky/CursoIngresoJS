function mostrar()
{

/* jose M 25
MARIA F 16
JESUS M 33
FER F 81
*/



/*
var nota1;
var nota2;
var nota3;
var nota4;
var nota5;

var sexo1;
var sexo2;
var sexo3;
var sexo4;
var sexo5;

var promediototal;



nota1=prompt("ingrese la nota 1");
nota2=prompt("ingrese la nota 2");
nota3=prompt("ingrese la nota 3");
nota4=prompt("ingrese la nota 4");
nota5=prompt("ingrese la nota 5");

sexo1=prompt("ingrese el sexo del alumno 1");
sexo2=prompt("ingrese el sexo del alumno 2");
sexo3=prompt("ingrese el sexo del alumno 3");
sexo4=prompt("ingrese el sexo del alumno 4");
sexo5=prompt("ingrese el sexo del alumno 5");

nota1=parseInt(nota1);
nota2=parseInt(nota2);
nota3=parseInt(nota3);
nota4=parseInt(nota4);
nota5=parseInt(nota5);
promediototal=parseInt(promediototal);



if (nota1>=1 && nota1<10)
{
	nota1=nota1;
}
else
{
	alert("ERROR ingrese una nota 1 entre 0 y 10");
}

if (nota2>=1 && nota2<10)
{
	nota2=nota2;
}
else
{
	alert("ERROR ingrese una nota 2 entre 0 y 10");
}
if (nota3>=1 && nota3<10)
{
	nota3=nota3;
}
else
{
	alert("ERROR ingrese una nota 3 entre 0 y 10");
}
if (nota4>=1 && nota4<10)
{
	nota4=nota4;
}
else
{
	alert("ERROR ingrese una nota 4 entre 0 y 10");
}
if (nota5>=1 && nota5<10)
{
	nota5=nota5;
}
else
{
	alert("ERROR ingrese una nota 5 entre 0 y 10");
}

if (sexo1=="m" || sexo1=="f")
{
	sexo1=sexo1;
}
else
{
	alert("ERROR Ingrese el sexo 1 como (m) para masculino o (f) para femenino");
}


if (sexo2=="m" || sexo2=="f")
{
	sexo2=sexo2;
}
else
{
	alert("ERROR Ingrese el sexo 2 como (m) para masculino o (f) para femenino");
}


if (sexo3=="m" || sexo3=="f")
{
	sexo3=sexo3;
}
else
{
	alert("ERROR Ingrese el sexo 3 como (m) para masculino o (f) para femenino");
}


if (sexo4=="m" || sexo4=="f")
{
	sexo4=sexo4;
}
else
{
	alert("ERROR Ingrese el sexo 4 como (m) para masculino o (f) para femenino");
}


if (sexo5=="m" || sexo5=="f")
{
	sexo5=sexo5;
}
else
{
	alert("ERROR Ingrese el sexo 5 como (m) para masculino o (f) para femenino");
}



promediototal=(nota1+nota2+nota3+nota4+nota5)/5;

alert("El promedio total de las notas es "+promediototal);

*/




/*  EJERCICIO ECHO DEL PIZARRON


	var contadordeMujeres;
	var contadordeHombres;
	var contadordeMayoresdeedad;
	var contadordeMenoresdeedad;
	var nombre;
	var sexo; // validarlo.
	var edad; //0 y 100
	var contador;
	var edadmasBaja;
	var edadmasAlta;
	var acomuladordeedaddemujeres;
	var promediodeedaddemujeres;
	var promediodeedaddehombres;
	var acomuladordeedaddehombres;
	var promediodeedadtotal;
	var nombredelmasviejo;
	var nombredelmasjoven;
	var sexodelmasviejo;
	var edaddelamujermasvieja;



	acomuladordeedaddehombres=0;
	promediodeedaddehombres=0;
	promediodeedaddemujeres=0;
	acomuladordeedaddemujeres=0;
	contador=0;
	contadordeMujeres=0;
	contadordeHombres=0;
	contadordeMenoresdeedad=0;
	contadordeMayoresdeedad=0;
	promediodeedaddemujeres=0;

	while(contador<4)
	{
	contador=contador+1;

	nombre=prompt("Ingrese el nombre");
	sexo=prompt("ingrese el sexo");

		while(sexo!="m" && sexo!="f")
	{
			sexo=prompt("Ingrese el sexo como f o m");

	}

	edad=prompt("Ingrese la edad");
	edad=parseInt(edad);

	while(isNaN(edad) || edad<0 || edad>100)
	{
		edad=prompt("ingrese la edad con números entre 0 y 100");
		edad=parseInt(edad);
	}

	if(sexo=="m")
	{
		contadordeHombres=contadordeHombres+1;
		acomuladordeedaddehombres=acomuladordeedaddehombres+edad;

	}
	else 
	{
		contadordeMujeres=contadordeMujeres+1;
		acomuladordeedaddemujeres=acomuladordeedaddemujeres+edad;

	}


	if(edad>=18)
	{
		contadordeMayoresdeedad=contadordeMayoresdeedad+1;
	}
	else
	{
		contadordeMenoresdeedad=contadordeMenoresdeedad+1;
	}

	if(contador==1) // en el primer ingreso, no sabemos si puede ser el mayor. entonces lo agregamos tambien para el primer ingreso
	{
		maximo=edad;
		minimo=edad;
		edadmasAlta=edad;
		nombredelmasviejo=nombre;
		sexodelmasviejo=sexo;

	}
	else 
	{
		if(edad>maximo)
		{
			edadmasAlta=edad;
			nombredelmasviejo=nombre;
			sexodelmasviejo=sexo;
		}
	

		if(edad<minimo)
		{		
			edadmasBaja=edad;
			nombredelmasjoven=nombre;

		}
	}
	if(contadordeMujeres==1)
	{

		edaddelamujermasvieja=edad;

	}
	else
	{

		if(edad>edaddelamujermasvieja)
		{
			edaddelamujermasvieja=edad;
		}

	}




}


promediodeedaddemujeres=acomuladordeedaddemujeres/contadordeMujeres;
promediodeedaddehombres=acomuladordeedaddehombres/contadordeHombres;

promediodeedadtotal=(acomuladordeedaddehombres+acomuladordeedaddemujeres)/contador;



document.write("La cantidad de hombres es: "+contadordeHombres+"<br>");
document.write("La cantidad de mujeres es: "+contadordeMujeres+"<br>");
document.write("La cantidad de mayores de edad es: "+contadordeMayoresdeedad+"<br>");
document.write("La cantidad de menores de edad es: "+contadordeMenoresdeedad+"<br>");
document.write("La edad mas baja es: "+edadmasBaja+"<br>");
document.write("La edad mas alta es: "+edadmasAlta+"<br>");
document.write("El promedio de edad de las mujeres es: "+promediodeedaddemujeres+"<br>");
document.write("El promedio de edad de los hombres es: "+promediodeedaddehombres+"<br>");
document.write("El promedio de edad total es de: "+promediodeedadtotal+"<br>");
document.write("Nombre del mas viejo: "+nombredelmasviejo+"<br>");
document.write("Nombre del mas joven: "+nombredelmasjoven+"<br>");
document.write("El sexo del mas viejo es: "+sexodelmasviejo+"<br>");
document.write("La edad de la mujer mas vieja es: "+edaddelamujermasvieja+"<br>");

*/

var nota;
var sexo;
var promediodenotastotales;
var sumadenotas;
var notamasbaja;
var sexodelapersonamasbaja;
var varonesconnotamayoroiguala6;

notamasbaja=0;
sumadenotas=0;
contador=0;
promediodenotastotales=0;
varonesconnotamayoroiguala6=0;

while(contador<5)

{
	contador=contador+1;
	nota=prompt("Ingrese la nota");
	nota=parseInt(nota);

	while(isNaN(nota) || nota<0 || nota>10)
	{
	nota=prompt("Ingrese la nota entre 0 y 10");
	nota=parseInt(nota);
	}

	sexo=prompt("Ingrese el sexo");
	
	while(sexo!="m" && sexo!="f")
		{
			sexo=prompt("Ingrese el sexo como m o f");

		}




sumadenotas=sumadenotas+nota;

if(contador==1)
{
	notamasbaja=nota;
	sexodelapersonamasbaja=sexo;

}
else
{
	if(nota<notamasbaja)
	{
		notamasbaja=nota;
		sexodelapersonamasbaja=sexo;
	}


}

if(nota>=6 && sexo=="m")

{
varonesconnotamayoroiguala6=varonesconnotamayoroiguala6+1;
}


}


promediodenotastotales=sumadenotas/contador;

alert("El promedio de las notas totales es: "+promediodenotastotales);
alert("La nota mas baja es: "+notamasbaja+" Y su sexo es: "+sexodelapersonamasbaja);
alert("Cantidad de varones que su nota haya sido mayor o igual a 6 :"+varonesconnotamayoroiguala6);


}

/*								
// promedio de edad mujeres ok
promedio de hombres ok
promedio de edad total
nombre del mas viejo
nombre de mas joven
sexo del mas viejo
nombre de la mujer mas vieja



prueba de escritorio		4 personas	sexo	edad
				
		jose	m	25
		maria	f	15
		jesus	m	33
		fer	f	81
				
promedio de edad de mujeres: 			48	ok
promedio de edad de hombres:			29	ok
promedio de edad total:			38,5	ok
nombre del mas viejo:			fer	ok
nombre del mas joven:			maria	ok
sexo del mas viejo:			f	ok
nombre de la mujer mas vieja:			fer	



*/