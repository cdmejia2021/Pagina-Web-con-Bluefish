function confirmation()
{
	var answer = confirm("Eres un Humano?")
	if(answer)
	{
		alert("Que bien!");
	}
}

function confimation2()
{
	var nombre=null;
	var nombre=prompt("escribe tu nombre Por favor!","");
	
	if(nombre==null || nombre="")
	{
		alert("Ey! no has ingresado tu nombre.");
	}
	else
	{
		alert("Bienvenido, "+nombre);
	}
}