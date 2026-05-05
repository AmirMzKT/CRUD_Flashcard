function removerFlashcard(flashcards, id) {
	const index = flashcards.findIndex(f => f.id === id);

	if (index === -1) {
		console.log("Erro: flashcard não encontrado");
		return false;
	}

	flashcards.splice(index, 1);
	return true;
}