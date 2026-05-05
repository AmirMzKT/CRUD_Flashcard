import baralhos from "../dados/baralho.js";

function atualizarBaralho(id, novoTitulo) {
  const baralho = baralhos.find(b => b.id === id);

  if (!baralho) {
    console.log("Baralho não encontrado");
    return null;
  }

  baralho.titulo = novoTitulo;
  return baralho;
}

export default atualizarBaralho;