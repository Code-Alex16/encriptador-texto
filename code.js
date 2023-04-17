function validacion_texto() {
	const valido = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
	let entrada = document.getElementById('in').value;
	let letra = '';
	var dato = false;
	for(let i = 0; i<entrada.length; i++){
		letra = entrada[i];
		if(!valido.includes(letra)){
			dato = true;
		}
	}
	return dato
}

function vacio(){
	let entradas = document.getElementById('in').value
	if(entradas === ""){
		return true
	}
	return false
}

function encriptar() {
	if(validacion_texto()){
		return alert('lo sentimos, el dato ingresado no esta permitido');
	}
	if(vacio()){
		return alert('no se ha encontrado ningun texto')
	}
	var mensaje = document.getElementById('in');
	var mensaje_entrada = mensaje.value;
	let encriptacion = mensaje_entrada
	.replaceAll('e','enter')
	.replaceAll('i','imes')
	.replaceAll('a','ai')
	.replaceAll('o','ober')
	.replaceAll('u','ufat');

	let mensaje_salida = document.getElementById('out');
	mensaje_salida.value = encriptacion;

	mensaje.value = " ";
	mensaje.focus();
}

function desencriptar() {
	if(validacion_texto() == true){
		return alert('lo sentimos, el dato ingresado no esta permitido')
	}
	if(vacio()){
		return alert('no se ha encontrado ningun texto')
	}
	var input = document.getElementById('in');
	var input_entrada = input.value;
	let desencriptacion = input_entrada
	.replaceAll('enter','e')
	.replaceAll('imes','i')
	.replaceAll('ai','a')
	.replaceAll('ober','o')
	.replaceAll('ufat','u');

	let mensaje_salida = document.getElementById('out');
	mensaje_salida.value = desencriptacion;

	input.value = '';
	input.focus();
}

function copiar() {
	let mensaje_copiado = document.getElementById('out');
	let clipboard = mensaje_copiado.value;
	if(clipboard === ""){
		return alert('no se ha encontrado ningun dato para copiar')
	}else{
		navigator.clipboard.writeText(clipboard);
		alert('Informacion copiada en el portapapeles, correctamente');
		mensaje_copiado.value = '';
	}
}
