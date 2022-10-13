const elementoChute = document.getElementById("chute")

//importado do web speech API pesquisado no google
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)
//importado do web speech API pesquisado no google

function onSpeak(e) { //o "e" refere-se ao evento que vem do results no console.log
    console.log(e.results[0][0].transcript) //acessa os DOIS ARRAYS que estão no log na posição 0

    chute = e.results[0][0].transcript //transcript refere-se ao SOM no objeto
    exibeChuteNaTela(chute)
    VerificaSechutePossuiValorValido(chute)
    gameOver(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

function gameOver(chute) {
    if (chute == "game over") {
        document.body.innerHTML = `<h2 class="game-over">GAME OVER</h2>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        document.body.style.backgroundColor = "black"
    }
}

recognition.addEventListener('end', () => recognition.start()) //continuará captando som