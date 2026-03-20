<!DOCTYPE html>
<html>
<head>
    <title>juan sebastian lerma cebreros</title>
</head>
<body>

Numero 1: <input type="text" id="a"><br>
Numero 2: <input type="text" id="b"><br><br>

<button onclick="suma()">Suma</button>
<button onclick="resta()">Resta</button>
<button onclick="division()">Division</button>
<button onclick="expo()">Exponenciacion</button>

<p id="resultado"></p>

<script>
function suma(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    document.getElementById("resultado").innerHTML = a + b;
}

function resta(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    document.getElementById("resultado").innerHTML = a - b;
}

function division(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    document.getElementById("resultado").innerHTML = a / b;
}

function expo(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    document.getElementById("resultado").innerHTML = a ** b;
}
</script>

</body>
</html>