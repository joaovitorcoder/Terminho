import { Modulopalavras } from './palavra/Modulopalavra.js' // importa o modulo da lista de palavras

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
            if(palavraJogada.includes(Modulopalavras)){
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

