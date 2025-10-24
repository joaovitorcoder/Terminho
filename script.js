import { Modulopalavras } from './palavra/Modulopalavra.js' // importa o modulo da lista de palavras

class jogo{
    constructor(){
        this.palavraOculta = Modulopalavras[Math.floor(Math.random() * Modulopalavras.length)]
        this.posicaoAtual = 0
        this.linhaAtual = 0
        this.palavraJogada = ''
        this.linhas = document.querySelectorAll('.linha')
        this.indiceClicado = 0

        this.verificarCaixinha()

        this.getLetrasAtuais()[this.posicaoAtual].classList.add('ativo')
    }

    //Metodo que pega sempre a linha atual em que esta o jogador
    getLetrasAtuais(){
        return this.linhas[this.linhaAtual].querySelectorAll('.letter')
    }

    verificarCaixinha(){
        const letras = this.getLetrasAtuais()
        
        letras.forEach((box, index) => {
            box.addEventListener('click', () => {
                letras.forEach(b => b.classList.remove('ativo'))
                console.log('box clicada: ', index)
                this.indiceClicado = index          
                this.posicaoAtual = this.indiceClicado
                box.classList.add('ativo')
                console.log('A posicao atual é', this.indiceClicado)
            })
        })
    }
    
    capturarLetras(){
        const letras = this.getLetrasAtuais()
        
        if(this.posicaoAtual < letras.length){
            for(let i = this.posicaoAtual; i >= 0; i--){
                letras[i].textContent = ''
            }

            letras[this.posicaoAtual].classList.remove('ativo')
            this.posicaoAtual = 0
            letras[this.posicaoAtual].classList.add('ativo')
            alert('Tem que conter 5 letras')
            return
        }

        this.getLetrasAtuais()[this.posicaoAtual - 1].classList.remove('ativo')

        letras.forEach(box => {
            this.palavraJogada += box.textContent.toLowerCase()
        })
        console.log('Palavra jogada: ',this.palavraJogada)

        if(this.linhaAtual < this.linhas.length){
            this.linhaAtual++
            this.posicaoAtual = 0
            
        }

        this.getLetrasAtuais()[this.posicaoAtual].classList.add('ativo')
        
    }   
    

    //Metodo de adicionar letra as celulas
    addLetra(tecla){
        const letras = this.getLetrasAtuais()

        if(/^[a-z]$/i.test(tecla) && this.posicaoAtual < letras.length){
            letras[this.posicaoAtual].textContent = tecla.toUpperCase()
            this.posicaoAtual++
        }

        letras[this.posicaoAtual].classList.add('ativo')
        letras[this.posicaoAtual - 1].classList.remove('ativo')

    }
    
    
    //Metodo de apagar as letras das celulas
    deleteLetras(){
        const letras = this.getLetrasAtuais()
        
        if(this.indiceClicado != 0){
            letras[this.posicaoAtual].textContent = ''
            this.posicaoAtual--
        }else if(this.posicaoAtual != 0){
            this.posicaoAtual--
            letras[this.posicaoAtual].textContent = ''
        }

        letras[this.posicaoAtual].classList.add('ativo')
        letras[this.posicaoAtual + 1].classList.remove('ativo')
    }
    

}

const game = new jogo()
window.game = game

document.addEventListener('keydown', (event) => {
    const tecla = event.key.toLowerCase()

    switch(event.key){
        case 'Backspace':
            event.preventDefault()
            game.deleteLetras()
            break
        case 'Enter':
            game.capturarLetras()
            if(Modulopalavras.includes(game.palavraJogada)){
                console.log('tem')
            }else{
                console.log('Nao tem')
            }
            game.palavraJogada = ''
            break
        
        case 'click':
            game.verificarCaixinha()
            game.deleteLetras()
            break
        default:
            game.addLetra(tecla)
            
    }
})