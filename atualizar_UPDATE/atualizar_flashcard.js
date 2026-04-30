import PromptSync from "prompt-sync";
const prompt = PromptSync();
import flashcards from "../dados/flashcards.js";

function atualizar_flashcards( pergunta,resposta,id) {
let atualizar_flashcards = flashcard.find(flashcard => flashcard.id === id)
console.log(flashcard)
if (flashcard) {
    flashcards.pergunta= pergunta
    flashcards.resposta= resposta 
    return flashcards
}
}
