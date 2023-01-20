const msgNumeroMenor = "Você errou! O numero é menor que o numero secreto!";
const msgNumeroMaior = "Você errou! O numero é maior que o numero secreto!";
const tentativas = 3;
let rodada = 1;

function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

const numeroSecreto = Math.floor(numeroAleatorio(0, 15));

alert("Bem vindo ao jogo de Advinhação!");

while (rodada <= tentativas) {
  alert(`Tentativa ${rodada} de ${tentativas}`);
  const numero = prompt("Digite um numero entre 0 e 15");
  if (numero > numeroSecreto) {
    alert(msgNumeroMaior);
  } else if (numero < numeroSecreto) {
    alert(msgNumeroMenor);
  } else if (numero == numeroSecreto) {
    alert("Você acertou!");
    break;
  }

  rodada = rodada + 1;
}

alert("Fim de jogo!");
