function hiddenClock(){
    
    var tempo = new Date();
    var hora = tempo.getHours();
    var minuto = tempo.getMinutes();
    var segundo = tempo.getSeconds();
    var relogio = hora + ":" + minuto + ":" + segundo;
    alert("Tempo agora: "+ relogio);
    
    document.formCrono.cronometro.value = relogio;
}

