<!--

window.onload = function() {
	var operar = document.getElementById('operar');
	operar.addEventListener("click", calculadora);
	
	var recargar = document.getElementById('borrar');
	recargar.addEventListener("click", borrar);
	
	var primerCampo = document.getElementById('primerValor');
	primerCampo.addEventListener("input", campoUno);
	
	var segundoCampo = document.getElementById('segundoValor');
	segundoCampo.addEventListener("input", campoDos);
}

var campoUno = function() {
	var valorUnoLleno = document.getElementById('primerValor').value;
	
	if (valorUnoLleno) {
		document.getElementById('errorPrimerValor').innerHTML = " ";
		document.getElementById('primerValor').style.outline = "1px solid #000";
		return true;
	}
}

var campoDos = function() {
	var valorDosLleno = document.getElementById('segundoValor').value;
	
	if (valorDosLleno) {
		document.getElementById('errorSegundoValor').innerHTML = " ";
		document.getElementById('segundoValor').style.outline = "1px solid #000";
		return true;
	}
}

var borrar = function() {
	window.location.reload(true);
}

var calculadora = function() {
	var valorUno = parseFloat(document.getElementById('primerValor').value);
	var valorDos = parseFloat(document.getElementById('segundoValor').value);
	var operador = document.getElementById('operador').value;
	var resultadoFinal = document.getElementById('resultado');
	var errorMensajeUno = document.getElementById('errorPrimerValor');
	var errorMensajeDos = document.getElementById('errorSegundoValor');
	var valorCampoUno = document.getElementById('primerValor');
	var valorCampoDos = document.getElementById('segundoValor');
	var resultado;
	
	if (isNaN(valorUno)) {
		var primerErrorMensaje = "Por favor ingrese un Numero!";
		errorMensajeUno.innerHTML = primerErrorMensaje;
		valorCampoUno.style.outline = "2px solid #f00";
		return false;
	} else if (isNaN(valorDos)) {
		var segundoErrorMensaje = "Por favor ingrese un Numero!";
		errorMensajeDos.innerHTML = segundoErrorMensaje;
		valorCampoDos.style.outline = "2px solid #f00";
		return false;
	}
	
	if (operador == "sumar") {
		resultado = valorUno + valorDos;
	} else if (operador == "restar") {
		resultado = valorUno - valorDos;
	} else if (operador == "dividir") {
		resultado = valorUno / valorDos;
	} else if (operador == "multiplicar") {
		resultado = valorUno * valorDos;
	}
	
	resultadoFinal.innerHTML = resultado;
}

//-->