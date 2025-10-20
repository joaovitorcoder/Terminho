let data = new Date()
let hora = data.getHours

if (hora >= 0){

}
const letras = document.querySelectorAll('.letter')
let posicaoAtual = 0

document.addEventListener('keydown', (event) => {
    
    const tecla = event.key.toLowerCase() // ! pega a tecla e transforma ela em minuscula
    
    if(/^[a-z]$/i.test(event.key) && posicaoAtual < letras.length) {
        letras[posicaoAtual].textContent = tecla.toUpperCase()
        posicaoAtual ++
        
    }// ! só aparece no visor letras e não aparece numeros
    
    if(event.key === 'Backspace' && posicaoAtual > 0){
        posicaoAtual--
        letras[posicaoAtual].textContent = ''  
    }// ! apaga as letras das posicoes quando o backspace é apertado


    // ! ao pressionar enter pega a palavra somente se tiver 5 letras dentro dos espaços
    if(event.key === 'Enter'){
        if(posicaoAtual < 5){
            alert('A palavra deve ter 5 letras')
            for(let i = posicaoAtual; 0 < i; i--){
                posicaoAtual--
                letras[posicaoAtual].textContent = ''
            }
        }else{
            let palavra = '';
            letras.forEach(caixinha => {
                palavra += caixinha.textContent
            })
            console.log(palavra)
        }
    }

    
})