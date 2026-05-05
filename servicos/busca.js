import flashcards from "../dados/flashcards.js"

// Buscar por texto na pergunta
export function buscarPorPergunta(texto) {
    return flashcards.filter(f => f.pergunta.toLowerCase().includes(texto.toLowerCase()))
}

// Busca por baralho
export function buscarPorBaralho(idBaralho) {
    return flashcards.filter(f => f.idBaralho === idBaralho)
}