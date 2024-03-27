let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function exibirMensagemConsole() {
    console.log ('O botão foi clicado');
};

function exibirAlerta(){
    alert('Eu amo JS');
}

function mensagemPrompt(){
    let nomeDaCidade = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${nomeDaCidade} e lembrei de você!`);
}

function somaNumeros (){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert (`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}