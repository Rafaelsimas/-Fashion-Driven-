function novaImagem(){
    const inputCampo = document.querySelector('#campoUrl')
    const primeiraImagem = document.querySelector('.ilustracao')

    primeiraImagem.innerHTML += `<img class="absolutImage" src="${inputCampo}" />`
    console.log(primeiraImagem)
}
novaImagem()