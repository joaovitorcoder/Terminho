import { Modulopalavras } from './palavra/Modulopalavra.js' // importa o modulo da lista de palavras

class jogo{
    constructor(){
        this.palavraOculta = Modulopalavras[Math.floor(Math.random() * Modulopalavras.length)]
        this.posicaoAtual = 0
        this.linhaAtual = 0
        this.palavraJogada = ''
        this.linhas = document.querySelectorAll('.linha')
    }

    //Metodo que pega sempre a linha atual em que esta o jogador
    getLetrasAtuais(){
        return this.linhas[this.linhaAtual].querySelectorAll('.letter')
    }

    //Metodo de adicionar letra as celulas
    addLetra(tecla){
        const letras = this.getLetrasAtuais()

        if(/^[a-z]$/i.test(tecla) && this.posicaoAtual < letras.length){
            letras[this.posicaoAtual].textContent = tecla.toUpperCase()
            this.posicaoAtual++
        }
    }

    //Metodo de apagar as letras das celulas
    deleteLetras(){
        const letras = this.getLetrasAtuais()

        if(this.posicaoAtual > 0){
            this.posicaoAtual--
            letras[this.posicaoAtual].textContent = ''
        }
    }
}

const jogo1 = new jogo()

document.addEventListener('keydown', (event) => {
    const tecla = event.key.toLowerCase()

    if(event.key === 'Backspace'){
        jogo1.deleteLetras()
    }else{
        jogo1.addLetra(tecla)
    }
})





/*
//funcao que adiciona as letras
function addLetras(tecla){
    const letras = getLetrasAtuais()
    if(/^[a-z]$/i.test(tecla) && posicaoAtual < letras.length){
        letras[posicaoAtual].textContent = tecla.toUpperCase()
        posicaoAtual++
    }
}
let posicaoAtual = 0
let linhaAtual = 0
const linhas = document.querySelectorAll('.linha')

function getLetrasAtuais(){
    return linhas[linhaAtual].querySelectorAll('.letter')
}

//funcao que apaga as letras
function deleteLetras(){
    const letras = getLetrasAtuais()
    if(posicaoAtual > 0){
        posicaoAtual--
        letras[posicaoAtual].textContent = ''
    }
}

let palavradoJogador = ''

//funcao que pega as letras
function capturarLetras(){
    const letras = getLetrasAtuais()

    if(posicaoAtual < letras.length){
        for(let i = posicaoAtual; i > -1; i--){
            letras[i].textContent = ''
            posicaoAtual = 0
        }
        alert('Tem que conter 5 letras')
        return
    }

    letras.forEach(caixinha => {
        palavradoJogador += caixinha.textContent.toLowerCase()
    })
    console.log(palavradoJogador)

    if(linhaAtual < linhas.length - 1){
        linhaAtual++
        posicaoAtual = 0
    }
}

//funcao que adiciona as letras
function addLetras(tecla){
    const letras = getLetrasAtuais()
    if(/^[a-z]$/i.test(tecla) && posicaoAtual < letras.length){
        letras[posicaoAtual].textContent = tecla.toUpperCase()
        posicaoAtual++
    }
}

//adiciona um "ouvinte" ao teclado para qualquer evento de tecla
document.addEventListener('keydown', (event) => {
    const tecla = event.key.toLowerCase()

    switch(event.key){
        case 'Backspace':
            event.preventDefault()
            deleteLetras()
            break
        case 'Enter':
            event.preventDefault()
            capturarLetras()
            let palavraJogada = palavradoJogador
            if(Modulopalavras.includes(palavraJogada)){
                console.log('tem')
            }else{
                console.log('Nao tem')
            }
            palavradoJogador = ''
            break
        default:
            addLetras(tecla)
            
    }
})
*/