// a)
let carro = {
	ligado: false,
	velocidade: 0
}

// b)
	//Funciona quando a variave carro não é declarado como 'const':
// carro = {
// 	ligado: false,
// 	velocidade: 0,
// 	ligar: function () {
// 		if(this.ligado){
// 			console.log("Este carro já esta ligado.");
// 		} else {
// 			this.ligado = true;
// 		}
// 	}
// }

	// Outra forma e funciona mesmo declarando a variavel como 'const': 

carro.ligar = function () {
	if(this.ligado){
		console.log("Este carro já esta ligado.");
	} else {
		this.ligado = true;
		console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
	}
}

// c)

carro.desligar = function () {
	if(!this.ligado){
		console.log("Este carro já esta desligado.");
	} else {
		this.ligado = false;
		this.velocidade = 0;
		console.log(`Carro desligado. Velocidade: ${this.velocidade}`);
	}
}

// 1d)

carro.acelerar = function () {
	if (!this.ligado) {
		console.log("Não é possível acelerar um carro desligado.");
	} else {
		this.velocidade += 10;
		console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
	}
}

// 2d)

carro.desacelerar = function () {
	if (!this.ligado) {
		console.log("Não é possível desacelerar um carro desligado.");
	} else {
		this.velocidade -= 10;
		console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
	}
}

// f)
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();