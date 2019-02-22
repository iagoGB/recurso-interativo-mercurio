var lC= "";
var lT = "";
var lI ='';
var changeA = 200;
var pega;
var pmais = 0;
/* {
				var av = [];
				var artigos = [];
				var grupos = [];     /// CUIDADO COM ISSO
				var projetos = [];
				var mostrar;
				var outro;
} */


function tela3(){
	background(bckg);
	 // 0 - escolhendo trilha, 1 - escolhendo grupo

	switch (estadoAtual){
			case 0: //escolhendo trilha
					interfaceEColisao();
					//textSize(20);
					//text(conteudo[idConteudo]+">",50,20);
		break;


	 case 1: // escolhendo grupo
	 			interfaceEColisao2();
				//text(conteudo[idConteudo]+">"trilha[idTrilha],50,20);

	 break;


	};
};

function interfaceEColisao(){
	ondeEstou();
	var px = width/2-110;
	var py = height/2-250;
	var tamanhoX = 300;
	var tamanhoY = 500;
	var lColisao = 200;
	var aColisao = 70;
	var hita;
	var hitg;
	var hitp;
	var voltar;
	fill(255);
	//rect CARTA
	textFont(fonteTexto);
	noStroke();
	//rect(px-cont,py,tamanhoX,tamanhoY);
	image(trilha0,px-cont,py);

	//rect LETREIRO

	//fill(120,120,200);
	//rect(px+20-cont,py,250,100);
	fill(0);
	if (show == " AudioVisual"){
		textSize(30);
	} else {
		textSize(35);
  	}
	textFont(fonteTexto);
	text(show,px+35-cont, py+75);


	//rect artigo

	//fill(50,120,changeA); //200
	//rect(px+60-cont,py+130,lColisao,aColisao);
	fill(0);
	textSize(35);
	textFont(fonteTexto);
	text("Artigos",px+74-cont, py+175);

	//rect grupos
	//fill(50,120,200);
	//rect(px+60-cont,py+250,lColisao,aColisao);
	fill(0);
	textFont(fonteTexto);
	textSize(35);
	text("Grupos",px+78-cont, py+300);

	//rect projetos
	//fill(50,120,200);
	//rect(px+60-cont,py+370,lColisao,aColisao);
	fill(0);
	textFont(fonteTexto);
	textSize(35);
	text("Projetos",px+68-cont, py+420);

	// Identificador//
	fill(255);
	textSize(20);
	textFont(fonteTexto);
	text(lC + " > "+ lT + " > "+ lI,100,700);

	/// COLISOES ///

		hita = collidePointRect(mouseX,mouseY, px+60,py+120, lColisao, aColisao);
		hitg = collidePointRect(mouseX,mouseY,px+60,py+250, lColisao, aColisao);
		hitp = collidePointRect(mouseX,mouseY,px+60,py+370, lColisao, aColisao);
		voltar = collidePointRect(mouseX, mouseY,160,20,88,52);


		//Botoes efeito
		if (hita){
			fill(0);
			if (show == " AudioVisual"){
				textSize(30);
			} else {
				textSize(35);
		 	}
			textFont(fonteTexto);
			image(trilha1,px-cont,py);
			text(show,px+35-cont, py+75);
			textSize(35);
			text("Artigos",px+74-cont, py+175);
			text("Grupos",px+78-cont, py+300);
			text("Projetos",px+68-cont, py+420);
		};
		if (hitg){
			image(trilha2,px-cont,py);
			fill(0);
			if (show == " AudioVisual"){
				textSize(30);
			} else {
				textSize(35);
		  	}
			textFont(fonteTexto);
			text(show,px+35-cont, py+75);
			textSize(35);
			text("Artigos",px+74-cont, py+175);
			text("Grupos",px+78-cont, py+300);
			text("Projetos",px+68-cont, py+420);
		};
		if (hitp){
			image(trilha3,px-cont,py);
			fill(0);
			if (show == " AudioVisual"){
				textSize(30);
			} else {
				textSize(35);
		  }
			textFont(fonteTexto);
			text(show,px+35-cont, py+75);
			textSize(35);
			text("Artigos",px+74-cont, py+175);
			text("Grupos",px+78-cont, py+300);
			text("Projetos",px+68-cont, py+420);
		};
		if (voltar){
			image(bVoltar2,160,20);
		} else {
			image(bVoltar1,160,20);
		}




	 if (mouseIsPressed){
			if (time >= 30){
				if (hita){
					idTrilha = 0;
					//comecaAndar = true;
					soundSwitch2.play();
					time = 0;
					estadoAtual = 1;
					showTrilha = "Artigo";
				};
				if (hitg){
					idTrilha = 1;
					//comecaAndar = true;
					soundSwitch2.play();
					time = 0;
					estadoAtual = 1;
					showTrilha = "Grupo";
				};
				if (hitp){
					idTrilha = 2;
					//comecaAndar = true;
					soundSwitch2.play();
					time = 0;
					showTrilha = "Projeto";
					estadoAtual = 1;
				};
				if (voltar){
					room = "tela2";
					time = 0;
					cont = 0;
					lC = '';
					lT = '';
					lI = '';
				};
			};
	 };
 };

	 function interfaceEColisao2(){
		ondeEstou2();
		var px = width/2-110;
 		var py = height/2-250;
 		var tamanhoX = 300;
 		var tamanhoY = 500;
	 	var hitIndexA;
	 	var hitIndexB;
		var lColisao = 200;
		var aColisao = 70;
		var voltar;

    //Carta
		noFill();
		noStroke();
		//rect(px-cont,py,tamanhoX,tamanhoY);
		image(index0,px - cont,py);
		pegaA = conteudo[idConteudo].trilha[idTrilha].index[2];
		pegaB = conteudo[idConteudo].trilha[idTrilha].index[3];

	 	//rect LETREIRO

		//fill(120,120,200);
		//rect(px+20-cont,py+20,250,100);
		textFont(fonteTexto);
		fill(0);
		if (show == " AudioVisual"){
			textSize(30);
		} else {
			textSize(35);
		}
		textFont(fonteTexto);
		text(show,px+35-cont, py+75);


	 	//rect tal A

		textSize(26);
	 	//text(showTrilha+" A",px+65-cont, py+225);

		text(pegaA,(px+64-cont), py+225);

		//fill(0)
		//rect(px+60-cont,py+180,lColisao,aColisao);

		//text("Artigos",px+78-cont, py+200);
		//fill(0);
		//rect(px+60-cont,py+300,lColisao,aColisao);
	 	//rect tal B

  	//fill(0);
		textSize(26);
		text(pegaB,px+64-cont, py+350);
		print("pegaA:" + pegaA);
		print("pegaB:" + pegaB);


		//Identificador
		fill(255);
		textSize(20);
		text(lC + " > "+ lT + " > "+ lI,100,700);

		/// COLISOES ///
		hitIndexA = collidePointRect(mouseX,mouseY, px+60-cont,py+180,lColisao,aColisao);
		hitIndexB = collidePointRect(mouseX,mouseY,px+60-cont,py+300,lColisao,aColisao);
		//Futuras colocações //hitp = collidePointRect(mouseX,mouseY,px+30,py+220,160,50);
		voltar = collidePointRect(mouseX, mouseY,160,20,88,52);
		if (voltar){
			image(bVoltar2,160,20);
		} else {
			image(bVoltar1,160,20);
		}

		if (hitIndexA){
			image(index1,px-cont,py);
			fill(0);
			if (show == " AudioVisual"){
				textSize(30);
			} else {
				textSize(35);
		  }
			textFont(fonteTexto);

			text(show,px+35-cont, py+75);
			textSize(26);
			text(pegaA,px+64-cont, py+225);
			text(pegaB,px+64-cont, py+350);

		};


		if(hitIndexB){
			image(index2,px-cont,py);
			fill(0);
			if (show == " AudioVisual"){
				textSize(30);
			} else {
				textSize(35);
		  };
			text(show,px+35-cont, py+75);
			textSize(26);
			text(pegaA,px+64-cont, py+225);
			text(pegaB,px+64-cont, py+350);
		}

/*
		print("anda ="+comecaAndar);
		print("hita = "+hita);
		print("cont = "+cont); */

		if (comecaAndar){
			if (cont >= 400){
				//estadoAtual = 1;
				comecaAndar = false;

			} else {
				cont+=10;;
			}
		};


	 if (mouseIsPressed){
			if (time >= 30){
				if (hitIndexA){
					index = 0;
					comecaAndar = true;
					soundSwitch2.play();
					time = 0;
					ondeEstou3();
				};
				if (hitIndexB){
					index = 1;
					comecaAndar = true;
					soundSwitch2.play();
					time = 0;
					ondeEstou3();
				};

				if (voltar){
					estadoAtual = 0;
					time = 0;
					cont = 0;
					lC = '';
					lT = '';
					lI = '';
				};
			};
	 };

	 if (comecaAndar){
		 if (cont >= 400){
			//estadoAtual = 1;
			comecaAndar = false;

		 } else {
			cont+= 10;
		 }

	 };

	 if (cont >= 400){
		 var p = conteudo[idConteudo].trilha[idTrilha].index[index];
		 image(p,width/2-160,height/2-250);
	 };

	};

	function ondeEstou(){
		switch (idConteudo){
			case 0:
			 lC = "AudioVisual";
			break

			case 1:
			lC = "Design";
			break

			case 2:
			lC = "Jogos";
			break

			case 3:
			lC = "Sistemas";
			break
		};
	};

	function ondeEstou2(){
		switch (idTrilha){
			case 0:
			 lT = "Artigos";
			break

			case 1:
			lT = "Grupos";
			break

			case 2:
			lT = "Projetos";
			break
		};
	};

	function ondeEstou3(){
		switch (index){
			case 0:
			 lI = pegaA;
			break;

			case 1:
			lI = pegaB;
			break;

		};
	};
