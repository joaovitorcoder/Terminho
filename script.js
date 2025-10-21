let data = new Date()
let hora = data.getHours
let minutos = data.getMinutes

if (hora >= 0){

}
 
let posicaoAtual = 0
let linhaAtual = 0
const linhas = document.querySelectorAll('.linha')
const letras = linhas[linhaAtual].querySelectorAll('.letter') 


//funcao que apaga as letras
function deleteLetras(){
    if(posicaoAtual > 0){
        posicaoAtual--
        letras[posicaoAtual].textContent = ''
    }
}


//funcao que pega as letras
function capturarLetras(){
    //let j = 10
    //if(j >= 10){
        if(posicaoAtual < 5){
            //verifica se tem 5 letras, senao manda um alert
            alert('Tem que conter 5 letras')
            for(let i = posicaoAtual; i > -1; i--){
                letras[i].textContent = ''
                posicaoAtual = 0
            }
        }else{
            let palavra = '';
            letras.forEach(caixinha => {
                palavra += caixinha.textContent
            })
            posicaoAtual = 0
            linhaAtual++
            console.log(palavra)
        }
  //}
    
}

//funcao que adiciona as letras
function addLetras(tecla){
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
            capturarLetras()
            break
        default:
            addLetras(tecla)
            
    }
    // if(event.key === 'Backspace'){
    //     event.preventDefault()
    //     deleteLetras()
    // }else{
    //     addLetras(tecla)
    // }
    // if(event.key === 'Enter'){
    //     capturarLetras()
        
    // }
 })