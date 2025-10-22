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

    capturarLetras(){
        const letras = this.getLetrasAtuais()

        if(this.posicaoAtual < letras.length){
            for(let i = this.posicaoAtual; i >= 0; i--){
                letras[i].textContent = ''
            }
            this.posicaoAtual = 0
            alert('Tem que conter 5 letras')
            return
        }

        letras.forEach(box => {
            this.palavraJogada += box.textContent.toLowerCase()
        })
        console.log('Palavra jogada: ',this.palavraJogada)

        if(this.linhaAtual < this.linhas.length){
            this.linhaAtual++
            this.posicaoAtual = 0
        }
    }



}

const jogo1 = new jogo()

document.addEventListener('keydown', (event) => {
    const tecla = event.key.toLowerCase()

    switch(event.key){
        case 'Backspace':
            event.preventDefault()
            jogo1.deleteLetras()
            break
        case 'Enter':
            jogo1.capturarLetras()
            if(Modulopalavras.includes(jogo1.palavraJogada)){
                console.log('tem')
            }else{
                console.log('Nao tem')
            }
            jogo1.palavraJogada = ''
            break
        default:
            jogo1.addLetra(tecla)
            
    }
})