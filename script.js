let quantidadeJogadores = 4
let botao = document.getElementById('botao')
let input = document.getElementById("nomes");
let nomeJogador = ''
let jogadores = ''

let lista = document.getElementById("listados");
let contador = 0

function inserirJogador() {
    quantidadeJogadores = document.getElementById("qtdjogadores").value;
    quantidadeJogadores <= 0 ? input.disabled = true : input.disabled = false;
    quantidadeJogadores == '' ? botao.disabled = false : botao.disabled = true;     
    
}

function criarListaJogadores() {
    nomeJogador = document.getElementById("nomes").value;
    if(contador < quantidadeJogadores) {
      jogadores = nomeJogador
      contador++
      document.getElementById("listados").innerHTML += contador + '.' + ' ' + jogadores + '<br>'     
    }
        }