import flashcards from "../dados/flashcards.js";

function atualizarFlashcard(id, novaPergunta, novaResposta) {
  const flashcard = flashcards.find(f => f.id === id);

  if (!flashcard) {
    console.log("Flashcard não encontrado");
    return null;
  }

  flashcard.pergunta = novaPergunta;
  flashcard.resposta = novaResposta;

  return flashcard;
}

export default atualizarFlashcard;