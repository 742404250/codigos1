///------------------hora------------------------///
const time = document.getElementById(`time`);
const date = document.getElementById(`date`);

const monthNames = ["Janury", "February", "March", "april", "may", "June", "July", "August", "September", "Octuber", "November", "December"];

const interval = setInterval(() =>{
  const local = new Date();

  let day = local.getDate(),
  month = local.getMonth(),
  year = local.getFullYear();

  time.innerHTML = local.toLocaleTimeString();
  date.innerHTML = `${day} ${monthNames[month]} ${year}`;

}, 1000);

/////-----------------cronometro-----------------------/////
var i = 0;
var Iniciar;
function Crono() {
    i++;
    var Cen = i;

    var iCen = Cen % 100;
    var iSeg = Math.round((Cen - 50) / 100);
    var iMin = Math.round((iSeg - 30) / 60);
    iSeg = iSeg % 60;

    var sCen = "" + ((iCen > 9) ? iCen : "0" + iCen);
    var sSeg = "" + ((iSeg > 9) ? iSeg : "0" + iSeg);
    var sMin = "" + ((iMin > 9) ? iMin : "0" + iMin);

    contador.innerHTML = (sMin + ":" + sSeg + ":" + sCen);
}
function IniciarCrono() {
    PausarCrono();
    contador.innerHTML = ("00:00:00");
}
function EncenderCrono() {
    if (i !== 0) { return; }
    Iniciar = setInterval(Crono, 10);
}
function PausarCrono() {
    clearInterval(Iniciar);
    i = 0;
}