function adicionar_baralho(baralhos, novo_baralho) {
	let baralho_existe = false;

	for (let i = 0; i < baralhos.length; i++) {
		if (baralhos[i].titulo === novo_baralho.titulo) {
			baralho_existe = true;
			break;
		}
	}

	if (baralho_existe) {
		console.log("erro: o baralho ja existe");
		return;
	}

	if (baralhos.length > 0) {
		let ultimo_baralho = baralhos[baralhos.length - 1];
		novo_baralho.id = ultimo_baralho.id + 1;
	} else {
		novo_baralho.id = 1;
	}

	baralhos.push(novo_baralho);
}

export default adicionar_baralho;
