<!DOCTYPE html>
<html>
<head>
    <title>juan sebastian lerma cebreros</title>
</head>
<body>

a: <input type="text" id="a"><br>
b: <input type="text" id="b"><br>
c: <input type="text" id="c"><br><br>

<button onclick="calcular()">Calcular</button>

<p id="resultado"></p>

<script>
function calcular(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    var x1 = (-b + Math.sqrt(b*b - 4*a*c)) / (2*a);
    var x2 = (-b - Math.sqrt(b*b - 4*a*c)) / (2*a);

    document.getElementById("resultado").innerHTML = "x1: " + x1 + " x2: " + x2;
}
</script>

</body>
</html>