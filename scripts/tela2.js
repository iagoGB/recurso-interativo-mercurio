var soma = 0;
var rx = [];
 rx[0] = 80;
 rx[1] = 355;
 rx[2] = 630; 
 rx[3] = 900; 
var ry1 = 250;
var sistemas = false, jogos= false, design = false, audiovisual = false;
var time = 0;

function tela2(){
	controle();
	mostrarCards();
	time += 1;
  	if (fade){
    	fadingOut(next);
  	};
};


function controle(){
	background(bckg);
	voltar = false;  	
};

function mostrarCards (){

	var tamanhoX = 220;
	var tamanhoY = 320;
	for (var i = 0; i < 4 ; i ++){
		fill(255);
		colisaoCard();
	};
};


function colisaoCard(){
	var tamanhoX = 250;
	var tamanhoY = 400;
	var tamanho = 250;

  //COLISOES
	audiovisual = collidePointRect(mouseX,mouseY,rx[0],ry1,tamanhoX,tamanhoY);
  	if (audiovisual){
   	 image(cardAV1,rx[0],ry1);
 	} else {
   	 image(cardAV0,rx[0],ry1);
    }

	design = collidePointRect(mouseX,mouseY,rx[1],ry1,tamanhoX,tamanhoY);
 	if (design){
   	 image(cardDesign1,rx[1],ry1);
  	} else {
   	 image(cardDesign0,rx[1],ry1);
  	}

	jogos = collidePointRect(mouseX,mouseY,rx[2],ry1,tamanhoX,tamanhoY);
  	if (jogos){
      image(cardJogos1,rx[2],ry1);
  	} else {
  	  image(cardJogos0,rx[2],ry1);
  	}

	sistemas = collidePointRect(mouseX,mouseY,rx[3],ry1,tamanhoX,tamanhoY);
  	if (sistemas){
      image(cardSistema1,rx[3],ry1);
  	} else {
      image(cardSistema0,rx[3],ry1);
  	}
  	voltar = collidePointRect(mouseX, mouseY,160,20,88,52);
  	if (voltar){
		image(bVoltar2,160,20);
	} else {
		image(bVoltar1,160,20);
	}

	if (mouseIsPressed){
		if (time >= 30){

			if (sistemas){
       			fade = true;
        		next = "tela3";
				show = "   Sistemas";
				time = 0;
        		idConteudo = 3;
				soundSwitch2.play();
			};

			if(jogos){
        		fade = true;
        		next = "tela3";
				show = "     Jogos";
				time = 0;
				soundSwitch2.play();
       			idConteudo = 2;
			};

			if(design){
        		fade = true;
        		next = "tela3";
				show = "     Design";
				time = 0;
				soundSwitch2.play();
        		idConteudo = 1;
			};

			if(audiovisual){
		        fade = true;
		        next = "tela3";
        		show = " AudioVisual";
				idConteudo = 0;
				time = 0;
				soundSwitch2.play();
			};

			if(voltar){
				room = "tela1";
				time = 0;
				soundSwitch2.play();
			};
		};
	};
};


function fadingOut(prox){
    fill(255,aOut);
    rect(-100,-100,width+100,height+100);
    aOut = aOut + 12;

    if (aOut >= 400){
      aOut = 0;
      fade = false;
      sai = 0; // pro cachorro voltar pro lugar
	  room = prox; // para resetar o cachorro falando quando entrar no quiz
      fill(0);
    };
    
	if (soundQuiz.isPlaying()){
		soundQuiz.stop();
	};
};
