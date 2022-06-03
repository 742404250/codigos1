alert("BIENVENIDO A LA TELEFONICA  FORTEC")

let empresa=prompt("INGRESE A LA EMPRESA DESEA LLAMAR: ");
let minutos=parseFloat(prompt("INGRESE LOS  MINUTOS QUE DESEA HABLAR: "));
alert("fijo:0.20$ claro:0.40$ movistar:0.60$ entel:1$")
let costo=parseFloat(prompt("INGRESE COSTO DE MINUTO DE EMPRESA QUE DESEA HABLAR: "));
let fijo=0.20;
let claro=0.40;
let movistar=0.60;
let entel=1;
let total=costo*minutos;

if(fijo=minutos*0.20){
    document.write(`LA EMPRESA QUE SE COMUNICO ES: ${empresa} <br>
    COSTO POR MINUTO: ${costo} <br>
    LOS MINUTOS SOLICITADO: ${minutos} <br>
    TOTAL A PAGAR ES: ${total}`);
}else if(claro=minutos*0.40){
    document.write(`LA EMPRESA QUE SE COMUNICO ES: ${empresa} <br>
    COSTO POR MINUTO: ${costo} <br>
    LOS MINUTOS SOLICITADO: ${minutos} <br>
    TOTAL A PAGAR ES: ${total}`);
}else if(movistar=minutos*0.60){
    document.write(`LA EMPRESA QUE SE COMUNICO ES: ${empresa} <br>
    COSTO POR MINUTO: ${costo} <br>
    LOS MINUTOS SOLICITADO: ${minutos} <br>
    TOTAL A PAGAR ES: ${total}`);
}else if(entel=minutos*1){
    document.write(`LA EMPRESA QUE SE COMUNICO ES: ${empresa} <br>
    COSTO POR MINUTO: ${costo} <br>
    LOS MINUTOS SOLICITADO: ${minutos} <br>
    TOTAL A PAGAR ES: ${total}`);
}