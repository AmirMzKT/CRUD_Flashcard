import flashcards from "../dados/flashcards.js";

function listarPorBaralho(idBaralho) {
  return flashcards.filter(f => f.idBaralho === idBaralho);
}

export default listarPorBaralho;