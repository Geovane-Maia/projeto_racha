/*const jogadores = [
    "Lucas", "Pedro", "João", "Mateus", "Gabriel",
    "Marcos", "Ricardo", "Rafael", "Thiago", "Diego"
];

let time1 = [];
let time2 = null;
let jogadorSorteado = null;
for (let i = 0; i < jogadores.length; i++) {
    while(time1.length < 5 ) {
        jogadorSorteado = Math.floor(Math.random() * jogadores.length);
        if(!time1.includes(jogadores[jogadorSorteado]) && time1.length < 5) {
            time1.push(jogadores[jogadorSorteado])
        }
        }
    
        console.log(time1);   
}*/
let jogadorListado = ''
let qtdJogadores = ''
let qtdLista = []
let contador = 0;
function inserirJogador() {
    qtdJogadores = document.getElementById('qtdjogadores').value;
    contador += 1
    if (qtdLista.length < qtdjogadores) {
        jogadorListado = document.getElementById('nomes').value;
        document.getElementById('listados').innerHTML += contador + '.' + ' ' + jogadorListado + '<br>'
        qtdLista.push(jogadorListado)
    } else {
        alert('erro')
        return
    }

}


