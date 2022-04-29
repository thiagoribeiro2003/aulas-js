//======================================== SOLUÇÃO 1 ==================================================

// declarando a função que é chamada quando clicamos no botão converter do HTML
//function converteDolar() {

    // Pegando o valor digitado pelo campo valorDolar pelo HTML
    //let valorDolar = document.getElementById('valorDolar').value; // value é o valor q a pessoa digitou e nao toda a tag
    
    // Converte o valor digitado considerando o valor do dólar
    //let converteReal = valorDolar * 4.97;

    //let resultado = document.getElementById('resultado');

   // resultado.innerHTML = `O valor convertido em Reais é R$ ${converteReal}`;

    // Mudando a cor para vermelho
   // resultado.style.color = 'color';
// };

/* 
// ======================================== SOLUÇÃO 2 ==================================================

// declarando a função que é chamada quando clicamos no botão converter do HTML
function converteDolar() {

    // Pegando o valor digitado pelo campo valorDolar pelo HTML
    let valorDolar = document.getElementById('valorDolar').value; // value é o valor q a pessoa digitou e nao toda a tag
    
    // Converte o valor digitado considerando o valor do dólar
    let cotacaoDolar = document.getElementById('cotacaoDolar').value;
    let converteReal = valorDolar * cotacaoDolar;

    // imprime o resultado da conversão na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido em Reais é R$ ${converteReal}`;

    // Mudando a cor para vermelho
    resultado.style.color = "red";
};
*/

// ======================================== SOLUÇÃO 3 ==================================================

let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event){
    
    // previne o comportamento padrão do formulário (ao enviar)
    event.preventDefault();

    let cotacao =  parseFloat(document.getElementById('cotacao').value);
    let valor = parseFloat(document.getElementById('valor').value);
    let converte = (valor*cotacao).toFixed(2);
    

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido em reais é ${converte}`; 
});

//let valor = 

