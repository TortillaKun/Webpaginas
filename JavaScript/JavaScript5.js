<!DOCTYPE html>
<html>
<head>
    <title>juan sebastian lerma cebreros</title>
</head>
<body>

Peso (kg): <input type="text" id="peso"><br>
Altura (m): <input type="text" id="altura"><br><br>

<button onclick="calcular()">Calcular IMC</button>

<p id="resultado"></p>

<script>
function calcular(){
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    var imc = peso / (altura * altura);
    var grado = "";

    if(imc < 18.5){
        grado = "Bajo peso";
    }else if(imc < 25){
        grado = "Normal";
    }else if(imc < 30){
        grado = "Sobrepeso";
    }else{
        grado = "Obesidad";
    }

    document.getElementById("resultado").innerHTML = "IMC: " + imc + " - " + grado;
}
</script>

</body>
</html>