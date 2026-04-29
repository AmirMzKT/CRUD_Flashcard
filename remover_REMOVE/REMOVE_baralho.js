function remover_baralho(baralhos, titulo) {
	let baralho_encontrado = false;

	for (let i = 0; i < baralhos.length; i++) {
		if (baralhos[i].titulo === titulo) {
			baralhos.splice(i, 1);
			baralho_encontrado = true;
			break;
		}
	}

	if (!baralho_encontrado) {
		console.log("erro: baralho não encontrado");
		return;
	}
}

export default remover_baralho;
