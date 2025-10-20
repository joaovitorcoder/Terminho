let data = new Date()
let hora = data.getHours
let minutos = data.getMinutes

if (hora >= 0){

}

const letras = document.querySelectorAll('.letter')
const linhas = document.querySelectorAll('.linha')//pega todas as linhas
let linhaAtual = 0  
let posicaoAtual = 0

function addLetras(tecla){
    if(/^[a-z]$/i.test(tecla) && posicaoAtual < letras.length){
        letras[posicaoAtual].textContent = tecla.toUpperCase()
        posicaoAtual++
    }
}

function deleteLetras(){
    if(posicaoAtual > 0){
        posicaoAtual--
        letras[posicaoAtual].textContent = ''
    }
}

function capturarLetras(){
    if(posicaoAtual > -1){
        if(posicaoAtual < 5){
            alert('Tem que conter 5 letras')
            for(let i = posicaoAtual; i>0; i--){
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
}

document.addEventListener('keydown', (event) => {
    const tecla = event.key.toLowerCase()
    const letra = linhas[linhaAtual].querySelectorAll('.letter')

    if(event.key === 'Backspace'){
        event.preventDefault()
        deleteLetras()
    }else{
        addLetras(tecla)
    }
    if(event.key === 'Enter'){
        capturarLetras()
    }
})

// const letras = document.querySelectorAll('.letter')
// let posicaoAtual = 0

// document.addEventListener('keydown', (event) => {
    
//     const tecla = event.key.toLowerCase() // ! pega a tecla e transforma ela em minuscula
    
//     if(/^[a-z]$/i.test(event.key) && posicaoAtual < letras.length) {
//         letras[posicaoAtual].textContent = tecla.toUpperCase()
//         posicaoAtual++
        
//     }// ! só aparece no visor letras e não aparece numeros
    
//     if(event.key === 'Backspace' && posicaoAtual > 0){
//         posicaoAtual--
//         letras[posicaoAtual].textContent = ''  
//     }// ! apaga as letras das posicoes quando o backspace é apertado


//     // ! ao pressionar enter pega a palavra somente se tiver 5 letras dentro dos espaços
//     if(event.key === 'Enter'){
//         if(posicaoAtual < 5){
//             alert('A palavra deve ter 5 letras')
//             for(let i = posicaoAtual; 0 < i; i--){
//                 posicaoAtual--
//                 letras[posicaoAtual].textContent = ''
//             }
//         }else{
//             let palavra = '';
//             letras.forEach(caixinha => {
//                 palavra += caixinha.textContent
//             })
//             console.log(palavra)
//         }
//     }

    
// })