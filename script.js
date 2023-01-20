const msgNumeroMenor = "Você errou! O numero é menor que o numero secreto!";
const msgNumeroMaior = "Você errou! O numero é maior que o numero secreto!";
const tentativas = 3;
let rodada = 1;
const numeroSecreto = 10;

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
