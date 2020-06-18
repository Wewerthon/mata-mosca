
// Pegando a largura e altura da página
let altura = window.innerHeight;
let largura = window.innerWidth;
let vidas = 1;
let tempo = 60;
let nivel = window.location.search.replace('?', '')
let dificuldade =  1500;

if (nivel == 'normal'){
    dificuldade =  1500;
} else if (nivel == 'dificil'){
    dificuldade =  1000;
} else if(nivel == 'chucknorris'){
    dificuldade =  600;
}


// definindo nível

if (nivel == 'normal'){

}

// Atualiza o tamanho de se o tamanho da página sofrer alteração
function atualizaTamanho() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

let conometro = setInterval(function () {
    tempo -= 1;
    console.log(tempo)

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000)


function putRadomFly() {
    // Verificando se já existe uma mosca no body
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'images/coracao_vazio.png'
            vidas++;
        }
    }

    /*
     Criando numeros para representarem a posição de forma aleatória,
      não deixando que esta ultrapasse os limites do body
    */

    posicaoY = Math.floor(Math.random() * altura - 90)
    posicaoX = Math.floor(Math.random() * largura - 90)

    posicaoY = posicaoY < 0 ? posicaoY = 0 : posicaoY
    posicaoX = posicaoX < 0 ? posicaoX = 0 : posicaoX

    // Colocando e estilizando a mosca no body
    let mosca = document.createElement('img')
    document.body.appendChild(mosca)
    mosca.src = 'images/mosca.png'
    mosca.style.position = 'absolute'
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.width = Math.floor(20 + (80 * Math.random())) + 'px'
    mosca.style.height = mosca.style.width;
    mosca.style.transform = Math.floor(Math.random() * 2) == 0 ? 'scalex(-1)' : 'scalex(1)';
    mosca.id = 'mosca'
    mosca.onclick = function () {
        document.getElementById('mosca').remove()
    }
}







