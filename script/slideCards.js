const listaCartoes = document.querySelector(".card-list"); // Seleciona a lista de cartões
const botaoAnterior = document.getElementById("prev"); // Botão "Anterior"
const botaoProximo = document.getElementById("next"); // Botão "Próximo"

// Define a largura a ser rolada (no caso, o tamanho do cartão)
const larguraRolagem = 350;

// Evento para rolar à esquerda (botão "Anterior")
botaoAnterior.addEventListener("click", () => {
  listaCartoes.scrollBy({
    left: -larguraRolagem, // Rola para a esquerda
    behavior: "smooth", // Rolagem suave
  });
});

// Evento para rolar à direita (botão "Próximo")
botaoProximo.addEventListener("click", () => {
  listaCartoes.scrollBy({
    left: larguraRolagem, // Rola para a direita
    behavior: "smooth", // Rolagem suave
  });
});









let arrastando = false; // Indica se o usuário está arrastando
let inicioX; // Posição inicial do toque
let scrollInicial; // Posição inicial do scroll

listaCartoes.addEventListener("touchstart", (evento) => {
  arrastando = true;
  inicioX = evento.touches[0].pageX - listaCartoes.offsetLeft; // Obtém a posição inicial do toque
  scrollInicial = listaCartoes.scrollLeft; // Obtém a posição inicial do scroll
});

listaCartoes.addEventListener("touchmove", (evento) => {
  if (!arrastando) return; // Só funciona se estiver arrastando
  const xAtual = evento.touches[0].pageX - listaCartoes.offsetLeft; // Posição atual do toque
  const deslocamento = xAtual - inicioX; // Calcula o deslocamento do toque
  listaCartoes.scrollLeft = scrollInicial - deslocamento; // Ajusta o scroll com base no deslocamento
});

listaCartoes.addEventListener("touchend", () => {
  arrastando = false; // Finaliza o arraste
});
















let indiceAtual = 0; // Índice do cartão visível atualmente
const cartoes = document.querySelectorAll(".card-item"); // Seleciona todos os cartões

function trocarSlideAutomatico() {
  indiceAtual = (indiceAtual + 1) % cartoes.length; // Atualiza o índice (ciclo infinito)
  listaCartoes.scrollTo({
    left: indiceAtual * larguraRolagem, // Calcula a posição para rolar
    behavior: "smooth", // Rola suavemente
  });
}

// Inicia o timer
setInterval(trocarSlideAutomatico, 5000); // Executa a função a cada 5 segundos





















