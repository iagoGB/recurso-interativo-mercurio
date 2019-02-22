var xA = 75;
var yCima = 280; 
var tp = 0;
var ra, rb, rc, rd;
var contAV = 0, contDesign = 0, contJogos = 0, contSistemas = 0;
vetorEscolha = [];
var escolha = true;
var ch,sai = 0;
var fading = 0;
var dogTalking = true, aT = true;
var move = 500;
var moveDog = 400; 
var aT = false;
per3 = 0;

function telaQuiz(){
	background(darkBckg);
	if (!soundQuiz.isPlaying()){
		soundQuiz.play();
	};
	image(smdog, 700,150);
	
	if (dogTalking){
		image(introQuiz,75,50);

		avant = collidePointRect(mouseX,mouseY,940,200,100,25);

		if (avant){
			image(button1, 940,200);
		} else {
			image(button0,940,200);
		};

		if (mouseIsPressed){
			if (avant){
				dogTalking = false;
				soundSwitch2.play();
			};
		};
	} else if (tp < 5){
		escolha = true;
		if (move > 0){
			move -= 6;
		};

		image(imgRes0, xA, yCima + move); // a
		image(imgRes0, xA, (yCima+130) + move); // b
		image(imgRes0, xA, (yCima+260) + move);// c
		image(imgRes0, xA, (yCima+390) + move);// d
		
		if (move <= 0){
			image(textoSmdog,75,50);
		}
		//image(smdog,800,150);
		colisaoRespostas();
		buildQuiz();
	} else {
		resultadoQuiz();
	};
};	


function buildQuiz(){
	if (tp < 5){
		var perg = vetorPerguntas[tp].pergunta;
		if (tp == 2){
			per3 = 15;
		} else {
			per3 = 0;
		}
						
		if (move <= 0){
			if (time > 10){
				textFont(fonteQuiz);
				fill (0);
				textSize(35);
				text(perg, 180,110);

				//Respostas
				
				

				textSize(25);
				text(vetorPerguntas[tp].respostas.a, xA+10, yCima+25+per3);
				text(vetorPerguntas[tp].respostas.b, xA+10, (yCima+130+ per3) + 25 );
				text(vetorPerguntas[tp].respostas.c, xA+10, (yCima+260+ per3) + 25 );
				text(vetorPerguntas[tp].respostas.d, xA+10, (yCima+390+ per3) + 25 );
			};
		};
	};
};

function colisaoRespostas(){
	
	if (move <= 0){
		ra = collidePointRect(mouseX,mouseY,xA,yCima,640,105);
		if (ra){
			image(imgRes1,xA,yCima-10);
		};

		rb = collidePointRect(mouseX,mouseY,xA,(yCima+130),640,105);
		if (rb){
			image(imgRes1,xA,(yCima+130)-10);
		};

		rc = collidePointRect(mouseX,mouseY,xA,(yCima+260),640,105);
		if (rc){
			image(imgRes1,xA,(yCima+260)-10);
		};

		rd = collidePointRect(mouseX,mouseY,xA,(yCima+390),640,105);
		if (rd){
			image(imgRes1,xA,(yCima+390)-10);
		};
	}

	if (move <= 0){
		if (mouseIsPressed){
			if (time > 20){
				if (ra){
					switch (tp){
						case 0:
							contDesign += 1;
						break;

						case 1:
							contSistemas += 1;
						break;

						case 2:
							contAV += 1;
						break;

						case 3:
							contAV += 1;
						break;

						case 4:
							contAV +=1;
						break;
					}
					
					tp += 1;
					time = 0;
					soundSwitch2.play();
					
				};

				if (rb){
					switch (tp){
						case 0:
							contSistemas += 1;
						break;

						case 1:
							contDesign += 1;
						break;

						case 2:
							contSistemas += 1;
						break;

						case 3:
							contJogos += 1;
						break;

						case 4:
							contSistemas +=1;
						break;
					}
					
					tp += 1;
					time = 0;
					soundSwitch2.play();
					
				};

				if (rc){
					switch (tp){
						case 0:
							contAV += 1;
						break;

						case 1:
							contJogos += 1;
						break;

						case 2:
							contJogos += 1;
						break;

						case 3:
							contSistemas += 1;
						break;

						case 4:
							contDesign +=1;
						break;
					}
					tp += 1;
					time = 0;
					soundSwitch2.play();
					
				};

				if (rd){
					switch (tp){
						case 0:
							contJogos += 1;
						break;

						case 1:
							contAV += 1;
						break;

						case 2:
							contDesign += 1;
						break;

						case 3:
							contDesign += 1;
						break;

						case 4:
							contJogos += 1;
						break;
					}
					tp += 1;
					time = 0;
				
					soundSwitch2.play();
				};
			};
		};
	};
};

function resultadoQuiz(){
	background(darkBckg);
	if (!soundQuiz.isPlaying()){
		soundQuiz.play();
	};
	image(rQuiz,380,100);
	image(smdog,700 + sai,150);
	textSize(30);
	textFont(fonteQuiz);
	if (aT){
		var texto = "Você é bem hibrido em?"+"\n"+"Que tal tentar...";		
	} else {
		var texto = "Você irá gostar da trilha de...";
	};
	text(texto, 425,160);
	/*
	
	text("tp "+ tp,50,100);
	text(time,50,50);
	text("contAV "+contAV,50,150);
	text("contDesign "+contDesign,50,180);
	text("contJogos "+contJogos,50,210);
	text("contSistemas "+contSistemas,50,240);
	*/
	if (fading < 350){
		fading += 1.5;
	}

	if((contAV > contDesign) && (contAV > contJogos) && (contAV > contJogos)){
		//Deu mais opções de audiovisual
		tint(255,fading);
		image(cardAV0,520,300);
		if (fading >= 300){
        	fade = true;
		    next = "tela3";
        	show = " AudioVisual";
			idConteudo = 0;
			time = 0;
		};
	} else

	if((contDesign > contAV) && (contDesign > contJogos) && (contDesign > contSistemas)){
		//Deu mais opções de Design
		tint(255,fading);
		image(cardDesign0,520,300);
		if (fading >= 300){
        	fade = true;
        	next = "tela3";
			show = "     Design";
			time = 0;
			idConteudo = 1;
		};
	} else 

	if((contJogos > contAV) && (contJogos > contDesign) && (contJogos > contSistemas)){
		//Deu mais opções de Jogos
		tint(255,fading);
		image(cardJogos0,520,300);
		if (fading >= 300){ 
        	fade = true;
        	next = "tela3";
			show = "     Jogos";
			time = 0;
			idConteudo = 2;
		};
	} else 

	if((contSistemas > contAV) && (contSistemas > contDesign) && (contSistemas > contJogos)){
		//Deu mais opções de Sistemas
		tint(255,fading);
		image(cardSistema0,520,300);
		if (fading >= 300){ 
        	fade = true;
        	next = "tela3";
			show = "   Sistemas";
			time = 0;
        	idConteudo = 3;
		};
	} else {
		aT = true;
		fill(120,120,120);
		//text("Vc é dificil em",200,200);

		if (escolha){
			ch = random(vetorEscolha);
			escolha = false;
		};

		switch(ch){
			case cardAV0 :
				contAV += 99;
			break;

			case cardDesign0 :
				contDesign += 99;
			break;

			case cardJogos0 :
				contJogos += 99;
			break;

			case cardSistema0 :
				contSistemas += 99;
			break;
		};

		
		//text("Escolhido:"+ ch ,100,100);
		//tint(255,fading);
		//image(ch, 520,300);
		//print(escolha);
	}

	if (fade){
		sai += 10;
    	fadingOut(next);
    }
};