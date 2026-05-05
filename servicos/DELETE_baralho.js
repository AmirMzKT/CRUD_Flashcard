import flashcards from "../dados/flashcards.js";

function removerBaralho(baralhos, id) {
	const index = baralhos.findIndex(b => b.id === id);

	if (index === -1) {
		console.log("Erro: baralho não encontrado");
		return false;
	}

	// remove o baralho
	baralhos.splice(index, 1);

	// remove flashcards vinculados
	for (let i = flashcards.length - 1; i >= 0; i--) {
		if (flashcards[i].idBaralho === id) {
			flashcards.splice(i, 1);
		}
	}

	return true;
}