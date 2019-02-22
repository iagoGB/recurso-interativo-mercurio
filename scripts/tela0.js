var change  = 0;
var textoAtual;
var sh = 0;
var prox,creditos;
var xPos = 100,yPos = 900, mov = 5, yPos2 = - 200, mov2 = 2;

function tela0(){

	background (darkBckg);
	fill(255);
	textSize(50);
	image(smdog,750,yPos);
	tint(255,sh)
	noStroke();
	fill(255,sh);
	
	if (change == 0){
		image(textoSmdog0,75,50);
		//text("Esse é o texto 1. Bla bla bla",100,150);
	} 

	if (change == 1){
		image(textoSmdog1,75,50);
		//if (time >10)
		//text("Se tu apertar mais uma vez tu vai pra proxima",100,150);
	}

	if (change == 2){
		room = "tela1";
		change = 0;
		time = 0;
		sh = 0;
	}

	
	yPos -= mov;

	if(yPos <=150){
		yPos = 150;
	};

	if (yPos <=150){
		if (sh < 255){
			sh += 10;
		};
	};
	
	//rect(920, 200,100,25);
	prox = collidePointRect(mouseX,mouseY,940,200,100,25);
	
	if (yPos <=150){
		if (prox){
			image(button1,940,200);
		} else {
			image(button0,940,200);
		};
	};

	
	if (mouseIsPressed){
		if (yPos <=150){
			if (time > 30){

				if (prox){
					change += 1
					sh -= 250;
					time = 0;
					if (change >1){
						soundSwitch.play();
					} else {
						soundSwitch2.play();
					};
				};
			};
		};
	};
};

