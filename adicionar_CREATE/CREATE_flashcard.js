function adicionar_flashcard(flashcards, baralhos, novo_flashcard) {
	let baralho_existe = false;

	for (let i = 0; i < baralhos.length; i++) {
		if (baralhos[i].id === novo_flashcard.idBaralho) {
			baralho_existe = true;
			break;
		}
	}

	if (!baralho_existe) {
		console.log("erro: baralho não existe");
		return;
	}

	if (flashcards.length > 0) {
		let ultimo = flashcards[flashcards.length - 1];
		novo_flashcard.id = ultimo.id + 1;
	} else {
		novo_flashcard.id = 1;
	}

	flashcards.push(novo_flashcard);
}

export default adicionar_flashcard;
