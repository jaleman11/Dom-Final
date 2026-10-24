function calcular(){
    let horas = Number(document.getElementById("horas").value);
    let valor = Number(document.getElementById("valor").value);

    let salarioapagar = horas*valor;
    document.getElementById("resultado").value = salarioapagar;
}