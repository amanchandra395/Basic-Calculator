
let resultEL = document.getElementById("result")

function add() {
    var x, y, z;
    x = Number( document.getElementById("num1").value );
    y = Number( document.getElementById("num2").value );
    z = x + y;
    
    resultEL.innerText = "Result : " + z
    
}

function subtract()
{
    var x, y, z;
    x = Number( document.getElementById("num1").value );
    y = Number( document.getElementById("num2").value );
    z = x - y;
    
    resultEL.innerText = "Result : " + z
}

function multiply()
{
    var x, y, z;
    x = Number( document.getElementById("num1").value );
    y = Number( document.getElementById("num2").value );
    z = x * y;
    
    resultEL.innerText = "Result : " + z
}

function divide()
{
    var x, y, z;
    x = Number( document.getElementById("num1").value );
    y = Number( document.getElementById("num2").value );
    z = x / y;
    
    resultEL.innerText = "Result : " + z
}