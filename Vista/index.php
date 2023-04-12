<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="script/style.css" rel="stylesheet" type="text/css">
	<title>Encriptador</title>
</head>
<body>
	<img src="../Logo.png" id="alura" class="alura">
	<input type="text" name="encriptador" id="encriptador" onkeypress="return check(event)" onkeyup="minusculas(this);" placeholder="Ingrese el texto aqui">	
	<div class="cuadrado"></div>
	<textarea id="mensaje" name="mensaje" cols="50" rows="10"></textarea>

	<button name="encriptar" id="encriptar" onclick="encriptar()">Encriptar!</button>
	<button name="desencriptar" id="desencriptar" onclick="desencriptar()">Desencriptar!</button>
	<button name="copiar" id="copiar" onclick="copiar()">Copiar</button>

</body>
</html>


<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

<script src="script/encriptador.js"></script>