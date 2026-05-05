function criarFlashcard(flashcards, baralhos, novoFlashcard) {
	const existe = baralhos.some(b => b.id === novoFlashcard.idBaralho);

	if (!existe) {
		console.log("Erro: baralho não existe");
		return null;
	}

	novoFlashcard.id =
		flashcards.length > 0
			? flashcards[flashcards.length - 1].id + 1
			: 1;

	flashcards.push(novoFlashcard);

	return novoFlashcard;
}