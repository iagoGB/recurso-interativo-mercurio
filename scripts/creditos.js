var equipe = true;
var direcao = 1;
var m = 0;
setaX = 540;
setaY = 650; //660
function telaCreditos(){
	var voltar = false;
	var segue = false;
	background (darkBckg);
	textSize(50);
	var voltar = false;
	if (equipe){
		image(credito0,250,50);
	} else {
		image(credito1,250,50);
	};
	fill(0);
	//rect(540,660,121,111);

	segue = collidePointRect(mouseX, mouseY+direcao,setaX,setaY,121,111);
	if (equipe){
		if (segue){
			image(seta1,setaX,setaY+direcao);
		} else {
			image(seta0,setaX,setaY+direcao);
		};
	};




	voltar = collidePointRect(mouseX, mouseY,160,20,88,52);
	if (voltar){
		image(bVoltar2,160,20);
	} else {
		image(bVoltar1,160,20);
	}

	if (mouseIsPressed){
		if (time > 50){
			if (segue){
				equipe = false;
				time = 0;
				soundSwitch2.play();
			};
			if (voltar){
				room = "tela1"
				soundSwitch2.play();
				time = 0;
				equipe = true;
			};
		}
	}

	if (equipe){
		if (direcao > 50.0){
			direcao = 0.0000000001;
		};
		direcao += float(direcao);
		print("Direção: "+ direcao);
	}

};