function remover_flashcard(flashcards, id) {
	let encontrado = false;

	for (let i = 0; i < flashcards.length; i++) {
		if (flashcards[i].id === id) {
			flashcards.splice(i, 1);
			encontrado = true;
			break;
		}
	}

	if (!encontrado) {
		console.log("erro: flashcard não encontrado");
		return;
	}
}

export default remover_flashcard;
