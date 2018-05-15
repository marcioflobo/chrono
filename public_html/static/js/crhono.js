   //declaração de variáveis
            var segundo = 0 + "0";
            var minuto = 0 + "0";
            var hora = 0 + "0";
            var rodar = true;
 function tempo() {
                //função que faz o cronometro de pausa excedida funcionar
            
        if (segundo == 0 && minuto == 0 && hora == 0) {
                    parar = setInterval('tempo()', 1000);
                }

                if (segundo < 59) {
                    segundo++;

                    if (segundo < 10) {
                        segundo = "0" + segundo;
                    }
                } else

                if (segundo == 59 && minuto < 59) {

                    segundo = 0 + "0";
                    minuto++;

                    if (minuto < 10) {
                        minuto = "0" + minuto;
                    }

                }
                document.formRelogio.cronometro.value = hora + ":" + minuto + ":" + segundo;
                
            }
        
        