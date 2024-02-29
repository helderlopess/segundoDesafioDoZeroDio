//2 Desafio de codigo - DIO - Helder Lopes 28/02/2024
//CALCULADORA DE NIVEL DO HEROI

//declaração das variáveis globais
let vitorias = 100
let derrotas = 0
let xp = 0 // esse sera o saldo das vitorias legando a variavel do 1 desafio
nivel = ""

//saldo das vitorias
function saldo(vitorias,derrotas) {
  saldo = vitorias - derrotas

  return saldo
}

//ranking do heroi com base nas vitorias
function ranking(xp) {
  if (xp < 10) {
    nivel = "Ferro"
  }

  else if (xp > 9 && xp < 21) {
    nivel = "Bronze"
  }

  else if (xp > 20 && xp < 51) {
    nivel = "Prata"
  }

  else if (xp > 50 && xp < 81) {
    nivel = "Ouro"
  }

  else if (xp > 80 && xp < 91) {
    nivel = "Diamante"
  }

  else if (xp > 90 && xp < 101) {
    nivel = "Lendario"
  }

  else if (xp > 101) {
    nivel = "Imortal"
  }

  return nivel
}

//junta as funções de saldo e de ranking retornando o log
function calculadora(vitorias,derrotas) {
  saldoVitorias = saldo(vitorias,derrotas)

  rankingHeroi = ranking(saldoVitorias)

  return console.log(`O Heroi tem saldo de ${saldoVitorias} vitórias e está no nível ${rankingHeroi}`)
}


//evocando a função global
calculadora(vitorias,derrotas)
