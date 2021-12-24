const nome = prompt('Olá seja muito bem vindo ao FashionDriven. Qual é o seu nome ?')

let contador = 0

let modelo;
let gola;
let tecido;


/* ====================PRATOS======================================= */
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

/* ====================BEBIDAS======================================= */
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
/* ====================SOBREMESA======================================= */
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
    const produtos =  modelo + gola + tecido
    
    const mensagem = "Olá eu gostaria de fazer o pedido:\n- Modelo: " + modelo + "\n Gola: " + gola + "\n Tecido: " + tecido +""
    const mensagemFormatada = mensagem
   const pedido = confirm(mensagemFormatada)

   }
}






