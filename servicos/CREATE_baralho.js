function criarBaralho(baralhos, novoBaralho) {
	const existe = baralhos.some(b => b.titulo === novoBaralho.titulo);

	if (existe) {
		console.log("Erro: baralho já existe");
		return null;
	}

	novoBaralho.id =
		baralhos.length > 0
			? baralhos[baralhos.length - 1].id + 1
			: 1;

	baralhos.push(novoBaralho);

	return novoBaralho;
}