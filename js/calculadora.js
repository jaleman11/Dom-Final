function sumar(){
    // declarar las variables num1,num2

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    // mostrar resultado ene l input con el id resultado
    document.getElementById("resultado1").value = num1 + num2;
}

function restar(){

    
    let resta1 = Number(document.getElementById("num1").value);
    let resta2 = Number(document.getElementById("num2").value);

    // mostrar resultado ene l input con el id resultado
    document.getElementById("resultado1").value = resta1 - resta2;
}
function multi(){
    // declarar las variables num1,num2

    let multi1 = Number(document.getElementById("num1").value);
    let multi2 = Number(document.getElementById("num2").value);

    // mostrar resultado ene l input con el id resultado
    document.getElementById("resultado1").value = multi1 * multi2;
}

function divi(){

    
    let divi1 = Number(document.getElementById("num1").value);
    let divi2 = Number(document.getElementById("num2").value);

    // mostrar resultado ene l input con el id resultado
    document.getElementById("resultado1").value = divi1 / divi2;
}