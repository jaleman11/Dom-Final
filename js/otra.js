function calcularPresupuesto(){
    let numinv = Number(document.getElementById("numero-inv").value);
    let coscom = Number(document.getElementById("cost-comida").value);
    let cosbeb = Number(document.getElementById("cost-bebida").value);
    let cosdec = Number(document.getElementById("cost-decor").value);
    let cosmus = Number(document.getElementById("cost-musica").value);
    let propina= Number(document.getElementById("propina-porc").value);
    
    document.getElementById("comida-total-s").innerText = numinv * coscom;
    document.getElementById("bebida-total-s").innerText = numinv*cosbeb;
    document.getElementById("decoracion").innerText = cosdec;
    document.getElementById("musica").innerText = cosmus;
    
    let subtotal = Number(document.getElementById("subtotal").value);
    subtotal = (numinv*coscom)+(numinv*cosbeb)+cosdec+cosmus;
    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("propina").innerText = subtotal*(propina/100);

    document.getElementById("total-general").innerText = subtotal+propina;
    document.getElementById("costo-inv").innerText = (subtotal+propina)/numinv;
}