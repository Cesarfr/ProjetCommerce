<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ejemplo Validate PHP</title>
</head>
<body>
	<?php 
		$mailM='ejemplo.258@mail.com.mx';
		$ma='bogus';
		if (filter_var($mailM, FILTER_VALIDATE_EMAIL)) {
			echo "Esta direccion de correo ($mailM) es valida";
		}
		echo "<br>";
		if (filter_var($ma, FILTER_VALIDATE_EMAIL)) {
			echo "Esta direccion de correo ($mailM) es valida";
		}
		echo "<br>";
		if (!preg_match('/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/', $mailM)) {
			echo "Esta direccion de correo ($mailM) es invalida";
		}else{
			echo "Esta direccion de correo ($mailM) es valida";
		}

		#$opciones=array('options' => array('default'=>3, 'min_range'=>0), 'flags' =>FILTER_FLAG_ALLOW_OCTAL,);

		#var_dump(filter_var('ejemplo.258@mail.com', FILTER_VALIDATE_EMAIL));
	 ?>
</body>
</html>