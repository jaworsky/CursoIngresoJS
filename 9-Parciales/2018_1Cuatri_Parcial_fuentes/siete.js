function mostrar()
{

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













}
