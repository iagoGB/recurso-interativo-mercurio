var room;
var img;

var bckg,darkBckg;
var time = 0;
var show;
var soundIntro, soundSwitch;
var texto;
var arquivos;
var conteudo = [];
var vetorPerguntas = [];
var idConteudo;
var idTrilha;
var comecaAndar = false; // movimenta Carta trilha
var cont = 0;
var estadoAtual = 0;
var showTrilha = "";
var index;
var fade = false;
var aOut = 0; // variavel que acrescenta fading
var next;
var logo,logo2 // variaveis que guardam as logos
var al = 0; // contador de tempo das logos
var as = 0;
var contOut = 0;
var cardJogos, cardSistema,smdog, fonteTexto, fonteQuiz;
var textSmdog0, textoSmdog1;
var cardJogos0, cardJogos1,cardSistema0,cardSistema1, cardAV0,cardAV1, cardDesign0,cardDesign1;
var trilha0, trilha1,trilha2,trilha3, index0, index1, index2,toQuiz,toQuiz1,toCard,toCard1,bVoltar1, bVoltar2, avancar0, avancar1;
var info, imgRes0,imgRes1,introQuiz,rQuiz;

function preload(){
	//FONTES
	fonteTexto = loadFont("text/AUGUSTUS.TTF");
	fonteQuiz = loadFont("text/calibril.ttf");

	//LOGOS
	logo = loadImage("images/logos/entrada.png");
	logo2 = loadImage("images/logos/pixieApresenta.png");
	logo3 = loadImage("images/logos/mercurio.png");


	//ANIMATION/IMAGES
	bckg = loadImage("images/backgrounds/background.png");
	darkBckg = loadImage("images/backgrounds/darkBackground.png");
	button0 = loadImage("images/buttons/avancar/avancar000.png");
	button1 = loadImage("images/buttons/avancar/avancar001.png");
	//dogRunning = loadAnimation("images/dog/dog001.png","images/dog/dog009.png");
	smdog = loadImage("images/dog/smdog.png");
	textoSmdog = loadImage("images/dog/textoSmdog.png");
	textoSmdog0 = loadImage ("images/dog/introSmdog000.png");
	textoSmdog1 = loadImage ("images/dog/introSmdog001.png");

	///CARDS ///
	cardJogos0 = loadImage("images/cards/cardJogos000.png");
	cardJogos1 = loadImage("images/cards/cardJogos001.png");
	cardSistema0 = loadImage("images/cards/cardSistema000.png");
	cardSistema1 = loadImage("images/cards/cardSistema001.png");
	cardAV0 = loadImage("images/cards/cardAV000.png");
	cardAV1 = loadImage("images/cards/cardAV001.png")
	cardDesign0 = loadImage("images/cards/cardDesign000.png");
	cardDesign1 = loadImage("images/cards/cardDesign001.png");
	//texto = loadImage("images/texto.png");

	///BUTTONS///
		//trilha//
	trilha0 = loadImage("images/buttons/3/trilhaButton000.png");
	trilha1 = loadImage("images/buttons/3/trilhaButton001.png");
	trilha2 = loadImage("images/buttons/3/trilhaButton002.png");
	trilha3 = loadImage("images/buttons/3/trilhaButton003.png");
		//Index//
	index0 = loadImage("images/buttons/2/indicador000.png");
	index1 = loadImage("images/buttons/2/indicador001.png");
	index2 = loadImage("images/buttons/2/indicador002.png");
		//Escolhas//
	toQuiz = loadImage("images/buttons/escolha/quiz.png");
	toQuiz1 = loadImage("images/buttons/escolha/quizSelec.png");
	toCard = loadImage("images/buttons/escolha/trilha.png");
	toCard1 = loadImage("images/buttons/escolha/trilhaSelec.png");
	toCredits = loadImage("images/buttons/escolha/cred.png");
	toCredits1 = loadImage("images/buttons/escolha/credSelec.png");
	seta0 = loadImage("images/buttons/escolha/seta0.png");
	seta1 = loadImage("images/buttons/escolha/seta1.png");
		//Voltar
	bVoltar1 = loadImage("images/buttons/voltar/voltar000.png");
	bVoltar2 = loadImage("images/buttons/voltar/voltar001.png");
		//Avançar
	avancar0 = loadImage("images/buttons/avancar/avancar000.png");
	avancar1 = loadImage("images/buttons/avancar/avancar001.png");

	///	INFORMAÇÕES///	
	info = loadImage("images/infos/info.png");
			//AUDIOVISUAL
	infoava1 = loadImage("images/infos/avArtigos/aav.png");
	infoava2 = loadImage("images/infos/avArtigos/aav01.png");
	infoavg1 = loadImage("images/infos/avGrupos/avg000.png");
	infopav1 = loadImage("images/infos/avProjetos/pav000.png");
			//DESIGN
	infodg1 = loadImage("images/infos/designGrupos/gd1espacoilustrado.png");
	infodg2 = loadImage("images/infos/designGrupos/gd2geux.png");
	infodp1 = loadImage("images/infos/designProjetos/pd000.png");
			//JOGOS
	infojg1 = loadImage("images/infos/jogosGrupos/gj1tejo.png");
	infojg2 = loadImage("images/infos/jogosGrupos/gj2igrejota.png");
	infoja1 = loadImage("images/infos/jogosArtigos/artigosJogos1.png");
	infopj1 = loadImage("images/infos/jogosProjetos/pj000.png");
			//SISTEMAS
	infosa = loadImage("images/infos/sistemasArtigos/artigossistema1.png");
	infosg1 = loadImage("images/infos/sistemasGrupos/sg000.png");
	infosp1 = loadImage("images/infos/sistemasProjetos/sp000.png");

	//QUIZ
	introQuiz = loadImage("images/quiz/introQuiz000.png");
	imgRes0 = loadImage("images/quiz/botaoResposta000.png");
	imgRes1 = loadImage("images/quiz/botaoResposta001.png");
	rQuiz = loadImage("images/quiz/resultadoQuiz.png");


	///SOUNDS
	soundSwitch = loadSound("sounds/magicSound2.wav");
	soundSwitch2 = loadSound("sounds/magicSound3.wav");
	soundQuiz = loadSound("sounds/Good_Starts.mp3");
	//bckgSound = loadSound("sounds/backgroundSound.mp3");

	///TEXT FILES

	arquivos = loadJSON("index.json");

	//CREDITOS
	credito0 = loadImage("images/infos/creditos/credits.png");
	credito1 = loadImage("images/infos/creditos/credits2.png");

};



function setup( ){
	createCanvas (1200,800);
	vetorConteudo();
	soundSwitch.setVolume(0.09);
	soundSwitch2.setVolume(0.09);
	soundQuiz.setVolume(0.5);
	vetorEscolha = [cardAV0,cardDesign0,cardJogos0,cardSistema0];
	room ="intro";
};

function draw( ){
	telaAtual();
};

function telaAtual(){
	switch (room){
		case "intro":
			intro();
		break;

		case "intro2":
			intro2();
		break;

		case "intro3":
			intro3();
		break;

		case "inicio":
			tela0();
		break;

		case "tela1":
			tela1();
		break;

		case "tela2":
			tela2();
		break;

		case "tela3":
			tela3();
		break;

		case "quiz":
			telaQuiz();
		break;

		case "creditos":
			telaCreditos();
		break;
	};

	time +=1;
	if (time < 60){
		//text("Espere!",100,100);
	};
};

function mousePressed(){
	if (time >= 60){
		if (yPos <= 150){
			/*switch (room){
				case "inicio":
					soundSwitch.play();
					room = "tela1";
					time = 0;
				break;
			}; */
			if (sh > 0){
				sh -= 10;
			}
		}
	};
};



function vetorConteudo(){
	conteudo =
	[
		audiovisual = 
		{ // Conteudo 0
			trilha:
			[	// trilha 0 - artigos
				{
					index: [infoava1,info,"        HQs",""]
				},

			    { //trilha 1 - grupos
					index: [infoavg1,info,"  Smdrama",""]
				},

			    { //trilha 2 - projetos
					index: [infopav1, info,"    Direitos",""]
				}
			]
		},

		design = 
		{ // Conteudo 1
			trilha:
			[	// trilha 0 - artigos
				{
					index: [info,info, "", ""]
				},

				{ //trilha 1 - grupos
					index: [infodg1,infodg2,"   Espaço I","      Geux"]
				},

				{ //trilha 2 - projetos
					index: [infodp1,info,"   Athena",""]
					//projetos de design a , projetos de design b
				}
			]
		},

		jogos = 
		{ // Conteudo 2
			trilha:
			[	// trilha 0 - artigos
				{
					index: [infoja1,info,"Analógicos",""]
					// artigos de jogos a , artigos de jogos b
				},

				{ 	//trilha 1 - grupos
					index: [infojg2,infojg1,"   Igrejota","       Tejo"]
					//grupos de jogo a , grupos de jogos b
				},

				{ 	//trilha 2 - projetos
					index: [infopj1,info,"   Filosofia",""]
					//projetos de jogos a, projetos de jogos b
				}
			]
		},

		sistemas =
		{ // Conteudo 3
			trilha:
			[	// trilha 0 - artigos
				{
					index: [infosa,info," Softwares",""]
				},

				{ //trilha 1 - grupos
					index: [infosg1,info,"       LAM",""]
				},

				{ //trilha 2 - projetos
					index: [infosp1,info,"    Nuvem",""]
				}
			]
		}
	];
};

function intro(){
	background(logo);
	time++;
	if (time >= 160){
		fade = true;
		time = 0;
		next = "intro2";
	};

	if (fade){
    	fadingOut(next);
  	};
};


function intro2(){
	background(logo2);
	time++;
	if (time >= 300){
		fade = true;
		time = 0;
		next = "intro3";
	};

	if (fade){
    	fadingOut(next);
  	};
};


function intro3(){
	background(logo3);
	time++;
	if (time >= 550){ //550
		fade = true;
		time = 0;
		next = "inicio";
	};

	if (fade){
    	fadingOut(next);
  	};
};
