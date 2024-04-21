window.onload = function () {
    setInterval(principal, 1000 / 30);
      iniciar();
    }

    function iniciar(){

       folhaDesenho = document.getElementById("folha");
       areaDesenho = folhaDesenho.getContext("2d");
       larguraCampo = 600;
       AlturaCampo = 500;
       larguraLinha = 5;
       larguraBola = 10;
       alturaRaquete = 100;
       larguraRaquete = 11;
       efeitoRaquete = 0.3;
       velocidadeJogador2 = 8;
       Posicaojogador1 = Posicaojogador2 = 100;
       posicaoBolaX = posicaoBolaY = 10;
       velocidadeBolaPosicaoX = velocidadeBolaPosicaoY = 10;
       pontuacaoJogador1 = pontuacaoJogador2 = 0; 
   

    folhaDesenho.addEventListener('mousemove', function(e) {
      Posicaojogador1 = e.clientY - alturaRaquete / 2;
    }); 
    }
    function principal(){
      desenhar();
      calcular();
    }
    
    function desenhar (){

      areaDesenho.fillStyle ='#286047';
      areaDesenho.fillRect (0,0,larguraCampo,AlturaCampo);
      
      areaDesenho.fillStyle ='#ffffff';

      // linha do meio
      areaDesenho.fillRect (larguraCampo /2 - larguraLinha /2, 0, larguraLinha, AlturaCampo);
      
      //raquete 1 e 2
      areaDesenho.fillRect (0,Posicaojogador1,larguraRaquete,alturaRaquete);
      areaDesenho.fillRect (larguraCampo - larguraRaquete,Posicaojogador2,larguraRaquete,alturaRaquete);

      // Bola "quadrada"
      areaDesenho.fillRect (posicaoBolaX,posicaoBolaY,larguraBola,larguraBola);

      //escrever a pontuação dos jogadores
      areaDesenho.fillText("Humano - " + pontuacaoJogador1 + "pontos ", 100,100 );
      areaDesenho.fillText("maquina - " + pontuacaoJogador2 + "pontos ", larguraCampo - 200,100 );
    }

    function calcular(){
      //todo codigo do jogo
      posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX  ;
      posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;
    
            //verifica a lateral superior
      if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
      
        velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
      }
          // verifica a lateral inferior
      if (posicaoBolaY > AlturaCampo && velocidadeBolaPosicaoY > 0) {
        
        velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
      }

      if (posicaoBolaX < 0) {

          if (posicaoBolaY > Posicaojogador1 && posicaoBolaY < Posicaojogador1 + alturaRaquete) {
          velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX; 

          let diferencaY = posicaoBolaY - (Posicaojogador1 + alturaRaquete / 2);
          velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
        
        }else{

          pontuacaoJogador2++;
          
          continuar();
       
        }
      } 
      if (posicaoBolaX > larguraCampo) {
          
          if (posicaoBolaY > Posicaojogador2 && posicaoBolaY < Posicaojogador2 + alturaRaquete){
          velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

          let diferencaY = posicaoBolaY - (Posicaojogador2 + alturaRaquete / 2);
          velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;

        }else{
          pontuacaoJogador1++;
          continuar();
        }


          
      }
      
      if(Posicaojogador2 + alturaRaquete / 2 < posicaoBolaY){
          Posicaojogador2 = Posicaojogador2 + velocidadeJogador2;
      } else{
        Posicaojogador2 = Posicaojogador2 - velocidadeJogador2;

      }

    }

    function continuar(){
      posicaoBolaX = larguraCampo/2;
      posicaoBolaY = AlturaCampo/2;
      velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
      velocidadeBolaPosicaoY = 3;
    }