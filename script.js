const jogadores = [
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
    
    
}





//document.getElementById('sortear').addEventListener('click', () => {
  //  console.log(jogadores);
    
//})