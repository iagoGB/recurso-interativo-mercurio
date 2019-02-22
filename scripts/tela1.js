time = 0;

function tela1(){
	background(bckg);
	fill(255);
	textSize(50);
	//text("Você esta na tela 1",380,100);
	var hit1 = false;
	var hit2 = false;
	var voltar = false;
	var creditos = false;

	//Rect esquerdo
	var x1 = 150, y1 = 280, tamanho = 383, tamanho2 = 168;
	var x2 = 650, y2 = 280;
	//rect(x1,y1,tamanho,tamanho2);
	image(toQuiz,x1,y1);

	//Rect direito
	//rect(x2,y2,tamanho, tamanho2);
	image(toCard,x2,y2);

	image(toCredits,400,500);

	//rect voltar
	//rect(50,50, 88, 52);
	image(bVoltar1,160,20);

	//verifica colisao com mouse
	hit1 = collidePointRect(mouseX,mouseY, x1,y1,tamanho,tamanho2);
	if (hit1){
		image(toQuiz1,x1,y1);
	};
	hit2 = collidePointRect(mouseX,mouseY,x2,y2,tamanho,tamanho2);
	if(hit2){
		image(toCard1,x2,y2);
	};
	//rect(400,500,100,100);
	creditos = collidePointRect(mouseX,mouseY,400,500,383,168);
	if (creditos){
		image(toCredits1,400,500)			
	};

	voltar = collidePointRect(mouseX, mouseY,160,20,88,52);
	if (voltar){
		image(bVoltar2,160,20);
	} else {
		image(bVoltar1,160,20);
	}
	//print(hit1);
	//print(hit2);



	if (mouseIsPressed){
		if (time >=30){
			if(hit1){
				//text("Voce apertou para ir ao quiz!",400,200);
				soundSwitch2.play();
				room = "quiz";
				time = 0;
				tp = 0; // Variavel para trocar pergunta
				
				fading = 0;
				dogTalking = true; // Resetar para o cachorro falar
				escolha = true;	// Variavel para escolher caso dê empate no quiz
				aT = false; // Outro texto
				//Zera os contadores das opções
				contAV = 0;
    			contDesign = 0; 
    			contJogos = 0;
    			contSistemas = 0;
    			move = 500;
				if (!soundQuiz.isPlaying()){
					soundQuiz.play();
				};
			};
			if(hit2){
				//text("Voce apertou pra ir as cartas!",400,200)
				room = "tela2";
				time = 0;
				soundSwitch2.play();
			};
			if (creditos){
				room = "creditos";
				soundSwitch2.play();
				time = 0;
			};
			if (voltar){
				//text("Voltar!",200,200);
				room = "inicio";
				time = 0;
				soundSwitch2.play();
			};

		};
	};
	time +=1;
};
