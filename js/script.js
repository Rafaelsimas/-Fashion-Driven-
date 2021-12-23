let contador = 0

let modelo;
let gola;
let tecido;


/* ====================MODELO======================================= */
function selecionarModelo(seletor, nome){
    modelo = nome
    const selecionado = document.querySelector('.modelo .selecionado')

    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }else {

        contador += 1
    }

    const opcao = document.querySelector(seletor)
    opcao.classList.add('selecionado')

    habilitarBotaoSePedidoCompoleto()
}

/* ====================GOLA======================================= */
function selecionarGola(seletor, nome){
    gola = nome
    const selecionado = document.querySelector('.gola .selecionado')

    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }else {
        contador += 1
    }

    const opcao = document.querySelector(seletor)
    opcao.classList.add('selecionado')

    habilitarBotaoSePedidoCompoleto()
}
/* ====================TECIDO======================================= */
function selecionarTecido(seletor, nome){
    tecido = nome
    const selecionado = document.querySelector('.tecido .selecionado')

    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }else {
        contador += 1
    }

    const opcao = document.querySelector(seletor)
    opcao.classList.add('selecionado')

    habilitarBotaoSePedidoCompoleto()
}

function habilitarBotaoSePedidoCompoleto(){
   
   if(contador === 3){
    const botao = document.querySelector('.fazer-pedido')
    botao.classList.add('ativo')
    botao.innerHTML = 'Fechar pedido'
    const precoTotal =  precoPrato + precoBebida + precoSobremesa
    const mensagem = "Olá eu gostaria de fazer o pedido:\n- Prato: " + prato + "\n Bebida: " + bebida + "\n Sobremesa: " + doce +"\n Total: " + precoTotal.toFixed(2) + " "
    const mensagemFormatada = encodeURIComponent(mensagem) 
    const url = 'https://wa.me/5521996119461?text=' + mensagemFormatada;
    botao.setAttribute('href', url)
   }
}